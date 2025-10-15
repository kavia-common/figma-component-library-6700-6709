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
- Docs are enabled via '@storybook/addon-docs'.
- Intro page uses CSF (no MDX): see src/Intro.stories.jsx.
- Configuration files:
  - .storybook/main.js
    - framework: '@storybook/react-webpack5'
    - addons: ['@storybook/addon-essentials', '@storybook/preset-create-react-app', '@storybook/addon-docs']
    - docs: { autodocs: 'tag' }
    - stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)']
    - staticDirs: ['../public'] (serves /static and /assets from storybook_frontend/public)
  - .storybook/preview.js (imports src/styles/storybook-theme.css and sets minimal parameters)

Ocean Professional theme styles are applied globally via src/styles/storybook-theme.css.

## Static Figma Screens

A static export of the "Dashboard Dark" screen is included for visual reference.

- Story:
  - Title: Static Screens/Dashboard Dark (0:3)
  - Renders the page in an iframe sourced from /static/dashboard-dark-0-3.html.

- Files (served by Storybook):
  - storybook_frontend/public/static/dashboard-dark-0-3.html  -> /static/dashboard-dark-0-3.html
  - storybook_frontend/public/static/dashboard-dark-0-3.css   -> /static/dashboard-dark-0-3.css
  - storybook_frontend/public/static/dashboard-dark-0-3.js    -> /static/dashboard-dark-0-3.js

- Images (served at /assets/*):
  - Copied: storybook_frontend/public/assets/figmaimages/figma_image_0_69.png
  - The static JS references images using /assets/figmaimages/... so they resolve without 404s.

Tip: Keep the Storybook port on 3000 to align with container checks (no changes required).
