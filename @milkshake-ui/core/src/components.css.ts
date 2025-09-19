import { style } from '@vanilla-extract/css';
import { themeContract } from './theme-contract.css';

// Component styles using vanilla-extract's style() function
// These handle complex layouts that would cause union type issues in sprinkles

export const container = style({
  maxWidth: '80rem',
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const containerSmall = style({
  maxWidth: '48rem',
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const flex = style({
  display: 'flex',
});

export const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const flexRow = style({
  display: 'flex',
  flexDirection: 'row',
});

export const flexCenter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const flexBetween = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const flexWrap = style({
  display: 'flex',
  flexWrap: 'wrap',
});

export const grid = style({
  display: 'grid',
});

export const gridAutoFit = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
});

export const gridAutoFitSmall = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
  gap: '0.5rem',
});

export const gridAutoFitMedium = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
});

// Button styles
export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.5rem',
  fontWeight: '600',
  transitionDuration: '300ms',
  transitionTimingFunction: 'ease-out',
  borderWidth: '0',
  cursor: 'pointer',
});

export const buttonPrimary = style([
  button,
  {
    backgroundColor: 'var(--color-primary-500)',
    color: 'var(--color-white)',
    ':hover': {
      backgroundColor: 'var(--color-primary-600)',
    },
  },
]);

export const buttonSecondary = style([
  button,
  {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-neutral-700)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'var(--color-neutral-300)',
    ':hover': {
      backgroundColor: 'var(--color-neutral-50)',
    },
  },
]);

// Card styles
export const card = style({
  backgroundColor: 'var(--color-white)',
  borderRadius: '0.5rem',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'var(--color-neutral-200)',
  boxShadow: themeContract.shadows.boxShadow.md,
});

export const cardPadding = style({
  padding: '1.5rem',
});

// Typography styles
export const heading1 = style({
  fontSize: 'var(--font-size-6xl)',
  fontWeight: 'var(--font-weight-bold)',
  color: 'var(--color-neutral-900)',
  lineHeight: 'var(--line-height-tight)',
  marginBottom: '1rem',
});

export const heading2 = style({
  fontSize: 'var(--font-size-4xl)',
  fontWeight: 'var(--font-weight-bold)',
  color: 'var(--color-neutral-900)',
  marginBottom: '2rem',
});

export const heading3 = style({
  fontSize: 'var(--font-size-xl)',
  fontWeight: 'var(--font-weight-semibold)',
  color: 'var(--color-neutral-800)',
  marginBottom: '1rem',
});

export const heading4 = style({
  fontSize: 'var(--font-size-lg)',
  fontWeight: 'var(--font-weight-semibold)',
  color: 'var(--color-neutral-800)',
  marginBottom: '1rem',
});

export const textLarge = style({
  fontSize: 'var(--font-size-lg)',
  color: 'var(--color-neutral-600)',
});

export const textBase = style({
  fontSize: 'var(--font-size-base)',
  color: 'var(--color-neutral-900)',
});

export const textSmall = style({
  fontSize: 'var(--font-size-sm)',
  color: 'var(--color-neutral-600)',
});

// Layout utilities
export const section = style({
  paddingTop: '4rem',
  paddingBottom: '4rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
});

export const sectionAlt = style([
  section,
  {
    backgroundColor: 'var(--color-neutral-50)',
  },
]);

// Main layout
export const main = style({
  minHeight: '100vh',
  backgroundColor: 'var(--color-neutral-50)',
});

// Hero section
export const hero = style([
  section,
  {
    backgroundColor: 'var(--color-white)',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'var(--color-neutral-200)',
  },
]);

// Footer
export const footer = style([
  section,
  {
    backgroundColor: 'var(--color-neutral-900)',
    color: 'var(--color-white)',
  },
]);

// Theme indicator
export const themeIndicator = style({
  marginTop: '2rem',
  padding: '1rem',
  borderRadius: '0.375rem',
  backgroundColor: 'var(--color-primary-50)',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'var(--color-primary-200)',
  textAlign: 'center',
});