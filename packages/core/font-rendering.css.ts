import { globalStyle } from '@vanilla-extract/css';
import { themeContract } from './theme-contract.css';

// Font rendering optimizations for crisp, high-quality text
// Apply these globally for best results

// 1) Universal box-sizing reset to prevent width + padding overflow
//    This ensures layout widths include padding/border, keeping gutters symmetric.
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle(':root', {
  // Font smoothing for crisp text rendering
  WebkitFontSmoothing: themeContract.typography.rendering.webkitFontSmoothing,
  MozOsxFontSmoothing: themeContract.typography.rendering.mozOsxFontSmoothing,

  // Text rendering optimization
  textRendering: themeContract.typography.rendering.textRendering,

  // Better font rendering on Windows
  fontSynthesis: themeContract.typography.rendering.fontSynthesis,
  fontFeatureSettings: themeContract.typography.rendering.fontFeatureSettings,
  fontVariationSettings: themeContract.typography.rendering.fontVariationSettings,
  fontKerning: themeContract.typography.rendering.fontKerning,
  colorScheme: 'light dark',

  '@media': {
    '(forced-colors: active)': {
      colorScheme: 'light dark',
    },
  },
});

// Additional optimizations for specific elements
globalStyle('body', {
  // Ensure consistent font rendering
  WebkitFontSmoothing: themeContract.typography.rendering.webkitFontSmoothing,
  MozOsxFontSmoothing: themeContract.typography.rendering.mozOsxFontSmoothing,
  textRendering: themeContract.typography.rendering.textRendering,
  fontFamily: themeContract.typography.fontFamily.sans,
  margin: 0,
  padding: 0,
});

// Remove default UA margins/padding contributing to gutters
globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

// Media elements scale with layout containers by default
globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('img, video', {
  height: 'auto',
});

// Form controls inherit typography and colors for seamless styling
globalStyle('button, input, textarea, select', {
  font: 'inherit',
  color: 'inherit',
  backgroundColor: 'transparent',
  border: '1px solid transparent',
});

globalStyle('textarea', {
  resize: 'vertical',
});

globalStyle('fieldset', {
  margin: 0,
  padding: 0,
  border: 0,
});

globalStyle('legend', {
  float: 'left',
  width: '100%',
  padding: 0,
  marginBottom: '0.5rem',
});

globalStyle('a', {
  color: 'inherit',
  textDecorationColor: 'currentColor',
  textUnderlineOffset: '0.2em',
});

// Code elements get special treatment
globalStyle('code, pre, .font-mono', {
  // Monospace fonts benefit from different rendering
  WebkitFontSmoothing: 'auto',
  MozOsxFontSmoothing: 'auto',
  textRendering: 'auto',
  fontFamily: themeContract.typography.fontFamily.mono,
});

// Forced-colors adaptations ensure readable contrast while preserving intent
globalStyle('body', {
  '@media': {
    '(forced-colors: active)': {
      forcedColorAdjust: 'none',
      backgroundColor: 'Canvas',
      color: 'CanvasText',
    },
  },
});

globalStyle('a', {
  '@media': {
    '(forced-colors: active)': {
      color: 'LinkText',
      textDecorationColor: 'LinkText',
    },
  },
});

globalStyle('button, input, textarea, select', {
  '@media': {
    '(forced-colors: active)': {
      forcedColorAdjust: 'none',
      backgroundColor: 'Canvas',
      color: 'CanvasText',
      borderColor: 'CanvasText',
    },
  },
});

// Note: We intentionally do not set `scrollbar-gutter` globally here.
// Centered layouts will align to the content box; reserving gutters can
// introduce perceived asymmetry on platforms with classic scrollbars.