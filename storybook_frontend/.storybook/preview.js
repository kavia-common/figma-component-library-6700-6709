/**
 * Global preview configuration for Storybook.
 * Sets up parameters and theme switching using a data attribute.
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

export const globalTypes = {
  themeMode: {
    name: 'Theme Mode',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const mode = context.globals.themeMode || 'light';
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-sb-theme', mode);
    }
    return Story();
  },
];
