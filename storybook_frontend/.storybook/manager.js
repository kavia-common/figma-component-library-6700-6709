/**
 * Manager configuration to theme Storybook UI (toolbar, sidebar) with Ocean Professional palette.
 */
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const oceanTheme = create({
  base: 'light',
  brandTitle: 'Component Library',
  brandUrl: '#',
  colorPrimary: '#2563EB',
  colorSecondary: '#F59E0B',

  appBg: '#f9fafb',
  appContentBg: '#ffffff',
  appBorderColor: '#e5e7eb',
  appBorderRadius: 8,

  textColor: '#111827',
  textInverseColor: '#ffffff',

  barTextColor: '#111827',
  barSelectedColor: '#2563EB',
  barBg: '#ffffff',

  inputBg: '#ffffff',
  inputBorder: '#e5e7eb',
  inputTextColor: '#111827',
  inputBorderRadius: 8,
});

addons.setConfig({
  theme: oceanTheme,
});
