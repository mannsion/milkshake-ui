import { style } from '@vanilla-extract/css';
import { themeContract } from '../theme-contract.css';

export const listGroup = style({
  display: 'flex',
  flexDirection: 'column',
  borderWidth: themeContract.borders.width.thin,
  borderStyle: themeContract.borders.style.solid,
  borderColor: themeContract.semantic.border.light,
  borderRadius: themeContract.borders.radius['2xl'],
  backgroundColor: themeContract.semantic.surface.level1,
  overflow: 'hidden',
});

export const listGroupInset = style({
  backgroundColor: themeContract.semantic.surface.level0,
  borderColor: themeContract.semantic.border.light,
  boxShadow: themeContract.shadows.boxShadow.none,
});

export const listGroupItem = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: themeContract.spacing['2'],
  paddingInline: themeContract.spacing['5'],
  paddingBlock: themeContract.spacing['4'],
  color: themeContract.semantic.text.primary,
  textDecoration: 'none',
  backgroundColor: 'transparent',
  selectors: {
    '&:not(:last-child)': {
      borderBottomWidth: themeContract.borders.width.thin,
      borderBottomStyle: themeContract.borders.style.solid,
      borderBottomColor: themeContract.semantic.border.light,
    },
  },
});

export const listGroupItemInteractive = style([
  listGroupItem,
  {
    cursor: 'pointer',
    transitionProperty: themeContract.animations.transition.colors,
    transitionDuration: themeContract.animations.duration.fast,
    transitionTimingFunction: themeContract.animations.easing.out,
    borderRadius: 0,
    selectors: {
      '&:hover': {
        backgroundColor: themeContract.semantic.surface.level1,
      },
      '&:active': {
        backgroundColor: themeContract.semantic.surface.level2,
      },
      '&:focus-visible': {
        outlineStyle: 'solid',
        outlineWidth: themeContract.focusRing.width.md,
        outlineOffset: themeContract.focusRing.offset.sm,
        outlineColor: themeContract.semantic.ring.focus,
        backgroundColor: themeContract.semantic.surface.level2,
      },
    },
  },
]);

export const listGroupItemActive = style([
  listGroupItem,
  {
    backgroundColor: themeContract.colors.primary[50],
    color: themeContract.colors.primary[800],
    fontWeight: themeContract.typography.fontWeight.semibold,
    selectors: {
      '&:not(:last-child)': {
        borderBottomColor: themeContract.colors.primary[200],
      },
    },
  },
]);

export const listGroupItemDisabled = style([
  listGroupItem,
  {
    color: themeContract.semantic.text.tertiary,
    cursor: 'not-allowed',
    opacity: themeContract.semantic.stateLayerOpacity.disabled,
  },
]);

export const listGroupHeading = style({
  fontSize: themeContract.typography.fontSize.sm,
  fontWeight: themeContract.typography.fontWeight.semibold,
  color: themeContract.semantic.text.secondary,
  textTransform: 'uppercase',
  letterSpacing: themeContract.typography.letterSpacing.wide,
});

export const listGroupTitle = style({
  fontSize: themeContract.typography.fontSize.lg,
  fontWeight: themeContract.typography.fontWeight.semibold,
  lineHeight: themeContract.typography.lineHeight.snug,
});

export const listGroupSubtitle = style({
  fontSize: themeContract.typography.fontSize.sm,
  color: themeContract.semantic.text.secondary,
  lineHeight: themeContract.typography.lineHeight.relaxed,
});

export const listGroupMeta = style({
  marginInlineStart: 'auto',
  fontSize: themeContract.typography.fontSize.sm,
  color: themeContract.semantic.text.tertiary,
});
