import { style } from '@vanilla-extract/css';

export const section = style({
  paddingTop: '4rem',
  paddingBottom: '4rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
});

export const sectionAlt = style([
  section,
  { backgroundColor: 'var(--color-neutral-50)' },
]);

export const main = style({
  minHeight: '100vh',
  backgroundColor: 'var(--color-neutral-50)',
});

export const hero = style([
  section,
  {
    backgroundColor: 'var(--color-white)',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'var(--color-neutral-200)',
  },
]);

export const footer = style([
  section,
  {
    backgroundColor: 'var(--color-neutral-900)',
    color: 'var(--color-white)',
  },
]);

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
