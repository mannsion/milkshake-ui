import { createTheme } from '@vanilla-extract/css';
import { themeContract } from '../theme-contract.css';

// Light theme - clean and bright
export const lightTheme = createTheme(themeContract, {
  // Color palette - modern blue light theme
  colors: {
    // Primary brand colors (modern blue)
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },

    // Neutral grays (modern and clean)
    neutral: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },

    // Semantic colors
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },

    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },

    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },

    info: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },

    // Base colors
    white: '#ffffff',
    black: '#000000',
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

  // Shadows (light theme optimized)
  shadows: {
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

    dropShadow: {
      none: 'none',
      sm: 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))',
      md: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
      lg: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
      xl: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))',
      '2xl': 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
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

  // Semantic color mappings for components
  semantic: {
    // Background colors
    background: {
      primary: '#ffffff',
      secondary: '#fafaf9',
      tertiary: '#f5f5f4',
      inverse: '#1c1917',
    },

    // Text colors
    text: {
      primary: '#1c1917',
      secondary: '#57534e',
      tertiary: '#78716c',
      inverse: '#ffffff',
      success: '#15803d',
      error: '#b91c1c',
      warning: '#b45309',
      info: '#1d4ed8',
    },

    // Border colors
    border: {
      default: '#d4d4d8',
      light: '#e4e4e7',
      dark: '#a1a1aa',
      primary: '#3b82f6',
      success: '#22c55e',
      error: '#ef4444',
      warning: '#f59e0b',
      info: '#3b82f6',
    },

    // Interactive states
    interactive: {
      hover: '#f4f4f5',
      active: '#e4e4e7',
      focus: '#3b82f6',
      disabled: '#d4d4d8',
    },
  },
});