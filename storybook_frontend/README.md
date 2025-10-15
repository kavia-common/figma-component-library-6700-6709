# Lightweight React + Storybook Template (Ocean Professional)

Minimal React template with Storybook v8 (React + Webpack5) and MDX3 Docs.

## Quick start

- Install dependencies:
  npm install

- Start Storybook (serves on http://localhost:3000 and binds 0.0.0.0):
  npm start
  or
  npm run start:storybook
  // Under the hood: storybook dev -p 3000 --host 0.0.0.0 --ci

- Start the CRA app on port 3300 (optional):
  npm run start:app

- Build Storybook:
  npm run build-storybook

## Notes

- Storybook CLI is installed as a devDependency and available at node_modules/.bin/storybook.
- Storybook runs on http://localhost:3000 and binds to 0.0.0.0 for container health checks.
- CRA dev server runs on http://localhost:3300 to avoid port conflicts with Storybook.
- Storybook v8 React Webpack5 builder configured in .storybook/main.js with:
  - framework: '@storybook/react-webpack5'
  - addons: ['@storybook/addon-essentials', '@storybook/preset-create-react-app', '@storybook/addon-docs']
  - docs: { autodocs: 'tag' }
  - stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)']
  - webpackFinal includes explicit MDX v3 rule via @mdx-js/loader
- Global Storybook theme styles are imported via .storybook/preview.js from src/styles/storybook-theme.css.

## Troubleshooting

- MDX parse errors (e.g., "Module parse failed" on .mdx):
  - Ensure @mdx-js/loader@^3 and @mdx-js/react@^3 are installed (devDependencies).
  - Verify .storybook/main.js has an explicit webpackFinal rule using '@mdx-js/loader'.
  - Confirm stories globs include .mdx: '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'.

- JSX syntax errors in stories:
  - The CRA preset (@storybook/preset-create-react-app) injects Babel config.
  - If needed, add a minimal .babelrc with the CRA preset or @babel/preset-react for Storybook only.
