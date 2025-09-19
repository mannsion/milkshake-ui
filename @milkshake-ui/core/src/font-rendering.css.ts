import { globalStyle } from '@vanilla-extract/css';

// Font rendering optimizations for crisp, high-quality text
// Apply these globally for best results

globalStyle(':root', {
  // Font smoothing for crisp text rendering
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',

  // Text rendering optimization
  textRendering: 'optimizeLegibility',

  // Better font rendering on Windows
  fontSynthesis: 'none',
});

// Additional optimizations for specific elements
globalStyle('body', {
  // Ensure consistent font rendering
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
  margin: 0,
  padding: 0,
});

// Remove default UA margins/padding contributing to gutters
globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

// Code elements get special treatment
globalStyle('code, pre, .font-mono', {
  // Monospace fonts benefit from different rendering
  WebkitFontSmoothing: 'auto',
  MozOsxFontSmoothing: 'auto',
  textRendering: 'auto',
});