/**
 * Storybook preview configuration.
 * Minimal parameters and global CSS import; no undefined token references.
 */

// Import global Storybook theme CSS if it exists
import '../src/styles/storybook-theme.css';

export const parameters = {
  controls: { expanded: true },
};
