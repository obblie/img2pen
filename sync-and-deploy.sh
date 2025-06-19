#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

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
    
    # Add source changes
    git add $SOURCE_FILES
    
    # Generate commit message for source changes
    SOURCE_TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    SOURCE_COMMIT_MSG="Update source files - ${SOURCE_TIMESTAMP}"
    
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
echo -e "${BLUE}📋 Changes to be committed:${NC}"
git diff --name-status HEAD -- docs/

# Add and commit changes
echo -e "${BLUE}💾 Committing changes...${NC}"
git add docs/

# Generate commit message with timestamp and build info
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
COMMIT_HASH=$(git rev-parse --short HEAD)
COMMIT_MSG="Deploy: sync docs/ with dist/ - ${TIMESTAMP} (${COMMIT_HASH})"

git commit -m "$COMMIT_MSG"

echo -e "${GREEN}✅ Changes committed: ${COMMIT_MSG}${NC}"

# Push to remote
echo -e "${BLUE}🌐 Pushing to remote...${NC}"
if ! git push; then
    echo -e "${RED}❌ Push failed${NC}"
    exit 1
fi

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${GREEN}   Your changes are now live${NC}" 