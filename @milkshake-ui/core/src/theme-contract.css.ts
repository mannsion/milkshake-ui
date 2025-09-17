import { createThemeContract } from '@vanilla-extract/css';

// Theme contract defines the structure of all design tokens
// This ensures type safety and consistency across themes
export const themeContract = createThemeContract({
  // Color palette
  colors: {
    // Primary brand colors
    primary: {
      50: null,
      100: null,
      200: null,
      300: null,
      400: null,
      500: null,
      600: null,
      700: null,
      800: null,
      900: null,
    },

    // Neutral grays
    neutral: {
      50: null,
      100: null,
      200: null,
      300: null,
      400: null,
      500: null,
      600: null,
      700: null,
      800: null,
      900: null,
    },

    // Semantic colors
    success: {
      50: null,
      100: null,
      200: null,
      300: null,
      400: null,
      500: null,
      600: null,
      700: null,
      800: null,
      900: null,
    },

    error: {
      50: null,
      100: null,
      200: null,
      300: null,
      400: null,
      500: null,
      600: null,
      700: null,
      800: null,
      900: null,
    },

    warning: {
      50: null,
      100: null,
      200: null,
      300: null,
      400: null,
      500: null,
      600: null,
      700: null,
      800: null,
      900: null,
    },

    info: {
      50: null,
      100: null,
      200: null,
      300: null,
      400: null,
      500: null,
      600: null,
      700: null,
      800: null,
      900: null,
    },

    // Base colors
    white: null,
    black: null,
    transparent: null,
  },

  // Spacing scale
  spacing: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    8: null,
    10: null,
    12: null,
    16: null,
    20: null,
    24: null,
    32: null,
    40: null,
    48: null,
    56: null,
    64: null,
    72: null,
    80: null,
    96: null,
    112: null,
    128: null,
    '-1': null,
    '-2': null,
    '-3': null,
    '-4': null,
    '-5': null,
    '-6': null,
    '-8': null,
    '-10': null,
    '-12': null,
    '-16': null,
    '-20': null,
    '-24': null,
    '-32': null,
  },

  // Typography
  typography: {
    fontFamily: {
      sans: null,
      serif: null,
      mono: null,
      display: null,
    },

    fontSize: {
      xs: null,
      sm: null,
      base: null,
      lg: null,
      xl: null,
      '2xl': null,
      '3xl': null,
      '4xl': null,
      '5xl': null,
      '6xl': null,
      '7xl': null,
      '8xl': null,
      '9xl': null,
    },

    fontWeight: {
      thin: null,
      extralight: null,
      light: null,
      normal: null,
      medium: null,
      semibold: null,
      bold: null,
      extrabold: null,
      black: null,
    },

    lineHeight: {
      none: null,
      tight: null,
      snug: null,
      normal: null,
      relaxed: null,
      loose: null,
    },

    letterSpacing: {
      tighter: null,
      tight: null,
      normal: null,
      wide: null,
      wider: null,
      widest: null,
    },
  },

  // Borders
  borders: {
    radius: {
      none: null,
      sm: null,
      md: null,
      lg: null,
      xl: null,
      '2xl': null,
      '3xl': null,
      '4xl': null,
      full: null,
    },

    width: {
      none: null,
      thin: null,
      medium: null,
      thick: null,
      heavy: null,
    },

    style: {
      solid: null,
      dashed: null,
      dotted: null,
      double: null,
    },
  },

  // Shadows
  shadows: {
    boxShadow: {
      none: null,
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null,
      '2xl': null,
      inner: null,
      outline: null,
    },

    dropShadow: {
      none: null,
      sm: null,
      md: null,
      lg: null,
      xl: null,
      '2xl': null,
    },
  },

  // Animations
  animations: {
    duration: {
      fastest: null,
      fast: null,
      normal: null,
      slow: null,
      slowest: null,
    },

    easing: {
      linear: null,
      in: null,
      out: null,
      inOut: null,
      bounce: null,
      elastic: null,
    },

    transition: {
      all: null,
      colors: null,
      opacity: null,
      transform: null,
      shadow: null,
      position: null,
      size: null,
    },
  },

  // Semantic color mappings for components
  semantic: {
    // Background colors
    background: {
      primary: null,
      secondary: null,
      tertiary: null,
      inverse: null,
    },

    // Text colors
    text: {
      primary: null,
      secondary: null,
      tertiary: null,
      inverse: null,
      success: null,
      error: null,
      warning: null,
      info: null,
    },

    // Border colors
    border: {
      default: null,
      light: null,
      dark: null,
      primary: null,
      success: null,
      error: null,
      warning: null,
      info: null,
    },

    // Interactive states
    interactive: {
      hover: null,
      active: null,
      focus: null,
      disabled: null,
    },
  },
});

// Export theme type for TypeScript
export type ThemeContract = typeof themeContract;