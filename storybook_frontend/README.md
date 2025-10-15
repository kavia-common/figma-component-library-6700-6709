# Lightweight React + Storybook Template (Ocean Professional)

Minimal React template with Storybook v8 (React + Webpack5) and Docs.

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
- No custom MDX webpack overrides are used. Storybook 8 provides built-in indexers and MDX handling through addon-docs.
- An Intro page is provided as CSF: src/Intro.stories.jsx.

## Troubleshooting

- MDX indexer errors (e.g., "No matching indexer found" on .mdx):
  - Do not add custom '@mdx-js/loader' rules in webpackFinal — they can override Storybook's built-in indexers.
  - Use CSF stories (e.g., .stories.jsx) for docs/intro pages, or rely on the built-in MDX support from '@storybook/addon-docs' without custom loaders.
  - Ensure addons include '@storybook/addon-docs' and the stories glob includes 'mdx' if you keep MDX stories.

- JSX syntax errors in stories:
  - The CRA preset (@storybook/preset-create-react-app) injects Babel config.
  - If needed, add a minimal .babelrc with '@babel/preset-react' for Storybook only.

---

## Static Figma Screens

This project includes a static export of the "Dashboard Dark" screen for quick visual reference.

- Storybook story:
  - Title: Static Screens/Dashboard Dark (0:3)
  - How to view: Start Storybook (npm start) and open the story from the sidebar.

- Served HTML:
  - URL: http://localhost:3000/static/dashboard-dark-0-3.html
  - Backed by files in storybook_frontend/public/static/

- File locations:
  - Public (served by Storybook):
    - storybook_frontend/public/static/dashboard-dark-0-3.html
    - storybook_frontend/public/static/dashboard-dark-0-3.css
    - storybook_frontend/public/static/dashboard-dark-0-3.js
  - Internal copies (for reference in this container):
    - storybook_frontend/assets/dashboard-dark-0-3.html
    - storybook_frontend/assets/dashboard-dark-0-3.css
    - storybook_frontend/assets/dashboard-dark-0-3.js

- Images:
  - Served via Storybook staticDirs at /assets/*
  - Copied sample: storybook_frontend/public/assets/figmaimages/figma_image_0_69.png
  - The static JS references images using the /assets/ path to avoid 404s.

Note: The static export is rendered within an iframe in Storybook to preserve the original HTML/CSS/JS layout and scaling logic.
