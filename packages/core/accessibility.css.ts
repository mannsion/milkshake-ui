import { style } from '@vanilla-extract/css';
import { themeContract } from './theme-contract.css';

export const skipLink = style({
  position: 'fixed',
  top: themeContract.spacing['3'],
  left: themeContract.spacing['3'],
  padding: `${themeContract.spacing['3']} ${themeContract.spacing['4']}`,
  borderRadius: themeContract.borders.radius.md,
  backgroundColor: themeContract.semantic.surface.level3,
  color: themeContract.semantic.on.surface,
  fontWeight: themeContract.typography.fontWeight.semibold,
  textDecoration: 'none',
  zIndex: themeContract.layers.overlay,
  transform: 'translateY(-250%)',
  transitionProperty: themeContract.animations.transition.transform,
  transitionDuration: themeContract.animations.duration.fast,
  transitionTimingFunction: themeContract.animations.easing.out,
  boxShadow: themeContract.shadows.boxShadow.md,
  ':focus-visible': {
    transform: 'translateY(0)',
    outlineStyle: 'solid',
    outlineWidth: themeContract.focusRing.width.md,
    outlineOffset: themeContract.focusRing.offset.sm,
    outlineColor: themeContract.semantic.ring.focus,
  },
});

export const visuallyHidden = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
  border: 0,
});
