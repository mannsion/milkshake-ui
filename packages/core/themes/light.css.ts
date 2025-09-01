import { createTheme } from '@vanilla-extract/css';
import { themeContract } from '../theme-contract.css';
import { dataVizPalettes } from '../tokens/data-viz';
import { spacingWithNegative } from '../tokens/spacing-scale';

// Light theme – "Vanilla Bean Milkshake": crisp cream neutrals, toasted caramel accent
export const lightTheme = createTheme(themeContract, {
  // Color palette – clean vanilla base with warm caramel highlights
  colors: {
    primary: {
      50: '#FFFBF4',
      100: '#FFF5E3',
      200: '#FCE8C8',
      300: '#F8D6A4',
      400: '#F3BE77',
      500: '#ECA453',
      600: '#D18434',
      700: '#AF6926',
      800: '#8B501C',
      900: '#5B3311',
    },

    secondary: {
      50: '#F5F1ED',
      100: '#E8DDD2',
      200: '#D7C2AF',
      300: '#C5A98F',
      400: '#B28F73',
      500: '#9B765B',
      600: '#846149',
      700: '#6A4D3A',
      800: '#4F382B',
      900: '#33251D',
    },

    neutral: {
      50: '#FFFFFF',
      100: '#FBF7F0',
      200: '#F3E9D7',
      300: '#E5D4B5',
      400: '#D2BA95',
      500: '#BCA079',
      600: '#9E825F',
      700: '#7E6649',
      800: '#5E4B34',
      900: '#3E3223',
    },

    // Semantic colors (kept familiar but slightly warm)
    success: {
      50: '#F0FDF4',
      100: '#DCFCE7',
      200: '#BBF7D0',
      300: '#86EFAC',
      400: '#4ADE80',
      500: '#22C55E',
      600: '#16A34A',
      700: '#15803D',
      800: '#166534',
      900: '#14532D',
    },

    error: {
      50: '#FEF2F2',
      100: '#FEE2E2',
      200: '#FECACA',
      300: '#FCA5A5',
      400: '#F87171',
      500: '#EF4444',
      600: '#DC2626',
      700: '#B91C1C',
      800: '#991B1B',
      900: '#7F1D1D',
    },

    warning: {
      50: '#FFFBEB',
      100: '#FEF3C7',
      200: '#FDE68A',
      300: '#FCD34D',
      400: '#FBBF24',
      500: '#F59E0B',
      600: '#D97706',
      700: '#B45309',
      800: '#92400E',
      900: '#78350F',
    },

    info: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3B82F6',
      600: '#2563EB',
      700: '#1D4ED8',
      800: '#1E40AF',
      900: '#1E3A8A',
    },

    // Base colors
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
  },

  // Spacing scale (shared across themes)
  spacing: spacingWithNegative,

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
    fontStyle: {
      normal: 'normal',
      italic: 'italic',
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

    rendering: {
      webkitFontSmoothing: 'antialiased',
      mozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
      fontFeatureSettings: '"kern", "liga", "clig", "calt"',
      fontVariationSettings: 'normal',
      fontSynthesis: 'none',
      fontKerning: 'normal',
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

  // Shadows – airy glow for porcelain surfaces
  shadows: {
    boxShadow: {
      none: 'none',
      xs: '0 1px 2px 0 rgb(46 32 19 / 0.05), 0 1px 0 0 rgb(255 255 255 / 0.60)',
      sm: '0 2px 4px -1px rgb(46 32 19 / 0.08), 0 1px 3px -1px rgb(46 32 19 / 0.06)',
      md: '0 6px 10px -2px rgb(46 32 19 / 0.10), 0 3px 6px -3px rgb(46 32 19 / 0.08)',
      lg: '0 12px 18px -4px rgb(46 32 19 / 0.12), 0 6px 10px -5px rgb(46 32 19 / 0.10)',
      xl: '0 22px 32px -6px rgb(46 32 19 / 0.14), 0 10px 16px -6px rgb(46 32 19 / 0.12)',
      '2xl': '0 32px 56px -12px rgb(46 32 19 / 0.20)',
      inner: 'inset 0 2px 6px 0 rgb(46 32 19 / 0.08)',
      outline: '0 0 0 3px rgb(236 164 83 / 0.45)',
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

  focusRing: {
    width: {
      none: '0px',
      sm: '1px',
      md: '2px',
      lg: '3px',
    },
    offset: {
      none: '0px',
      sm: '1px',
      md: '2px',
    },
    color: {
      focus: '#ECA453',
      primary: '#ECA453',
      success: '#16A34A',
      warning: '#D97706',
      error: '#DC2626',
      info: '#2563EB',
      inverse: '#FBF7F0',
    },
  },

  layers: {
    base: '0',
    dropdown: '100',
    sticky: '200',
    nav: '300',
    overlay: '400',
    modal: '500',
    popover: '600',
    toast: '700',
    tooltip: '800',
  },

  backdrop: {
    subtle: 'rgba(46, 32, 19, 0.18)',
    default: 'rgba(46, 32, 19, 0.34)',
    strong: 'rgba(46, 32, 19, 0.52)',
    inverse: 'rgba(251, 247, 240, 0.54)',
  },

  backdropBlur: {
    none: '0px',
    sm: '4px',
    md: '12px',
    lg: '24px',
  },

  dataViz: dataVizPalettes.light,

  // Semantic color mappings for components (vanilla bean surfaces)
  semantic: {
    background: {
      primary: '#FBF7F0',
      secondary: '#F3E9D7',
      tertiary: '#E5D4B5',
      inverse: '#2E2013',
    },

    accent: {
      soft: '#FFF3E2',
      surface: '#F8DEBB',
      strong: '#ECA453',
      border: '#F3BE77',
      text: '#6A3D12',
    },

    text: {
      primary: '#2E2013',
      secondary: '#513720',
      tertiary: '#6B4A2D',
      inverse: '#FFFDF9',
      success: '#166534',
      error: '#B91C1C',
      warning: '#B45309',
      info: '#1D4ED8',
    },

    border: {
      default: '#E4D4BC',
      light: '#F5E7D2',
      dark: '#C6A478',
      primary: '#ECA453',
      success: '#22C55E',
      error: '#EF4444',
      warning: '#F3BE77',
      info: '#3B82F6',
    },

    interactive: {
      hover: '#F3E2C7',
      active: '#E9D0AA',
      focus: '#ECA453',
      disabled: '#D8C3A6',
    },

    on: {
      primary: '#FFFFFF',
      secondary: '#2E2013',
      surface: '#2E2013',
      background: '#2E2013',
      inverse: '#FBF7F0',
      success: '#FFFFFF',
      warning: '#1F1305',
      error: '#FFFFFF',
      info: '#FFFFFF',
    },

    surface: {
      level0: '#FBF7F0',
      level1: '#F6ECD9',
      level2: '#EFDCBD',
      level3: '#E3CBA3',
      level4: '#D3B688',
      level5: '#BA9463',
      translucent: 'rgba(251, 247, 240, 0.78)',
      translucentStrong: 'rgba(251, 247, 240, 0.9)',
    },

    overlay: {
      subtle: 'rgba(46, 32, 19, 0.04)',
      default: 'rgba(46, 32, 19, 0.08)',
      strong: 'rgba(46, 32, 19, 0.14)',
      inverse: 'rgba(251, 247, 240, 0.12)',
    },

    stateLayerOpacity: {
      hover: '0.08',
      focus: '0.12',
      pressed: '0.16',
      drag: '0.2',
      disabled: '0.38',
    },

    ring: {
      focus: '#ECA453',
      primary: '#ECA453',
      success: '#16A34A',
      warning: '#D97706',
      error: '#DC2626',
      info: '#2563EB',
      inverse: '#FBF7F0',
    },
  },
});