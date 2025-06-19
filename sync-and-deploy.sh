#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to generate descriptive commit message based on changes
generate_commit_message() {
    local file_list="$1"
    local commit_type="$2"
    local timestamp="$3"
    
    # Count changes by type
    local js_changes=$(echo "$file_list" | grep -c '\.js$' || echo "0")
    local html_changes=$(echo "$file_list" | grep -c '\.html$' || echo "0")
    local json_changes=$(echo "$file_list" | grep -c '\.json$' || echo "0")
    local css_changes=$(echo "$file_list" | grep -c '\.css$' || echo "0")
    local other_changes=$(echo "$file_list" | grep -v -E '\.(js|html|json|css)$' | grep -c . || echo "0")
    
    # Count total files
    local total_files=$(echo "$file_list" | grep -c . || echo "0")
    
    # Generate change summary
    local change_summary=""
    if [ "$js_changes" -gt 0 ]; then
        change_summary="${change_summary}${js_changes} JS"
    fi
    if [ "$html_changes" -gt 0 ]; then
        [ -n "$change_summary" ] && change_summary="${change_summary}, "
        change_summary="${change_summary}${html_changes} HTML"
    fi
    if [ "$json_changes" -gt 0 ]; then
        [ -n "$change_summary" ] && change_summary="${change_summary}, "
        change_summary="${change_summary}${json_changes} JSON"
    fi
    if [ "$css_changes" -gt 0 ]; then
        [ -n "$change_summary" ] && change_summary="${change_summary}, "
        change_summary="${change_summary}${css_changes} CSS"
    fi
    if [ "$other_changes" -gt 0 ]; then
        [ -n "$change_summary" ] && change_summary="${change_summary}, "
        change_summary="${change_summary}${other_changes} other"
    fi
    
    # Generate descriptive message based on file types and patterns
    local description=""
    if echo "$file_list" | grep -q "main\.js"; then
        if echo "$file_list" | grep -q "index\.html"; then
            description="Core app updates (UI + logic)"
        else
            description="Core logic updates"
        fi
    elif echo "$file_list" | grep -q "index\.html"; then
        description="UI/interface updates"
    elif echo "$file_list" | grep -q "package\.json"; then
        description="Dependency updates"
    elif echo "$file_list" | grep -q "vite\.config\.js"; then
        description="Build configuration updates"
    else
        description="Project updates"
    fi
    
    # Build final commit message
    if [ "$commit_type" = "source" ]; then
        echo "${description} - ${total_files} files (${change_summary}) - ${timestamp}"
    else
        echo "Deploy: ${description} - ${total_files} files (${change_summary}) - ${timestamp}"
    fi
}

# Function to get git change stats
get_change_stats() {
    local file_pattern="$1"
    git diff --stat HEAD -- $file_pattern | tail -n 1 | sed 's/^ *//'
}

echo -e "${BLUE}🚀 Starting sync and deploy process...${NC}"

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}❌ Error: Not in a git repository${NC}"
    exit 1
fi

# Check for uncommitted changes in source files and auto-commit them
SOURCE_FILES="src/ index.html package.json package-lock.json vite.config.js"
if ! git diff --quiet HEAD -- $SOURCE_FILES; then
    echo -e "${BLUE}📝 Auto-committing source changes...${NC}"
    
    # Show what will be committed
    echo -e "${BLUE}📋 Source changes to be committed:${NC}"
    git diff --name-status HEAD -- $SOURCE_FILES
    
    # Get change statistics
    CHANGE_STATS=$(get_change_stats "$SOURCE_FILES")
    echo -e "${BLUE}📊 Change stats: ${CHANGE_STATS}${NC}"
    
    # Get list of changed files for commit message
    CHANGED_FILES=$(git diff --name-only HEAD -- $SOURCE_FILES)
    
    # Add source changes
    git add $SOURCE_FILES
    
    # Generate descriptive commit message for source changes
    SOURCE_TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    SOURCE_COMMIT_MSG=$(generate_commit_message "$CHANGED_FILES" "source" "$SOURCE_TIMESTAMP")
    
    git commit -m "$SOURCE_COMMIT_MSG"
    echo -e "${GREEN}✅ Source changes committed: ${SOURCE_COMMIT_MSG}${NC}"
fi

# Build the project
echo -e "${BLUE}📦 Building project...${NC}"
if ! npm run build; then
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully${NC}"

# Sync dist/ to docs/
echo -e "${BLUE}🔄 Syncing dist/ to docs/...${NC}"
if [ -d "docs" ]; then
    rm -rf docs/*
else
    mkdir -p docs
fi

cp -r dist/* docs/

# Check if there are any changes to commit
if git diff --quiet HEAD -- docs/; then
    echo -e "${YELLOW}ℹ️  No changes to deploy${NC}"
    exit 0
fi

# Show what will be committed
echo -e "${BLUE}📋 Deployment changes to be committed:${NC}"
git diff --name-status HEAD -- docs/
DEPLOY_CHANGE_STATS=$(get_change_stats "docs/")
echo -e "${BLUE}📊 Deployment stats: ${DEPLOY_CHANGE_STATS}${NC}"

# Get source commit info for deployment message
LATEST_SOURCE_COMMIT=$(git log -1 --oneline --grep="Update source files\|Core app updates\|Core logic updates\|UI/interface updates\|Dependency updates\|Build configuration updates\|Project updates" --format="%h %s")
if [ -z "$LATEST_SOURCE_COMMIT" ]; then
    LATEST_SOURCE_COMMIT=$(git log -1 --oneline --format="%h %s")
fi

# Add and commit changes
echo -e "${BLUE}💾 Committing deployment...${NC}"
git add docs/

# Generate comprehensive commit message with build info
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
COMMIT_HASH=$(git rev-parse --short HEAD)
DEPLOYED_FILES=$(git diff --name-only HEAD -- docs/)

# Create detailed deployment commit message
if [ -n "$LATEST_SOURCE_COMMIT" ]; then
    DEPLOY_COMMIT_MSG="Deploy: $(echo "$LATEST_SOURCE_COMMIT" | cut -d' ' -f2-) → Production
    
🔨 Built from: $(echo "$LATEST_SOURCE_COMMIT" | cut -d' ' -f1)
📦 Generated: $(echo "$DEPLOYED_FILES" | wc -l | tr -d ' ') files
⏰ Timestamp: ${TIMESTAMP}
🏷️  Build: ${COMMIT_HASH}"
else
    DEPLOY_COMMIT_MSG=$(generate_commit_message "$DEPLOYED_FILES" "deploy" "$TIMESTAMP")
fi

git commit -m "$DEPLOY_COMMIT_MSG"

echo -e "${GREEN}✅ Deployment committed with detailed message${NC}"

# Push to remote
echo -e "${BLUE}🌐 Pushing to remote...${NC}"
if ! git push; then
    echo -e "${RED}❌ Push failed${NC}"
    exit 1
fi

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${GREEN}   Your changes are now live${NC}"
echo -e "${BLUE}📝 Latest commits:${NC}"
git log -2 --oneline 