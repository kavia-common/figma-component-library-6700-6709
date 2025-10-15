/**
 * Storybook main configuration for React + Webpack5 on Storybook 8.
 */
import { dirname, join } from 'path';

const config = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-themes'
  ],
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    // Ensure CSS files from src can be loaded
    config.module.rules.push({
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
      include: [join(__dirname, '../src')],
    });
    return config;
  },
};
export default config;
