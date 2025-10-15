import type { Preview } from '@storybook/react';

import '../src/styles/storybook-theme.css';

const preview: Preview = {
  parameters: {
    controls: { expanded: true, matchers: { color: /(background|color)$/i, date: /Date$/ } },
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: 'padded',
    backgrounds: {
      default: 'App Background',
      values: [
        { name: 'App Background', value: 'var(--sb-background)' },
        { name: 'Surface', value: 'var(--sb-surface)' },
        { name: 'Dark', value: '#0b1220' },
        { name: 'Light', value: '#ffffff' },
      ],
    },
    docs: {
      toc: true,
    },
  },
  globalTypes: {
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
  },
  decorators: [
    (Story, context) => {
      // Toggle CSS variables for dark mode using a data attribute the CSS listens for
      const mode = context.globals.themeMode || 'light';
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-sb-theme', mode);
      }
      return Story();
    },
  ],
};

export default preview;
