import { themeContract } from './theme-contract.css';

export const borders = {
  ...themeContract.borders,
  color: {
    default: themeContract.semantic.border.default,
    light: themeContract.semantic.border.light,
    dark: themeContract.semantic.border.dark,
    primary: themeContract.semantic.border.primary,
    success: themeContract.semantic.border.success,
    error: themeContract.semantic.border.error,
    warning: themeContract.semantic.border.warning,
    info: themeContract.semantic.border.info,
  },
} as const;