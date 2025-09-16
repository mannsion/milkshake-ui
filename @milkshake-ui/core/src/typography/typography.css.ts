import { style, styleVariants, fallbackVar } from '@vanilla-extract/css';
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { typographyVars } from './theme.css';

// Core text base style
export const textBase = style({
  fontFamily: fallbackVar(typographyVars.font.family.base, 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial'),
  color: fallbackVar(typographyVars.color.text.primary, '#111827'),
  fontWeight: fallbackVar(typographyVars.font.weight.regular, '400'),
  lineHeight: fallbackVar(typographyVars.lineHeight.normal, '1.5'),
});

// Separate base for headings to avoid unintended overrides
export const headingBase = style({
  fontFamily: fallbackVar(typographyVars.font.family.heading, 'inherit'),
  color: fallbackVar(typographyVars.color.text.primary, '#111827'),
});

// Sprinkles
const textProperties = defineProperties({
  properties: {
    fontFamily: [
      typographyVars.font.family.base,
      typographyVars.font.family.heading,
      typographyVars.font.family.mono,
    ],
    fontWeight: [
      typographyVars.font.weight.light,
      typographyVars.font.weight.regular,
      typographyVars.font.weight.medium,
      typographyVars.font.weight.semibold,
      typographyVars.font.weight.bold,
    ],
    fontSize: [
      typographyVars.size.xs,
      typographyVars.size.sm,
      typographyVars.size.md,
      typographyVars.size.lg,
      typographyVars.size.xl,
      typographyVars.size['2xl'],
      typographyVars.size['3xl'],
      typographyVars.size['4xl'],
      typographyVars.size['5xl'],
    ],
    lineHeight: [
      typographyVars.lineHeight.tight,
      typographyVars.lineHeight.snug,
      typographyVars.lineHeight.normal,
      typographyVars.lineHeight.relaxed,
    ],
    letterSpacing: [
      typographyVars.letterSpacing.tighter,
      typographyVars.letterSpacing.tight,
      typographyVars.letterSpacing.normal,
      typographyVars.letterSpacing.wide,
      typographyVars.letterSpacing.wider,
    ],
    color: [
      typographyVars.color.text.primary,
      typographyVars.color.text.secondary,
      typographyVars.color.text.muted,
      typographyVars.color.text.inverted,
    ],
  },
  shorthands: {
    size: ['fontSize', 'lineHeight'],
  },
});

export const textSprinkles = createSprinkles(textProperties);
export type TextSprinkles = Parameters<typeof textSprinkles>[0];

// Semantic variants
export const heading = styleVariants({
  h1: [headingBase, { margin: '0', fontWeight: fallbackVar(typographyVars.font.weight.bold, '700'),    fontSize: fallbackVar(typographyVars.size['5xl'], '3rem'),  lineHeight: fallbackVar(typographyVars.lineHeight.tight, '1.1'),   letterSpacing: fallbackVar(typographyVars.letterSpacing.tighter, '-0.02em') }],
  h2: [headingBase, { margin: '0', fontWeight: fallbackVar(typographyVars.font.weight.semibold, '600'), fontSize: fallbackVar(typographyVars.size['4xl'], '2.25rem'), lineHeight: fallbackVar(typographyVars.lineHeight.tight, '1.1'),   letterSpacing: fallbackVar(typographyVars.letterSpacing.tight, '-0.01em') }],
  h3: [headingBase, { margin: '0', fontWeight: fallbackVar(typographyVars.font.weight.semibold, '600'), fontSize: fallbackVar(typographyVars.size['3xl'], '1.875rem'), lineHeight: fallbackVar(typographyVars.lineHeight.snug, '1.25') }],
  h4: [headingBase, { margin: '0', fontWeight: fallbackVar(typographyVars.font.weight.medium, '500'),   fontSize: fallbackVar(typographyVars.size['2xl'], '1.5rem'),   lineHeight: fallbackVar(typographyVars.lineHeight.snug, '1.25') }],
  h5: [headingBase, { margin: '0', fontWeight: fallbackVar(typographyVars.font.weight.medium, '500'),   fontSize: fallbackVar(typographyVars.size.xl, '1.25rem'),      lineHeight: fallbackVar(typographyVars.lineHeight.normal, '1.5') }],
  h6: [headingBase, { margin: '0', fontWeight: fallbackVar(typographyVars.font.weight.regular, '400'),  fontSize: fallbackVar(typographyVars.size.lg, '1.125rem'),     lineHeight: fallbackVar(typographyVars.lineHeight.normal, '1.5') }],
});

export const paragraph = styleVariants({
  sm: [textBase, { margin: '0', fontSize: fallbackVar(typographyVars.size.sm, '0.875rem'), lineHeight: fallbackVar(typographyVars.lineHeight.relaxed, '1.65') }],
  md: [textBase, { margin: '0', fontSize: fallbackVar(typographyVars.size.md, '1rem'),     lineHeight: fallbackVar(typographyVars.lineHeight.relaxed, '1.65') }],
  lg: [textBase, { margin: '0', fontSize: fallbackVar(typographyVars.size.lg, '1.125rem'), lineHeight: fallbackVar(typographyVars.lineHeight.relaxed, '1.65') }],
});

export const label = styleVariants({
  normal: [textBase, { margin: '0', textTransform: 'uppercase', fontSize: fallbackVar(typographyVars.size.sm, '0.875rem'), fontWeight: fallbackVar(typographyVars.font.weight.medium, '500'), color: fallbackVar(typographyVars.color.text.secondary, '#374151'), letterSpacing: fallbackVar(typographyVars.letterSpacing.wide, '0.01em') }],
  subtle: [textBase, { margin: '0', textTransform: 'uppercase', fontSize: fallbackVar(typographyVars.size.xs, '0.75rem'),  color: fallbackVar(typographyVars.color.text.muted, '#6B7280'),      letterSpacing: fallbackVar(typographyVars.letterSpacing.wide, '0.01em') }],
});

export const code = style([
  textBase,
  {
    fontFamily: fallbackVar(typographyVars.font.family.mono, 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'),
    background: fallbackVar(typographyVars.color.code.bg, '#F3F4F6'),
    color: fallbackVar(typographyVars.color.code.text, '#111827'),
    padding: '0.125rem 0.25rem',
    borderRadius: '4px',
  },
]);

export const link = style([
  textBase,
  {
    color: fallbackVar(typographyVars.color.link.default, '#2563EB'),
    selectors: {
      '&:hover': { color: fallbackVar(typographyVars.color.link.hover, '#1D4ED8') },
    },
  },
]);
