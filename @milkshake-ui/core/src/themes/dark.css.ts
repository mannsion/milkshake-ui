import { createTheme } from '@vanilla-extract/css';
import { themeContract } from '../theme-contract.css';

// Dark theme - sophisticated and modern
export const darkTheme = createTheme(themeContract, {
  // Color palette - modern blue dark theme
  colors: {
    // Primary brand colors (darker blue tones)
    primary: {
      50: '#1e3a8a',
      100: '#1e40af',
      200: '#1d4ed8',
      300: '#2563eb',
      400: '#3b82f6',
      500: '#60a5fa',
      600: '#93c5fd',
      700: '#bfdbfe',
      800: '#dbeafe',
      900: '#eff6ff',
    },

    // Neutral grays (inverted for dark theme)
    neutral: {
      50: '#18181b',
      100: '#27272a',
      200: '#3f3f46',
      300: '#52525b',
      400: '#71717a',
      500: '#a1a1aa',
      600: '#d4d4d8',
      700: '#e4e4e7',
      800: '#f4f4f5',
      900: '#fafafa',
    },

    // Semantic colors (dark theme optimized)
    success: {
      50: '#14532d',
      100: '#166534',
      200: '#15803d',
      300: '#16a34a',
      400: '#22c55e',
      500: '#4ade80',
      600: '#86efac',
      700: '#bbf7d0',
      800: '#dcfce7',
      900: '#f0fdf4',
    },

    error: {
      50: '#7f1d1d',
      100: '#991b1b',
      200: '#b91c1c',
      300: '#dc2626',
      400: '#ef4444',
      500: '#f87171',
      600: '#fca5a5',
      700: '#fecaca',
      800: '#fee2e2',
      900: '#fef2f2',
    },

    warning: {
      50: '#78350f',
      100: '#92400e',
      200: '#b45309',
      300: '#d97706',
      400: '#f59e0b',
      500: '#fbbf24',
      600: '#fcd34d',
      700: '#fde68a',
      800: '#fef3c7',
      900: '#fffbeb',
    },

    info: {
      50: '#1e3a8a',
      100: '#1e40af',
      200: '#1d4ed8',
      300: '#2563eb',
      400: '#3b82f6',
      500: '#60a5fa',
      600: '#93c5fd',
      700: '#bfdbfe',
      800: '#dbeafe',
      900: '#eff6ff',
    },

    // Base colors (inverted for dark theme)
    white: '#1c1917',
    black: '#fafaf9',
    transparent: 'transparent',
  },

  // Spacing scale (unchanged across themes)
  spacing: {
    0: '0px',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
    112: '28rem',
    128: '32rem',
    '-1': '-0.25rem',
    '-2': '-0.5rem',
    '-3': '-0.75rem',
    '-4': '-1rem',
    '-5': '-1.25rem',
    '-6': '-1.5rem',
    '-8': '-2rem',
    '-10': '-2.5rem',
    '-12': '-3rem',
    '-16': '-4rem',
    '-20': '-5rem',
    '-24': '-6rem',
    '-32': '-8rem',
  },

  // Typography (optimized system fonts)
  typography: {
    fontFamily: {
      // Best system fonts with platform-specific fallbacks
      sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
      serif: 'ui-serif, "Times New Roman", Times, serif',
      // Best monospace fonts with platform fallbacks
      mono: 'ui-monospace, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
      // High-quality display font with system fallbacks
      display: '"SF Pro Display", "SF Pro Text", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    },

    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },

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

    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },

    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },

  // Borders (unchanged across themes)
  borders: {
    radius: {
      none: '0px',
      sm: '0.125rem',
      md: '0.25rem',
      lg: '0.375rem',
      xl: '0.5rem',
      '2xl': '0.75rem',
      '3xl': '1rem',
      '4xl': '1.5rem',
      full: '9999px',
    },

    width: {
      none: '0px',
      thin: '1px',
      medium: '2px',
      thick: '3px',
      heavy: '4px',
    },

    style: {
      solid: 'solid',
      dashed: 'dashed',
      dotted: 'dotted',
      double: 'double',
    },
  },

  // Shadows (dark theme optimized)
  shadows: {
    boxShadow: {
      none: 'none',
      xs: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
      sm: '0 1px 3px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.4)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.5)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.3)',
      outline: '0 0 0 3px rgb(59 130 246 / 0.8)',
    },

    dropShadow: {
      none: 'none',
      sm: 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.3))',
      md: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.4)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.4))',
      lg: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.3)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.4))',
      xl: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.2)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.3))',
      '2xl': 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.4))',
    },
  },

  // Animations (unchanged across themes)
  animations: {
    duration: {
      fastest: '75ms',
      fast: '100ms',
      normal: '200ms',
      slow: '300ms',
      slowest: '500ms',
    },

    easing: {
      linear: 'linear',
      in: 'ease-in',
      out: 'ease-out',
      inOut: 'ease-in-out',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },

    transition: {
      all: 'all',
      colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      opacity: 'opacity',
      transform: 'transform',
      shadow: 'box-shadow, filter',
      position: 'left, right, top, bottom',
      size: 'width, height',
    },
  },

  // Semantic color mappings for components (dark theme)
  semantic: {
    // Background colors
    background: {
      primary: '#1c1917',
      secondary: '#292524',
      tertiary: '#44403c',
      inverse: '#fafaf9',
    },

    // Text colors
    text: {
      primary: '#fafaf9',
      secondary: '#d6d3d1',
      tertiary: '#a8a29e',
      inverse: '#1c1917',
      success: '#bbf7d0',
      error: '#fecaca',
      warning: '#fde68a',
      info: '#bfdbfe',
    },

    // Border colors
    border: {
      default: '#52525b',
      light: '#3f3f46',
      dark: '#71717a',
      primary: '#60a5fa',
      success: '#4ade80',
      error: '#f87171',
      warning: '#fbbf24',
      info: '#60a5fa',
    },

    // Interactive states
    interactive: {
      hover: '#27272a',
      active: '#3f3f46',
      focus: '#60a5fa',
      disabled: '#52525b',
    },
  },
});