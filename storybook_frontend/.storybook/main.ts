import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "./Intro.mdx"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  docs: {
    defaultName: 'Docs'
  }
};

export default config;
