# Storybook Usage

- Start Storybook (port 3000, binds 0.0.0.0):
  npm install
  npm start
  or
  npm run start:storybook
  # Equivalent explicit command:
  npx storybook dev -p 3000 --host 0.0.0.0 --ci

- Start the original React app (moved to 3300 to avoid port conflict):
  npm run start:app

- Build Storybook:
  npm run build-storybook

Notes:
- Storybook runs on http://localhost:3000 and binds to 0.0.0.0 for container health checks.
- The CRA dev server is moved to port 3300 to prevent conflicts.
- Storybook v8 React Webpack5 builder is used. Configuration files:
  - .storybook/main.js (framework/react-webpack5, stories, addons, autodocs)
  - .storybook/preview.js (global CSS, parameters)

Ocean Professional theme is applied globally via src/styles/storybook-theme.css.
