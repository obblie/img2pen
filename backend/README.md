# img2pen-backend

This backend receives STL order submissions from the frontend and commits them to your GitHub repo using the GitHub API.

## Setup

1. Copy `.env.example` to `.env` and fill in your GitHub token and repo info:

```
cp .env.example .env
```

2. Install dependencies:

```
npm install
```

3. Start the server:

```
npm start
```

The server will listen on port 3001 by default.

## Environment Variables

- `GITHUB_TOKEN`: Your GitHub personal access token (with `repo` scope)
- `GITHUB_REPO`: e.g. `yourusername/yourrepo`
- `GITHUB_BRANCH`: (default: `main`)
- `GITHUB_PATH`: Directory in your repo to save STL files (default: `orders`)

## How it works

- The frontend POSTs a multipart form to `/api/submit-order` with fields: `name`, `email`, and `file` (the STL file).
- The backend creates a commit in your repo, saving the STL file to the specified directory.

## Deployment

You can deploy this backend to any Node.js host (Render, Railway, Heroku, etc). Make sure to set the environment variables securely. 