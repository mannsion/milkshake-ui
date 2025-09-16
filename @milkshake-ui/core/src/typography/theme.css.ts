import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const typographyVars = createThemeContract({
  font: {
    family: {
      base: null,
      heading: null,
      mono: null,
    },
    weight: {
      light: null,
      regular: null,
      medium: null,
      semibold: null,
      bold: null,
    },
  },
  size: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    '2xl': null,
    '3xl': null,
    '4xl': null,
    '5xl': null,
  },
  lineHeight: {
    tight: null,
    snug: null,
    normal: null,
    relaxed: null,
  },
  letterSpacing: {
    tighter: null,
    tight: null,
    normal: null,
    wide: null,
    wider: null,
  },
  color: {
    text: {
      primary: null,
      secondary: null,
      muted: null,
      inverted: null,
    },
    link: {
      default: null,
      hover: null,
    },
    code: {
      text: null,
      bg: null,
    },
  },
});

const __themeTuple = createTheme(typographyVars, {
  font: {
    family: {
      // sensible, widely available system stacks
      base: `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"` ,
      heading: `inherit`,
      mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace`,
    },
    weight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  size: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    md: '1rem',        // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
  },
  lineHeight: {
    tight: '1.1',
    snug: '1.25',
    normal: '1.5',
    relaxed: '1.65',
  },
  letterSpacing: {
    tighter: '-0.02em',
    tight: '-0.01em',
    normal: '0',
    wide: '0.01em',
    wider: '0.02em',
  },
  color: {
    text: {
      primary: '#111827',  // gray-900
      secondary: '#374151', // gray-700
      muted: '#6B7280',     // gray-500
      inverted: '#ffffff',
    },
    link: {
      default: '#2563EB', // blue-600
      hover: '#1D4ED8',   // blue-700
    },
    code: {
      text: '#111827',
      bg: '#F3F4F6', // gray-100
    },
  },
});

export const typographyThemeClass = (__themeTuple as unknown as [string, typeof typographyVars])[0];
export const typographyTheme = (__themeTuple as unknown as [string, typeof typographyVars])[1];

export type TypographyVars = typeof typographyTheme;
