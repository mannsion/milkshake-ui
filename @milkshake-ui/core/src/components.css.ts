import { style } from '@vanilla-extract/css';
import { themeContract } from './theme-contract.css';

// Buttons
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

// Cards
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
// Intentionally only component styles here