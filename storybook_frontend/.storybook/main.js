module.exports = {
  // Use React + Webpack5 framework
  framework: '@storybook/react-webpack5',

  // Include both CSF and MDX v3 stories
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],

  // Addons: essentials (includes docs), interactions, and CRA preset to wire CRA babel/webpack config
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app'
  ],

  // Enable autodocs for CSF3 and MDX v3
  docs: { autodocs: true },

  // Ensure story globs with JSX parse via CRA's babel settings (no-op hook, left for future extension)
  babel: async (options) => {
    return options;
  },
};
