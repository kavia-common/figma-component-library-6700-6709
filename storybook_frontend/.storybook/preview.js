/**
 * Global Storybook preview configuration.
 * Applies the Ocean Professional theme CSS and sets basic parameters.
 */
import '../src/styles/storybook-theme.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
