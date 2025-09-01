import { createGlobalTheme } from '@vanilla-extract/css';

export const typography = createGlobalTheme(':root', {
  // Font families - optimized system fonts with platform fallbacks
  fontFamily: {
    // Best system fonts with platform-specific fallbacks for crisp, high-quality rendering
    sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    serif: 'ui-serif, "Times New Roman", Times, serif',
    // Best monospace fonts with platform fallbacks for code and data
    mono: 'ui-monospace, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
    // High-quality display font with system fallbacks for headings
    display: '"SF Pro Display", "SF Pro Text", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
  },

  fontStyle: {
    normal: 'normal',
    italic: 'italic',
  },

  // Font sizes
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
    '8xl': '6rem',      // 96px
    '9xl': '8rem',      // 128px
  },

  // Font weights
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // Line heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  rendering: {
    webkitFontSmoothing: 'antialiased',
    mozOsxFontSmoothing: 'grayscale',
    textRendering: 'optimizeLegibility',
    fontFeatureSettings: '"kern", "liga", "clig", "calt"',
    fontVariationSettings: 'normal',
    fontSynthesis: 'none',
    fontKerning: 'normal',
  },

  // Text colors (references to color tokens)
  textColor: {
    primary: 'var(--primary-900)',
    secondary: 'var(--neutral-600)',
    tertiary: 'var(--neutral-500)',
    inverse: 'var(--white)',
    success: 'var(--success-700)',
    error: 'var(--error-700)',
    warning: 'var(--warning-700)',
    info: 'var(--info-700)',
  },
});