import { style, globalStyle } from '@vanilla-extract/css';
import { themeContract } from '../theme-contract.css';

const buttonGroupBase = style({
  display: 'inline-flex',
  alignItems: 'stretch',
  flexWrap: 'nowrap',
  gap: '0px',
  borderRadius: themeContract.borders.radius.lg,
  backgroundColor: themeContract.semantic.surface.level1,
  borderWidth: themeContract.borders.width.thin,
  borderStyle: themeContract.borders.style.solid,
  borderColor: themeContract.semantic.border.light,
  overflow: 'hidden',
  isolation: 'isolate',
});

export const buttonGroup = style([
  buttonGroupBase,
  {
    flexDirection: 'row',
  },
]);

export const buttonGroupJustified = style([
  buttonGroup,
  {
    width: '100%',
  },
]);

export const buttonGroupVertical = style([
  buttonGroupBase,
  {
    flexDirection: 'column',
  },
]);

const borderOverlapCompensation = `calc(0px - ${themeContract.borders.width.thin})`;
const separatorColor = themeContract.semantic.border.light;
const separatorTransition = `${themeContract.animations.duration.fast} ${themeContract.animations.easing.out}`;

globalStyle(`${buttonGroupBase} > *`, {
  borderRadius: '0px',
  margin: 0,
  position: 'relative',
  flex: '0 1 auto',
  minWidth: 0,
});

globalStyle(`${buttonGroupBase} > *::before`, {
  content: '',
  position: 'absolute',
  pointerEvents: 'none',
  opacity: 1,
  transition: `opacity ${separatorTransition}`,
});

globalStyle(`${buttonGroupBase} > *:focus-visible::before`, {
  opacity: 0,
});

globalStyle(`${buttonGroupJustified} > *`, {
  flex: '1 1 0%',
});

globalStyle(`${buttonGroupVertical} > *`, {
  width: '100%',
});

globalStyle(`${buttonGroupBase} > *:focus-visible`, {
  zIndex: 1,
  outlineOffset: `calc(0px - ${themeContract.focusRing.offset.sm})`,
});

globalStyle(`${buttonGroup} > *:first-child`, {
  borderTopLeftRadius: themeContract.borders.radius.lg,
  borderBottomLeftRadius: themeContract.borders.radius.lg,
  marginInlineStart: '0px',
});

globalStyle(`${buttonGroup} > *:last-child`, {
  borderTopRightRadius: themeContract.borders.radius.lg,
  borderBottomRightRadius: themeContract.borders.radius.lg,
});

globalStyle(`${buttonGroup} > *:not(:first-child)`, {
  marginInlineStart: borderOverlapCompensation,
  borderTopLeftRadius: '0px',
  borderBottomLeftRadius: '0px',
});

globalStyle(`${buttonGroup} > *:not(:first-child)::before`, {
  top: 0,
  bottom: 0,
  left: 0,
  width: themeContract.borders.width.thin,
  backgroundColor: separatorColor,
});

globalStyle(`${buttonGroupVertical} > *:first-child`, {
  borderTopLeftRadius: themeContract.borders.radius.lg,
  borderTopRightRadius: themeContract.borders.radius.lg,
  marginBlockStart: '0px',
});

globalStyle(`${buttonGroupVertical} > *:last-child`, {
  borderBottomLeftRadius: themeContract.borders.radius.lg,
  borderBottomRightRadius: themeContract.borders.radius.lg,
});

globalStyle(`${buttonGroupVertical} > *:not(:first-child)`, {
  marginBlockStart: borderOverlapCompensation,
  borderTopLeftRadius: '0px',
  borderTopRightRadius: '0px',
});

globalStyle(`${buttonGroupVertical} > *:not(:first-child)::before`, {
  left: 0,
  right: 0,
  top: 0,
  height: themeContract.borders.width.thin,
  backgroundColor: separatorColor,
});

