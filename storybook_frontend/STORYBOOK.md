# Storybook Usage

- Start Storybook (port 3000, binds 0.0.0.0):  
  npm start
  or
  npm run start:storybook

- Start the original React app (moved to 3300 to avoid port conflict):  
  npm run start:app

- Build Storybook:  
  npm run build-storybook

Notes:
- Storybook runs on http://localhost:3000 and binds to 0.0.0.0 for container health checks.
- The CRA dev server is moved to port 3300 to prevent conflicts.
- Storybook v8 React Webpack5 builder is used. Dependencies are pinned for stability.

Ocean Professional theme is applied globally. Use the Theme Mode toolbar control to toggle light/dark.
