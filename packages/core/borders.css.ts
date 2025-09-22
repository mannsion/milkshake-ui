import { createGlobalTheme } from '@vanilla-extract/css';

export const borders = createGlobalTheme(':root', {
  // Border radius
  radius: {
    none: '0px',
    sm: '0.125rem',   // 2px
    md: '0.25rem',    // 4px
    lg: '0.375rem',   // 6px
    xl: '0.5rem',     // 8px
    '2xl': '0.75rem', // 12px
    '3xl': '1rem',    // 16px
    '4xl': '1.5rem',  // 24px
    full: '9999px',
  },

  // Border width
  width: {
    none: '0px',
    thin: '1px',
    medium: '2px',
    thick: '3px',
    heavy: '4px',
  },

  // Border style
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    double: 'double',
  },

  // Border colors (references to color tokens)
  color: {
    default: 'var(--neutral-300)',
    light: 'var(--neutral-200)',
    dark: 'var(--neutral-400)',
    primary: 'var(--primary-500)',
    success: 'var(--success-500)',
    error: 'var(--error-500)',
    warning: 'var(--warning-500)',
    info: 'var(--info-500)',
  },
});