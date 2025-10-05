import { themeContract } from './theme-contract.css';

export const typography = {
  ...themeContract.typography,
  textColor: {
    primary: themeContract.semantic.text.primary,
    secondary: themeContract.semantic.text.secondary,
    tertiary: themeContract.semantic.text.tertiary,
    inverse: themeContract.semantic.text.inverse,
    success: themeContract.semantic.text.success,
    error: themeContract.semantic.text.error,
    warning: themeContract.semantic.text.warning,
    info: themeContract.semantic.text.info,
  },
} as const;