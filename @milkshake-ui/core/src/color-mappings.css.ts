import { style } from '@vanilla-extract/css';
import { themeContract } from './theme-contract.css';

// Color mappings for sprinkles - maps semantic names to CSS variables
export const colorMappings = style({
  vars: {
    // Neutral colors
    '--color-neutral-50': themeContract.colors.neutral[50],
    '--color-neutral-100': themeContract.colors.neutral[100],
    '--color-neutral-200': themeContract.colors.neutral[200],
    '--color-neutral-300': themeContract.colors.neutral[300],
    '--color-neutral-400': themeContract.colors.neutral[400],
    '--color-neutral-500': themeContract.colors.neutral[500],
    '--color-neutral-600': themeContract.colors.neutral[600],
    '--color-neutral-700': themeContract.colors.neutral[700],
    '--color-neutral-800': themeContract.colors.neutral[800],
    '--color-neutral-900': themeContract.colors.neutral[900],

    // Primary colors
    '--color-primary-50': themeContract.colors.primary[50],
    '--color-primary-100': themeContract.colors.primary[100],
    '--color-primary-200': themeContract.colors.primary[200],
    '--color-primary-300': themeContract.colors.primary[300],
    '--color-primary-400': themeContract.colors.primary[400],
    '--color-primary-500': themeContract.colors.primary[500],
    '--color-primary-600': themeContract.colors.primary[600],
    '--color-primary-700': themeContract.colors.primary[700],
    '--color-primary-800': themeContract.colors.primary[800],
    '--color-primary-900': themeContract.colors.primary[900],

    // Success colors
    '--color-success-50': themeContract.colors.success[50],
    '--color-success-100': themeContract.colors.success[100],
    '--color-success-200': themeContract.colors.success[200],
    '--color-success-300': themeContract.colors.success[300],
    '--color-success-400': themeContract.colors.success[400],
    '--color-success-500': themeContract.colors.success[500],
    '--color-success-600': themeContract.colors.success[600],
    '--color-success-700': themeContract.colors.success[700],
    '--color-success-800': themeContract.colors.success[800],
    '--color-success-900': themeContract.colors.success[900],

    // Warning colors
    '--color-warning-50': themeContract.colors.warning[50],
    '--color-warning-100': themeContract.colors.warning[100],
    '--color-warning-200': themeContract.colors.warning[200],
    '--color-warning-300': themeContract.colors.warning[300],
    '--color-warning-400': themeContract.colors.warning[400],
    '--color-warning-500': themeContract.colors.warning[500],
    '--color-warning-600': themeContract.colors.warning[600],
    '--color-warning-700': themeContract.colors.warning[700],
    '--color-warning-800': themeContract.colors.warning[800],
    '--color-warning-900': themeContract.colors.warning[900],

    // Error colors
    '--color-error-50': themeContract.colors.error[50],
    '--color-error-100': themeContract.colors.error[100],
    '--color-error-200': themeContract.colors.error[200],
    '--color-error-300': themeContract.colors.error[300],
    '--color-error-400': themeContract.colors.error[400],
    '--color-error-500': themeContract.colors.error[500],
    '--color-error-600': themeContract.colors.error[600],
    '--color-error-700': themeContract.colors.error[700],
    '--color-error-800': themeContract.colors.error[800],
    '--color-error-900': themeContract.colors.error[900],

    // Info colors
    '--color-info-50': themeContract.colors.info[50],
    '--color-info-100': themeContract.colors.info[100],
    '--color-info-200': themeContract.colors.info[200],
    '--color-info-300': themeContract.colors.info[300],
    '--color-info-400': themeContract.colors.info[400],
    '--color-info-500': themeContract.colors.info[500],
    '--color-info-600': themeContract.colors.info[600],
    '--color-info-700': themeContract.colors.info[700],
    '--color-info-800': themeContract.colors.info[800],
    '--color-info-900': themeContract.colors.info[900],

    // Base colors
    '--color-white': themeContract.colors.white,
    '--color-black': themeContract.colors.black,
    '--color-transparent': themeContract.colors.transparent,
  },
});

