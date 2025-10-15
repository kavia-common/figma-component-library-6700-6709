/**
 * Global Storybook preview configuration.
 * - Loads global theme CSS
 * - Sets minimal parameters for actions & controls
 */
import '../src/styles/storybook-theme.css';

// PUBLIC_INTERFACE
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
