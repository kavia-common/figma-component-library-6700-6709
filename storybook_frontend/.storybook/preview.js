/**
 * Global Storybook preview configuration.
 * Imports the Ocean Professional theme CSS and sets sensible defaults.
 */
import '../src/styles/storybook-theme.css';
import '../src/theme/tokens.css';
import '../src/styles/ocean.css';

export const parameters = {
  layout: 'centered',
  controls: { expanded: true },
  docs: {
    source: { type: 'code' },
  },
};

/**
 * Force dark theme by default via a decorator that sets the data attribute.
 * Components read CSS variables from tokens.css; storybook-theme.css also
 * supports [data-sb-theme="dark"].
 */
export const decorators = [
  (Story) => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-sb-theme', 'dark');
    }
    return Story();
  },
];
