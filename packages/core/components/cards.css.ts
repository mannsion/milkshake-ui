import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { themeContract } from '../theme-contract.css';

const baseTransition = [
  themeContract.animations.transition.colors,
  themeContract.animations.transition.shadow,
].join(', ');

const cardBackgroundVar = createVar();
const cardBackgroundImageVar = createVar();
const cardBorderColorVar = createVar();
const cardShadowVar = createVar();
const cardHoverShadowVar = createVar();
const cardActiveShadowVar = createVar();
const cardHoverTransformVar = createVar();
const cardActiveTransformVar = createVar();

export const cardVars = {
  background: cardBackgroundVar,
  backgroundImage: cardBackgroundImageVar,
  borderColor: cardBorderColorVar,
  shadow: cardShadowVar,
  hoverShadow: cardHoverShadowVar,
  activeShadow: cardActiveShadowVar,
  hoverTransform: cardHoverTransformVar,
  activeTransform: cardActiveTransformVar,
} as const;

export const card = style({
  vars: {
    [cardBackgroundVar]: themeContract.semantic.surface.level1,
    [cardBackgroundImageVar]: 'none',
    [cardBorderColorVar]: themeContract.semantic.border.light,
    [cardShadowVar]: themeContract.shadows.boxShadow.sm,
    [cardHoverShadowVar]: themeContract.shadows.boxShadow.lg,
    [cardActiveShadowVar]: themeContract.shadows.boxShadow.md,
    [cardHoverTransformVar]: 'translateY(-2px)',
    [cardActiveTransformVar]: 'translateY(0)',
  },
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  zIndex: 0,
  overflow: 'visible',
  backgroundColor: cardBackgroundVar,
  backgroundImage: cardBackgroundImageVar,
  color: themeContract.semantic.text.primary,
  borderRadius: themeContract.borders.radius['2xl'],
  borderWidth: themeContract.borders.width.thin,
  borderStyle: themeContract.borders.style.solid,
  borderColor: cardBorderColorVar,
  boxShadow: cardShadowVar,
  transitionProperty: baseTransition,
  transitionDuration: themeContract.animations.duration.normal,
  transitionTimingFunction: themeContract.animations.easing.out,
});

export const cardSurface = style([
  card,
  {
    vars: {
      [cardBackgroundVar]: themeContract.semantic.surface.level0,
      [cardBackgroundImageVar]: 'none',
      [cardShadowVar]: themeContract.shadows.boxShadow.none,
      [cardHoverShadowVar]: themeContract.shadows.boxShadow.sm,
      [cardActiveShadowVar]: themeContract.shadows.boxShadow.xs,
    },
  },
]);

export const cardOutlined = style([
  card,
  {
    vars: {
      [cardShadowVar]: themeContract.shadows.boxShadow.none,
      [cardHoverShadowVar]: themeContract.shadows.boxShadow.none,
      [cardActiveShadowVar]: themeContract.shadows.boxShadow.none,
      [cardBorderColorVar]: themeContract.semantic.border.dark,
    },
  },
]);

export const cardInteractive = style([
  card,
  {
    cursor: 'pointer',
    selectors: {
      '&:hover': {
        boxShadow: cardHoverShadowVar,
        transform: cardHoverTransformVar,
      },
      '&:active': {
        boxShadow: cardActiveShadowVar,
        transform: cardActiveTransformVar,
      },
      '&:focus-visible': {
        outlineStyle: 'solid',
        outlineWidth: themeContract.focusRing.width.md,
        outlineOffset: themeContract.focusRing.offset.sm,
        outlineColor: themeContract.semantic.ring.focus,
        boxShadow: cardHoverShadowVar,
        transform: cardHoverTransformVar,
      },
    },
  },
]);

export const cardHeader = style({
  padding: themeContract.spacing['6'],
  display: 'flex',
  flexDirection: 'column',
  gap: themeContract.spacing['2'],
  borderBottomWidth: themeContract.borders.width.thin,
  borderBottomStyle: themeContract.borders.style.solid,
  borderBottomColor: themeContract.semantic.border.light,
});

export const cardBody = style({
  padding: themeContract.spacing['6'],
  display: 'flex',
  flexDirection: 'column',
  gap: themeContract.spacing['3'],
  flex: 1,
});

export const cardFooter = style({
  padding: themeContract.spacing['5'],
  paddingTop: themeContract.spacing['4'],
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: themeContract.spacing['3'],
  borderTopWidth: themeContract.borders.width.thin,
  borderTopStyle: themeContract.borders.style.solid,
  borderTopColor: themeContract.semantic.border.light,
});

export const cardSection = style({
  padding: themeContract.spacing['5'],
  borderTopWidth: themeContract.borders.width.thin,
  borderTopStyle: themeContract.borders.style.solid,
  borderTopColor: themeContract.semantic.border.light,
  selectors: {
    '&:first-child': {
      borderTopWidth: themeContract.borders.width.none,
      borderTopStyle: 'none',
      borderTopColor: 'transparent',
    },
  },
});

export const cardTitle = style({
  fontSize: themeContract.typography.fontSize['2xl'],
  lineHeight: themeContract.typography.lineHeight.snug,
  fontWeight: themeContract.typography.fontWeight.semibold,
  color: themeContract.semantic.text.primary,
});

export const cardSubtitle = style({
  fontSize: themeContract.typography.fontSize.base,
  lineHeight: themeContract.typography.lineHeight.relaxed,
  color: themeContract.semantic.text.secondary,
});

export const cardEyebrow = style({
  textTransform: 'uppercase',
  letterSpacing: themeContract.typography.letterSpacing.wide,
  fontSize: themeContract.typography.fontSize.xs,
  fontWeight: themeContract.typography.fontWeight.medium,
  color: themeContract.semantic.text.tertiary,
});

export const cardMedia = style({
  position: 'relative',
  overflow: 'hidden',
  borderTopLeftRadius: themeContract.borders.radius['2xl'],
  borderTopRightRadius: themeContract.borders.radius['2xl'],
});

globalStyle(`${cardMedia} img`, {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

globalStyle(`${cardMedia} video`, {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const cardMeta = style({
  fontSize: themeContract.typography.fontSize.sm,
  color: themeContract.semantic.text.tertiary,
});

export const cardDivider = style({
  height: themeContract.borders.width.thin,
  backgroundColor: themeContract.semantic.border.light,
  width: '100%',
});
