import { style, styleVariants } from '@vanilla-extract/css';
import { themeContract } from './theme-contract.css';

const scrimBase = {
  position: 'fixed' as const,
  inset: 0,
  backdropFilter: `blur(${themeContract.backdropBlur.sm})`,
  zIndex: themeContract.layers.overlay,
};

export const overlayScrim = styleVariants({
  subtle: [scrimBase, { backgroundColor: themeContract.semantic.overlay.subtle }],
  default: [scrimBase, { backgroundColor: themeContract.semantic.overlay.default }],
  strong: [scrimBase, { backgroundColor: themeContract.semantic.overlay.strong }],
  inverse: [scrimBase, { backgroundColor: themeContract.semantic.overlay.inverse }],
});

export const modalOverlay = style([
  overlayScrim.default,
  {
    display: 'grid',
    placeItems: 'center',
    padding: themeContract.spacing['6'],
    backdropFilter: `blur(${themeContract.backdropBlur.md})`,
    zIndex: themeContract.layers.modal,
  },
]);

export const modalSurface = style({
  backgroundColor: themeContract.semantic.surface.level2,
  color: themeContract.semantic.text.primary,
  borderRadius: themeContract.borders.radius.lg,
  boxShadow: themeContract.shadows.boxShadow.lg,
  borderWidth: themeContract.borders.width.thin,
  borderStyle: 'solid',
  borderColor: themeContract.semantic.border.light,
  padding: themeContract.spacing['6'],
  maxWidth: 'min(100%, 32rem)',
  width: '100%',
});

export const popoverSurface = style({
  backgroundColor: themeContract.semantic.surface.level3,
  color: themeContract.semantic.on.surface,
  borderRadius: themeContract.borders.radius.md,
  boxShadow: themeContract.shadows.boxShadow.lg,
  borderWidth: themeContract.borders.width.thin,
  borderStyle: 'solid',
  borderColor: themeContract.semantic.border.light,
  padding: themeContract.spacing['4'],
  zIndex: themeContract.layers.popover,
});

export const toastRegion = style({
  position: 'fixed',
  insetBlockEnd: themeContract.spacing['4'],
  insetInlineEnd: themeContract.spacing['4'],
  display: 'grid',
  gap: themeContract.spacing['3'],
  width: 'min(100%, 24rem)',
  zIndex: themeContract.layers.toast,
});

export const toastSurface = style({
  backgroundColor: themeContract.semantic.surface.level3,
  color: themeContract.semantic.on.surface,
  borderRadius: themeContract.borders.radius.md,
  boxShadow: themeContract.shadows.boxShadow.md,
  padding: themeContract.spacing['4'],
  borderWidth: themeContract.borders.width.thin,
  borderStyle: 'solid',
  borderColor: themeContract.semantic.border.default,
});
