import { createTheme, globalStyle } from '@vanilla-extract/css';
import { themeContract } from '../theme-contract.css';
import { spacingWithNegative } from '../tokens/spacing-scale';
import { card, cardVars } from '../components/cards.css';

const zigrokDataViz = {
  categorical: {
    1: '#F7A41D',
    2: '#FFD85A',
    3: '#303037',
    4: '#0F0F14',
    5: '#8A8A94',
    6: '#FFEE9A',
    7: '#4C4C55',
    8: '#B7B7BF',
  },
  sequential: {
    1: '#0B0B0D',
    2: '#16161B',
    3: '#24242B',
    4: '#3A3A45',
    5: '#F7A41D',
  },
  divergent: {
    negative: '#FF5C5C',
    neutral: '#1A1A1F',
    positive: '#FFD85A',
  },
} as const;

const zigCardFace = themeContract.semantic.surface.level2;
const zigBorderColor = `color-mix(in srgb, ${themeContract.semantic.border.dark} 70%, ${themeContract.semantic.surface.level3})`;

const zigShadowStrong = `color-mix(in srgb, ${themeContract.semantic.surface.level0} 92%, ${themeContract.semantic.surface.level1})`;

const zigBevelHighlight = `color-mix(in srgb, ${themeContract.semantic.surface.level5} 80%, ${themeContract.semantic.surface.level2})`;
const zigBevelHighlightSoft = `color-mix(in srgb, ${zigBevelHighlight} 55%, transparent)`;
const zigBevelShade = `color-mix(in srgb, ${themeContract.semantic.surface.level0} 65%, ${themeContract.semantic.surface.level2})`;
const zigBevelShadeSoft = `color-mix(in srgb, ${zigBevelShade} 45%, transparent)`;

const zigBevelLayers = [
  `inset 0 1px 0 ${zigBevelHighlight}`,
  `inset 1px 0 0 ${zigBevelHighlightSoft}`,
  `inset 0 -1px 0 ${zigBevelShade}`,
  `inset -1px 0 0 ${zigBevelShadeSoft}`,
];

const zigCardShadowBase = [
  `8px 10px 0 0 ${zigShadowStrong}`,
  ...zigBevelLayers,
].join(', ');

const zigCardShadowHover = [
  `10px 12px 0 0 ${zigShadowStrong}`,
  ...zigBevelLayers,
].join(', ');

const zigCardShadowActive = [
  `6px 8px 0 0 ${zigShadowStrong}`,
  ...zigBevelLayers,
].join(', ');

