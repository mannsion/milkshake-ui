import { style, styleVariants } from '@vanilla-extract/css';
import { themeContract } from '../theme-contract.css';
import { buttonGroup, buttonGroupVertical, buttonGroupJustified } from './button-group.css';

const chevron = 'url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M10.59.59%206%205.17%201.41.59%200%202l6%206%206-6z%22%2F%3E%3C%2Fsvg%3E")';
const focusRing = `0 0 0 ${themeContract.focusRing.width.md} ${themeContract.semantic.ring.focus}`;

export const select = style({
  appearance: 'none',
  fontFamily: themeContract.typography.fontFamily.sans,
  fontWeight: themeContract.typography.fontWeight.medium,
  lineHeight: themeContract.typography.lineHeight.snug,
  color: themeContract.semantic.text.primary,
  backgroundColor: themeContract.semantic.surface.level1,
  borderWidth: themeContract.borders.width.thin,
  borderStyle: themeContract.borders.style.solid,
  borderColor: themeContract.semantic.border.light,
  borderRadius: themeContract.borders.radius.lg,
  paddingInlineStart: themeContract.spacing['4'],
  paddingInlineEnd: themeContract.spacing['8'],
  paddingBlock: themeContract.spacing['2'],
  minHeight: themeContract.spacing['10'],
  cursor: 'pointer',
  backgroundImage: chevron,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '12px 8px',
  backgroundPosition: 'right center',
  backgroundOrigin: 'content-box',
  transitionProperty: [
    themeContract.animations.transition.colors,
    themeContract.animations.transition.shadow,
    'border-color',
  ].join(', '),
  transitionDuration: themeContract.animations.duration.fast,
  transitionTimingFunction: themeContract.animations.easing.out,
  textAlign: 'left',
  selectors: {
    '&:focus': {
      outline: 'none',
    },
    '&:focus-visible': {
      outlineStyle: 'solid',
      outlineWidth: themeContract.focusRing.width.md,
      outlineOffset: themeContract.focusRing.offset.sm,
      outlineColor: themeContract.semantic.ring.focus,
      boxShadow: focusRing,
      backgroundColor: themeContract.semantic.surface.level0,
      borderColor: themeContract.semantic.interactive.focus,
    },
    '&:not(:disabled):hover': {
      borderColor: themeContract.semantic.interactive.hover,
      backgroundColor: themeContract.semantic.surface.level0,
    },
    '&:not(:disabled):active': {
      borderColor: themeContract.semantic.interactive.active,
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: themeContract.semantic.stateLayerOpacity.disabled,
      backgroundImage: 'none',
    },
    [`${buttonGroup} &`]: {
      borderRadius: '0px',
      flex: '0 1 auto',
      minWidth: 'max-content',
      maxWidth: '100%',
    },
    [`${buttonGroupJustified} &`]: {
      flex: '0 1 auto',
    },
    [`${buttonGroup} &:first-child`]: {
      borderTopLeftRadius: themeContract.borders.radius.lg,
      borderBottomLeftRadius: themeContract.borders.radius.lg,
    },
    [`${buttonGroup} &:last-child`]: {
      borderTopRightRadius: themeContract.borders.radius.lg,
      borderBottomRightRadius: themeContract.borders.radius.lg,
    },
    [`${buttonGroupVertical} &`]: {
      borderRadius: '0px',
      width: '100%',
      flex: '1 1 auto',
      minWidth: 0,
    },
    [`${buttonGroupVertical} &:first-child`]: {
      borderTopLeftRadius: themeContract.borders.radius.lg,
      borderTopRightRadius: themeContract.borders.radius.lg,
    },
    [`${buttonGroupVertical} &:last-child`]: {
      borderBottomLeftRadius: themeContract.borders.radius.lg,
      borderBottomRightRadius: themeContract.borders.radius.lg,
    },
  },
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transitionDuration: '0.01ms',
      transitionProperty: 'none',
    },
  },
});

export const selectGhost = style([
  select,
  {
    backgroundColor: themeContract.semantic.surface.translucent,
    borderColor: themeContract.semantic.border.light,
    boxShadow: themeContract.shadows.boxShadow.none,
  },
]);

export const selectInverse = style([
  select,
  {
    backgroundColor: themeContract.semantic.background.inverse,
    color: themeContract.semantic.on.inverse,
    borderColor: 'transparent',
    selectors: {
      '&:not(:disabled):hover': {
        backgroundColor: themeContract.semantic.surface.level5,
      },
    },
  },
]);

export const selectSize = styleVariants({
  sm: {
    paddingBlock: themeContract.spacing['1'],
    paddingInlineStart: themeContract.spacing['3'],
    paddingInlineEnd: themeContract.spacing['6'],
    minHeight: themeContract.spacing['8'],
    fontSize: themeContract.typography.fontSize.sm,
  },
  md: {
    paddingBlock: themeContract.spacing['2'],
    paddingInlineStart: themeContract.spacing['4'],
    paddingInlineEnd: themeContract.spacing['8'],
    minHeight: themeContract.spacing['10'],
    fontSize: themeContract.typography.fontSize.base,
  },
  lg: {
    paddingBlock: themeContract.spacing['3'],
    paddingInlineStart: themeContract.spacing['5'],
    paddingInlineEnd: themeContract.spacing['10'],
    minHeight: themeContract.spacing['12'],
    fontSize: themeContract.typography.fontSize.lg,
  },
});
