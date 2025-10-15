/**
 * Storybook main configuration for React + Webpack5 with CRA preset and MDX3 docs.
 */
export default {
  framework: '@storybook/react-webpack5',
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    // Ensure CRA preset is first so Babel/webpack settings work out of the box
    '@storybook/preset-create-react-app',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs'
  ],
  docs: {
    autodocs: 'tag'
  }
};
