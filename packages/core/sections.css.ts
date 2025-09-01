import { style } from '@vanilla-extract/css';
import { surface } from './layout.css';
import { themeContract } from './theme-contract.css';

export const section = style([
  {
    paddingTop: '4rem',
    paddingBottom: '4rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    display: 'block',
    width: '100%',
  },
  // Make every section a clipping surface so inner overflow is masked under the outside
  surface,
]);

export const sectionAlt = style([section, { backgroundColor: themeContract.semantic.accent.soft }]);

export const main = style([
  {
    minHeight: '100vh',
    backgroundColor: themeContract.semantic.background.primary,
    display: 'block',
    width: '100%',
  },
  surface,
]);

export const hero = style([
  section,
  {
    backgroundColor: themeContract.semantic.accent.soft,
    color: themeContract.semantic.accent.text,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: themeContract.semantic.accent.border,
    boxShadow: themeContract.shadows.boxShadow.sm,
  },
]);

export const footer = style([
  section,
  {
    backgroundColor: themeContract.semantic.accent.surface,
    color: themeContract.semantic.on.secondary,
  },
]);

export const themeIndicator = style({
  marginTop: '2rem',
  padding: '1rem',
  borderRadius: '0.375rem',
  backgroundColor: 'var(--color-accent-surface)',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'var(--color-accent-border)',
  textAlign: 'center',
  color: 'var(--color-accent-text)',
});

// Utility: remove horizontal padding (for full-bleed bands)
export const noPaddingX = style({
  paddingLeft: 0,
  paddingRight: 0,
});
