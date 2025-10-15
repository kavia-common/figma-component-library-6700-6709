/**
 * Global Storybook preview configuration:
 * - Applies Ocean Professional theme tokens via CSS variables
 * - Sets backgrounds and controls defaults
 * - Registers a global dark/light theme toggle using Storybook Themes addon
 */
import '../src/styles/storybook-theme.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  backgrounds: {
    default: 'surface',
    values: [
      { name: 'surface', value: 'var(--sb-surface)' },
      { name: 'background', value: 'var(--sb-background)' },
      { name: 'white', value: '#ffffff' },
      { name: 'dark', value: '#111827' },
    ],
  },
  options: {
    storySort: {
      order: ['Intro', 'Components', ['Button', 'Inputs', 'Data Display']],
    },
  },
};

export const globalTypes = {
  themeMode: {
    name: 'Theme Mode',
    description: 'Global theme mode for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};

const withThemeVars = (Story, context) => {
  const mode = context.globals.themeMode || 'light';
  document.documentElement.setAttribute('data-sb-theme', mode);
  return Story();
};

export const decorators = [withThemeVars];
