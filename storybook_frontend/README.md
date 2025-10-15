# Lightweight React Template for KAVIA

This project provides a minimal React template with Storybook v8 configured for React + Webpack5.

## Quick start

- Install dependencies:
  npm install

- Start Storybook (binds 0.0.0.0:3000):
  npm start
  or
  npm run start:storybook

- Start the CRA app on port 3300 (optional):
  npm run start:app

- Build Storybook:
  npm run build-storybook

- Run tests:
  npm test

## Notes

- The Storybook CLI is installed as a devDependency and available at node_modules/.bin/storybook.
- Storybook runs on http://localhost:3000 and binds to 0.0.0.0 for container health checks.
- The CRA dev server is moved to port 3300 to avoid conflicts with Storybook.
- If you encounter peer dependency resolution issues, .npmrc sets legacy-peer-deps=true for install reliability.
