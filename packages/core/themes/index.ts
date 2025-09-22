// Export all themes
export { lightTheme } from './light.css';
export { darkTheme } from './dark.css';

// Export theme contract for type safety
export { themeContract } from '../theme-contract.css';
export type { ThemeContract } from '../theme-contract.css';

// Theme utilities
export const themes = {
  light: 'light',
  dark: 'dark',
} as const;

export type ThemeName = keyof typeof themes;