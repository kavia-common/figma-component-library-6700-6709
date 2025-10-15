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
  - .storybook/main.js
    - framework: '@storybook/react-webpack5'
    - addons: ['@storybook/addon-essentials', '@storybook/preset-create-react-app', '@storybook/addon-docs']
    - docs: { autodocs: 'tag' }
    - stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)']
    - webpackFinal: adds an explicit @mdx-js/loader rule for MDX v3
  - .storybook/preview.js (imports src/styles/storybook-theme.css and sets minimal parameters)

Ocean Professional theme styles are applied globally via src/styles/storybook-theme.css.

## Troubleshooting

- MDX parsing errors (Unexpected token in .mdx):
  - Install @mdx-js/loader@^3 and @mdx-js/react@^3 as devDependencies.
  - Ensure .storybook/main.js has a webpackFinal rule with '@mdx-js/loader' and mdxExtensions: ['.mdx'].
  - Verify stories glob includes .mdx.

- JSX/TSX transform issues in stories:
  - @storybook/preset-create-react-app wires up CRA's Babel preset for JSX.
  - If a custom Babel setup is needed, add a minimal .babelrc with '@babel/preset-react' for Storybook usage only.
