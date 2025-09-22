import { createGlobalTheme } from '@vanilla-extract/css';

export const shadows = createGlobalTheme(':root', {
  // Box shadows
  boxShadow: {
    none: 'none',
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    outline: '0 0 0 3px rgb(59 130 246 / 0.5)',
  },

  // Drop shadows (for text/images)
  dropShadow: {
    none: 'none',
    sm: 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))',
    md: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
    lg: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
    xl: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))',
    '2xl': 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
  },

  // Colored shadows
  colored: {
    primary: '0 4px 14px 0 rgb(234 179 8 / 0.39)',
    success: '0 4px 14px 0 rgb(34 197 94 / 0.39)',
    error: '0 4px 14px 0 rgb(239 68 68 / 0.39)',
    warning: '0 4px 14px 0 rgb(245 158 11 / 0.39)',
    info: '0 4px 14px 0 rgb(59 130 246 / 0.39)',
  },
});