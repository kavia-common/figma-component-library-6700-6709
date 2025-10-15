const path = require('path');

/**
 * Storybook main configuration for React + Webpack5 with CRA preset.
 * - Enables MDX3 docs via @storybook/addon-docs
 * - Autodocs enabled via tag in stories meta
 */
module.exports = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  // Keep default webpack handling provided by Storybook and CRA preset.
  webpackFinal: async (config) => {
    return config;
  },
};