// Semantic color mapping - converts clean names to CSS variables
export const colorMap = {
  // Primary colors
  'primary-50': 'var(--color-primary-50)',
  'primary-100': 'var(--color-primary-100)',
  'primary-200': 'var(--color-primary-200)',
  'primary-300': 'var(--color-primary-300)',
  'primary-400': 'var(--color-primary-400)',
  'primary-500': 'var(--color-primary-500)',
  'primary-600': 'var(--color-primary-600)',
  'primary-700': 'var(--color-primary-700)',
  'primary-800': 'var(--color-primary-800)',
  'primary-900': 'var(--color-primary-900)',

  // Neutral colors
  'neutral-50': 'var(--color-neutral-50)',
  'neutral-100': 'var(--color-neutral-100)',
  'neutral-200': 'var(--color-neutral-200)',
  'neutral-300': 'var(--color-neutral-300)',
  'neutral-400': 'var(--color-neutral-400)',
  'neutral-500': 'var(--color-neutral-500)',
  'neutral-600': 'var(--color-neutral-600)',
  'neutral-700': 'var(--color-neutral-700)',
  'neutral-800': 'var(--color-neutral-800)',
  'neutral-900': 'var(--color-neutral-900)',

  // Semantic colors
  'success-50': 'var(--color-success-50)',
  'success-100': 'var(--color-success-100)',
  'success-200': 'var(--color-success-200)',
  'success-300': 'var(--color-success-300)',
  'success-400': 'var(--color-success-400)',
  'success-500': 'var(--color-success-500)',
  'success-600': 'var(--color-success-600)',
  'success-700': 'var(--color-success-700)',
  'success-800': 'var(--color-success-800)',
  'success-900': 'var(--color-success-900)',

  'warning-50': 'var(--color-warning-50)',
  'warning-100': 'var(--color-warning-100)',
  'warning-200': 'var(--color-warning-200)',
  'warning-300': 'var(--color-warning-300)',
  'warning-400': 'var(--color-warning-400)',
  'warning-500': 'var(--color-warning-500)',
  'warning-600': 'var(--color-warning-600)',
  'warning-700': 'var(--color-warning-700)',
  'warning-800': 'var(--color-warning-800)',
  'warning-900': 'var(--color-warning-900)',

  'error-50': 'var(--color-error-50)',
  'error-100': 'var(--color-error-100)',
  'error-200': 'var(--color-error-200)',
  'error-300': 'var(--color-error-300)',
  'error-400': 'var(--color-error-400)',
  'error-500': 'var(--color-error-500)',
  'error-600': 'var(--color-error-600)',
  'error-700': 'var(--color-error-700)',
  'error-800': 'var(--color-error-800)',
  'error-900': 'var(--color-error-900)',

  'info-50': 'var(--color-info-50)',
  'info-100': 'var(--color-info-100)',
  'info-200': 'var(--color-info-200)',
  'info-300': 'var(--color-info-300)',
  'info-400': 'var(--color-info-400)',
  'info-500': 'var(--color-info-500)',
  'info-600': 'var(--color-info-600)',
  'info-700': 'var(--color-info-700)',
  'info-800': 'var(--color-info-800)',
  'info-900': 'var(--color-info-900)',

  // Base colors
  'white': 'var(--color-white)',
  'black': 'var(--color-black)',
  'transparent': 'var(--color-transparent)',
} as const;

// Most commonly used colors for sprinkles (limited set to avoid union explosion)
export const commonColors = [
  'primary-50', 'primary-100', 'primary-200', 'primary-300', 'primary-400',
  'primary-500', 'primary-600', 'primary-700', 'primary-800', 'primary-900',
  'neutral-50', 'neutral-100', 'neutral-200', 'neutral-300', 'neutral-400',
  'neutral-500', 'neutral-600', 'neutral-700', 'neutral-800', 'neutral-900',
  'success-50', 'success-100', 'success-200', 'success-300', 'success-400',
  'success-500', 'success-600', 'success-700', 'success-800', 'success-900',
  'warning-50', 'warning-100', 'warning-200', 'warning-300', 'warning-400',
  'warning-500', 'warning-600', 'warning-700', 'warning-800', 'warning-900',
  'error-50', 'error-100', 'error-200', 'error-300', 'error-400',
  'error-500', 'error-600', 'error-700', 'error-800', 'error-900',
  'info-50', 'info-100', 'info-200', 'info-300', 'info-400',
  'info-500', 'info-600', 'info-700', 'info-800', 'info-900',
  'white', 'black', 'transparent'
] as const;