import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-themes',
  ],
  core: {},
  docs: {
    autodocs: true,
  },
  // Ensure Storybook uses webpack5 builder (compatible with React 18 and CRA5)
  // Vite variant would require different deps.
  // No need to set port/host here since scripts specify CLI flags.
};
export default config;
