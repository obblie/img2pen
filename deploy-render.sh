#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Preparing for Render deployment...${NC}"

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}❌ Error: Not in a git repository${NC}"
    exit 1
fi

# Check for uncommitted changes in source files and auto-commit them
SOURCE_FILES="src/ index.html package.json package-lock.json vite.config.js render.yaml"
if ! git diff --quiet HEAD -- $SOURCE_FILES; then
    echo -e "${BLUE}📝 Auto-committing source changes...${NC}"
    
    # Show what will be committed
    echo -e "${BLUE}📋 Source changes to be committed:${NC}"
    git diff --name-status HEAD -- $SOURCE_FILES
    
    # Add source changes
    git add $SOURCE_FILES
    
    # Generate commit message for source changes
    SOURCE_TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    SOURCE_COMMIT_MSG="Update source files for Render deployment - ${SOURCE_TIMESTAMP}"
    
    git commit -m "$SOURCE_COMMIT_MSG"
    echo -e "${GREEN}✅ Source changes committed: ${SOURCE_COMMIT_MSG}${NC}"
fi

# Push to remote (Render will auto-deploy from main branch)
echo -e "${BLUE}🌐 Pushing to remote for Render auto-deployment...${NC}"
if ! git push; then
    echo -e "${RED}❌ Push failed${NC}"
    exit 1
fi

echo -e "${GREEN}🎉 Code pushed successfully!${NC}"
echo -e "${GREEN}   Render will automatically build and deploy your changes${NC}"
echo -e "${BLUE}   Check your Render dashboard for deployment status${NC}" 