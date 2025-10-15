# Storybook Usage

- Install and start Storybook (port 3000, binds 0.0.0.0):
  npm install
  npm start
  or
  npm run start:storybook
  # Equivalent explicit command:
  npx storybook dev -p 3000 --host 0.0.0.0 --ci

- Start the CRA app (optional, runs on port 3300):
  npm run start:app

- Build Storybook:
  npm run build-storybook

Notes:
- Storybook runs on http://localhost:3000 and binds to 0.0.0.0 for container health checks.
- CRA dev server is moved to port 3300 to prevent conflicts.
- MDX3 Docs are enabled via @storybook/addon-docs; see src/Intro.stories.mdx as an example.
- Configuration files:
  - .storybook/main.js (framework/react-webpack5, stories, addons incl. preset-create-react-app + addon-docs, autodocs)
  - .storybook/preview.js (imports src/styles/storybook-theme.css and sets minimal parameters)

Ocean Professional theme styles are applied globally via src/styles/storybook-theme.css.
