// Export all themes
export { lightTheme } from './light.css';
export { darkTheme } from './dark.css';
export { darkMilkTheme } from './dark-milk.css';
export { highContrastLightTheme } from './high-contrast-light.css';
export { highContrastDarkTheme } from './high-contrast-dark.css';
export { highContrastDarkMilkTheme } from './high-contrast-dark-milk.css';
export { zigrokTheme } from './zigrok.css';
export { strawberryMilkshakeTheme } from './strawberry-milkshake.css';

// Export theme contract for type safety
export { themeContract } from '../theme-contract.css';
export type { ThemeContract } from '../theme-contract.css';

// Theme utilities
export const themes = {
  light: 'light',
  dark: 'dark',
  'dark-milk': 'dark-milk',
  'high-contrast-light': 'high-contrast-light',
  'high-contrast-dark': 'high-contrast-dark',
  'high-contrast-dark-milk': 'high-contrast-dark-milk',
  zigrok: 'zigrok',
  'strawberry-milkshake': 'strawberry-milkshake',
} as const;

export type ThemeName = keyof typeof themes;