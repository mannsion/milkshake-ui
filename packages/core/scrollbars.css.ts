import { globalStyle } from '@vanilla-extract/css';
import { themeContract } from './theme-contract.css';

// Global scrollbar theming aligned to Milkshake semantic surfaces.
globalStyle(':root', {
  scrollbarColor: `${themeContract.semantic.border.dark} ${themeContract.semantic.surface.level0}`,
  scrollbarWidth: 'thin',
});

globalStyle('::-webkit-scrollbar', {
  width: '12px',
  height: '12px',
});

globalStyle('::-webkit-scrollbar-track', {
  backgroundColor: themeContract.semantic.surface.level0,
  borderRadius: themeContract.borders.radius.lg,
});

globalStyle('::-webkit-scrollbar-thumb', {
  backgroundColor: themeContract.semantic.border.dark,
  borderRadius: themeContract.borders.radius['2xl'],
  borderWidth: themeContract.borders.width.thin,
  borderStyle: themeContract.borders.style.solid,
  borderColor: themeContract.semantic.surface.level0,
});

globalStyle('::-webkit-scrollbar-thumb:hover', {
  backgroundColor: themeContract.semantic.interactive.hover,
});

globalStyle('::-webkit-scrollbar-thumb:active', {
  backgroundColor: themeContract.semantic.interactive.active,
});

// Overlay scrollbars (macOS/iOS) honour thumb color via this selector.
globalStyle('body::-webkit-scrollbar-thumb', {
  backgroundColor: themeContract.semantic.border.dark,
});
