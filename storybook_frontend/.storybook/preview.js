/**
 * Global Storybook preview configuration.
 * Imports the Ocean Professional theme CSS and sets sensible defaults.
 */
import '../src/styles/storybook-theme.css';

export const parameters = {
  layout: 'centered',
  controls: { expanded: true },
  docs: {
    source: { type: 'code' },
  },
};
