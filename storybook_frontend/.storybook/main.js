const path = require('path');

/**
 * Storybook configuration for React + Webpack5 with CRA preset and MDX v3 support.
 * - Framework: @storybook/react-webpack5
 * - Addons: essentials, preset-create-react-app, addon-docs
 * - MDX v3 loader: @mdx-js/loader configured explicitly
 * - Docs: autodocs via CSF3 tags
 */
module.exports = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-docs',
  ],

  docs: {
    autodocs: 'tag',
  },

  webpackFinal: async (config) => {
    // Explicit MDX v3 loader rule to handle .mdx documentation files
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: require.resolve('@mdx-js/loader'),
          options: {
            // MDX v3 options
            mdxExtensions: ['.mdx'],
            providerImportSource: '@mdx-js/react',
            // You can set remark/rehype plugins here if needed
            // mdxOptions: { remarkPlugins: [], rehypePlugins: [] },
          },
        },
      ],
    });

    // Ensure JSX/TSX are resolvable; CRA preset provides Babel config
    config.resolve = config.resolve || {};
    config.resolve.extensions = Array.from(
      new Set([...(config.resolve.extensions || []), '.js', '.jsx', '.ts', '.tsx'])
    );

    return config;
  },
};