// Zigrok theme – "Quantum Compiler Shake": Zig's industrial energy meets Grok's neon intelligence
export const zigrokTheme = createTheme(themeContract, {
  colors: {
    primary: {
      50: '#101009',
      100: '#191910',
      200: '#232318',
      300: '#2E2E1F',
      400: '#3C3C26',
      500: '#F7A41D',
      600: '#FFC43C',
      700: '#FFD866',
      800: '#FFEBA1',
      900: '#FFF8D6',
    },

    secondary: {
      50: '#140F1F',
      100: '#1B152C',
      200: '#241E3D',
      300: '#2E2852',
      400: '#3A346B',
      500: '#604BFF',
      600: '#7A68FF',
      700: '#9587FF',
      800: '#BDB3FF',
      900: '#E1DDFF',
    },

    neutral: {
      50: '#080808',
      100: '#111111',
      200: '#1A1A1A',
      300: '#222222',
      400: '#2D2D2D',
      500: '#383838',
      600: '#4C4C4C',
      700: '#666666',
      800: '#8F8F8F',
      900: '#D9D9D9',
    },

    success: {
      50: '#06140C',
      100: '#0B2316',
      200: '#123322',
      300: '#1A4730',
      400: '#1F5D3D',
      500: '#2FBF6C',
      600: '#4BDB86',
      700: '#76EAA4',
      800: '#A9F5C6',
      900: '#E0FFEB',
    },

    error: {
      50: '#22060A',
      100: '#360A12',
      200: '#53101C',
      300: '#6F1526',
      400: '#991E35',
      500: '#FF5C72',
      600: '#FF7F91',
      700: '#FF9EAC',
      800: '#FFC3CF',
      900: '#FFE3E8',
    },

    warning: {
      50: '#131109',
      100: '#1C1A0D',
      200: '#272510',
      300: '#333014',
      400: '#49451A',
      500: '#FFC233',
      600: '#FFD24F',
      700: '#FFE077',
      800: '#FFEDAC',
      900: '#FFF8D9',
    },

    info: {
      50: '#0B141F',
      100: '#132132',
      200: '#1D2F45',
      300: '#293E5C',
      400: '#345173',
      500: '#5F89C5',
      600: '#82A8DA',
      700: '#A8C4EA',
      800: '#CFDEF5',
      900: '#E8F1FB',
    },

    white: '#F7F7FA',
    black: '#050506',
    transparent: 'transparent',
  },

  spacing: spacingWithNegative,

  typography: {
    fontFamily: {
      sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
      serif: 'ui-serif, "Times New Roman", Times, serif',
      mono: 'ui-monospace, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
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

  shadows: {
    boxShadow: {
      none: 'none',
      xs: '0 1px 2px 0 rgb(0 0 0 / 0.55), 0 0 0 1px rgb(255 214 120 / 0.45)',
      sm: '0 4px 6px -1px rgb(0 0 0 / 0.6), 0 2px 4px -1px rgb(255 214 120 / 0.38)',
      md: '0 10px 18px -3px rgb(5 5 12 / 0.66), 0 6px 12px -3px rgb(255 200 90 / 0.36)',
      lg: '0 18px 30px -6px rgb(5 5 12 / 0.72), 0 10px 18px -6px rgb(255 194 80 / 0.32)',
      xl: '0 30px 48px -8px rgb(5 5 12 / 0.78), 0 16px 26px -8px rgb(255 188 70 / 0.30)',
      '2xl': '0 44px 68px -14px rgb(0 0 0 / 0.82), 0 24px 38px -12px rgb(255 182 64 / 0.28)',
      inner: 'inset 0 2px 6px 0 rgb(255 210 120 / 0.38), inset 0 -4px 10px 0 rgb(0 0 0 / 0.65)',
      outline: '0 0 0 3px rgb(255 214 120 / 0.75)',
    },
    dropShadow: {
      none: 'none',
      sm: 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.25))',
      md: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.32)) drop-shadow(0 2px 2px rgb(247 164 29 / 0.22))',
      lg: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.38)) drop-shadow(0 4px 3px rgb(247 164 29 / 0.26))',
      xl: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.42)) drop-shadow(0 8px 5px rgb(247 164 29 / 0.22))',
      '2xl': 'drop-shadow(0 26px 28px rgb(0 0 0 / 0.45))',
    },
  },

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
      focus: '#F7A41D',
      primary: '#F7A41D',
      success: '#2FBF6C',
      warning: '#FFC233',
      error: '#FF5C72',
      info: '#5F89C5',
      inverse: '#F7F7FA',
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
    subtle: 'rgba(10, 10, 12, 0.32)',
    default: 'rgba(10, 10, 12, 0.56)',
    strong: 'rgba(10, 10, 12, 0.78)',
    inverse: 'rgba(247, 247, 250, 0.48)',
  },

  backdropBlur: {
    none: '0px',
    sm: '4px',
    md: '12px',
    lg: '24px',
  },

  dataViz: zigrokDataViz,

  semantic: {
    background: {
      primary: '#110D1E',
      secondary: '#16112A',
      tertiary: '#1D1736',
      inverse: '#F7F7FA',
    },
    accent: {
      soft: '#1C1640',
      surface: '#251E50',
      strong: '#6E5BFF',
      border: '#8A78FF',
      text: '#F7F7FA',
    },
    text: {
      primary: '#F7F7FA',
  secondary: '#D6D6DC',
  tertiary: '#A9A9B0',
  inverse: '#0B0B0E',
  success: '#BEEED4',
  error: '#FFD6DD',
  warning: '#FFECAA',
  info: '#C8D8F1',
    },
    border: {
      default: '#2A2A2E',
      light: '#1C1C20',
      dark: '#3A3A3F',
      primary: '#F7A41D',
      success: '#2FBF6C',
      error: '#FF5C72',
      warning: '#FFC233',
      info: '#5F89C5',
    },
    interactive: {
      hover: '#1A1A1E',
      active: '#212125',
      focus: '#F7A41D',
      disabled: '#27272C',
    },
    on: {
      primary: '#F7F7FA',
  secondary: '#F7F7FA',
  surface: '#F7F7FA',
      background: '#F7F7FA',
      inverse: '#0B0B0E',
      success: '#052616',
      warning: '#2B220C',
      error: '#2F0B13',
      info: '#0B1826',
    },
    surface: {
  level0: '#151128',
  level1: '#1B1732',
  level2: '#221E3F',
  level3: '#29254C',
  level4: '#302B5A',
  level5: '#3A336B',
  translucent: 'rgba(21, 17, 40, 0.72)',
  translucentStrong: 'rgba(21, 17, 40, 0.86)',
    },
    overlay: {
  subtle: 'rgba(126, 94, 255, 0.08)',
  default: 'rgba(126, 94, 255, 0.15)',
  strong: 'rgba(126, 94, 255, 0.22)',
  inverse: 'rgba(17, 13, 30, 0.26)',
    },
    stateLayerOpacity: {
      hover: '0.08',
      focus: '0.12',
      pressed: '0.16',
      drag: '0.2',
      disabled: '0.38',
    },
    ring: {
      focus: '#F7A41D',
      primary: '#F7A41D',
      success: '#2FBF6C',
      warning: '#FFC233',
      error: '#FF5C72',
      info: '#5F89C5',
      inverse: '#F7F7FA',
    },
  },
});

globalStyle(`${zigrokTheme} .${card}`, {
  vars: {
    [cardVars.background]: zigCardFace,
    [cardVars.backgroundImage]: 'none',
    [cardVars.borderColor]: zigBorderColor,
    [cardVars.shadow]: zigCardShadowBase,
    [cardVars.hoverShadow]: zigCardShadowHover,
    [cardVars.activeShadow]: zigCardShadowActive,
    [cardVars.hoverTransform]: 'translate3d(0, -3px, 0)',
    [cardVars.activeTransform]: 'translate3d(0, -1px, 0)',
  },
});
