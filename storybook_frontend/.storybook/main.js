/**
 * Storybook configuration for React + Webpack5 using built-in SB8 indexers.
 * - Framework: @storybook/react-webpack5
 * - Addons: essentials, CRA preset, docs
 * - Docs: autodocs via CSF tags
 * - Stories: supports js, jsx, ts, tsx, mdx (no custom MDX loader override)
 */
module.exports = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],

  // Serve static assets from the CRA public directory (for /assets/* image paths)
  staticDirs: ['../public'],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-docs',
  ],

  docs: {
    autodocs: 'tag',
  },
};
