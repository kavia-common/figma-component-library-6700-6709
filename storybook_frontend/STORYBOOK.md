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
    - No webpackFinal MDX rule is added; SB8 built-in indexers handle MDX if used.
  - .storybook/preview.js (imports src/styles/storybook-theme.css and sets minimal parameters)

Ocean Professional theme styles are applied globally via src/styles/storybook-theme.css.

## Troubleshooting

- MDX indexing or parsing errors:
  - Avoid custom webpack MDX loaders; they can conflict with Storybook 8 indexers.
  - Keep '@storybook/addon-docs' installed and ensure the stories glob includes '.mdx' if you add MDX stories.
  - Prefer CSF for simple introduction/docs-only pages to bypass MDX setup entirely.

- JSX/TSX transform issues in stories:
  - @storybook/preset-create-react-app wires up CRA's Babel preset for JSX.
  - If a custom Babel setup is needed, add a minimal .babelrc with '@babel/preset-react' for Storybook usage only.
