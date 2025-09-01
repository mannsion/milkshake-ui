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

    // Secondary accent colors
    '--color-secondary-50': themeContract.colors.secondary[50],
    '--color-secondary-100': themeContract.colors.secondary[100],
    '--color-secondary-200': themeContract.colors.secondary[200],
    '--color-secondary-300': themeContract.colors.secondary[300],
    '--color-secondary-400': themeContract.colors.secondary[400],
    '--color-secondary-500': themeContract.colors.secondary[500],
    '--color-secondary-600': themeContract.colors.secondary[600],
    '--color-secondary-700': themeContract.colors.secondary[700],
    '--color-secondary-800': themeContract.colors.secondary[800],
    '--color-secondary-900': themeContract.colors.secondary[900],

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

    // Semantic backgrounds
    '--color-background-primary': themeContract.semantic.background.primary,
    '--color-background-secondary': themeContract.semantic.background.secondary,
    '--color-background-tertiary': themeContract.semantic.background.tertiary,
    '--color-background-inverse': themeContract.semantic.background.inverse,

    // Accent surfaces
    '--color-accent-soft': themeContract.semantic.accent.soft,
    '--color-accent-surface': themeContract.semantic.accent.surface,
    '--color-accent-strong': themeContract.semantic.accent.strong,
    '--color-accent-border': themeContract.semantic.accent.border,
    '--color-accent-text': themeContract.semantic.accent.text,

    // Semantic text colors
    '--color-text-primary': themeContract.semantic.text.primary,
    '--color-text-secondary': themeContract.semantic.text.secondary,
    '--color-text-tertiary': themeContract.semantic.text.tertiary,
    '--color-text-inverse': themeContract.semantic.text.inverse,
    '--color-text-success': themeContract.semantic.text.success,
    '--color-text-error': themeContract.semantic.text.error,
    '--color-text-warning': themeContract.semantic.text.warning,
    '--color-text-info': themeContract.semantic.text.info,

    // On-color foregrounds
    '--color-on-primary': themeContract.semantic.on.primary,
    '--color-on-secondary': themeContract.semantic.on.secondary,
    '--color-on-surface': themeContract.semantic.on.surface,
    '--color-on-background': themeContract.semantic.on.background,
    '--color-on-inverse': themeContract.semantic.on.inverse,
    '--color-on-success': themeContract.semantic.on.success,
    '--color-on-warning': themeContract.semantic.on.warning,
    '--color-on-error': themeContract.semantic.on.error,
    '--color-on-info': themeContract.semantic.on.info,

    // Elevation surfaces
    '--color-surface-level0': themeContract.semantic.surface.level0,
    '--color-surface-level1': themeContract.semantic.surface.level1,
    '--color-surface-level2': themeContract.semantic.surface.level2,
    '--color-surface-level3': themeContract.semantic.surface.level3,
    '--color-surface-level4': themeContract.semantic.surface.level4,
    '--color-surface-level5': themeContract.semantic.surface.level5,
    '--color-surface-translucent': themeContract.semantic.surface.translucent,
    '--color-surface-translucent-strong': themeContract.semantic.surface.translucentStrong,

    // Overlays
    '--color-overlay-subtle': themeContract.semantic.overlay.subtle,
    '--color-overlay-default': themeContract.semantic.overlay.default,
    '--color-overlay-strong': themeContract.semantic.overlay.strong,
    '--color-overlay-inverse': themeContract.semantic.overlay.inverse,

    // Ring colors
    '--color-ring-focus': themeContract.semantic.ring.focus,
    '--color-ring-primary': themeContract.semantic.ring.primary,
    '--color-ring-success': themeContract.semantic.ring.success,
    '--color-ring-warning': themeContract.semantic.ring.warning,
    '--color-ring-error': themeContract.semantic.ring.error,
    '--color-ring-info': themeContract.semantic.ring.info,
    '--color-ring-inverse': themeContract.semantic.ring.inverse,

    // Backdrop colors
    '--color-backdrop-subtle': themeContract.backdrop.subtle,
    '--color-backdrop-default': themeContract.backdrop.default,
    '--color-backdrop-strong': themeContract.backdrop.strong,
    '--color-backdrop-inverse': themeContract.backdrop.inverse,

    // Border colors
    '--color-border-default': themeContract.semantic.border.default,
    '--color-border-light': themeContract.semantic.border.light,
    '--color-border-dark': themeContract.semantic.border.dark,
    '--color-border-primary': themeContract.semantic.border.primary,
    '--color-border-success': themeContract.semantic.border.success,
    '--color-border-warning': themeContract.semantic.border.warning,
    '--color-border-error': themeContract.semantic.border.error,
    '--color-border-info': themeContract.semantic.border.info,

    // Interactive colors
    '--color-interactive-hover': themeContract.semantic.interactive.hover,
    '--color-interactive-active': themeContract.semantic.interactive.active,
    '--color-interactive-focus': themeContract.semantic.interactive.focus,
    '--color-interactive-disabled': themeContract.semantic.interactive.disabled,
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

  // Secondary accent colors
  'secondary-50': 'var(--color-secondary-50)',
  'secondary-100': 'var(--color-secondary-100)',
  'secondary-200': 'var(--color-secondary-200)',
  'secondary-300': 'var(--color-secondary-300)',
  'secondary-400': 'var(--color-secondary-400)',
  'secondary-500': 'var(--color-secondary-500)',
  'secondary-600': 'var(--color-secondary-600)',
  'secondary-700': 'var(--color-secondary-700)',
  'secondary-800': 'var(--color-secondary-800)',
  'secondary-900': 'var(--color-secondary-900)',

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

  // Semantic backgrounds
  'background-primary': 'var(--color-background-primary)',
  'background-secondary': 'var(--color-background-secondary)',
  'background-tertiary': 'var(--color-background-tertiary)',
  'background-inverse': 'var(--color-background-inverse)',

  // Accent colors
  'accent-soft': 'var(--color-accent-soft)',
  'accent-surface': 'var(--color-accent-surface)',
  'accent-strong': 'var(--color-accent-strong)',
  'accent-border': 'var(--color-accent-border)',
  'accent-text': 'var(--color-accent-text)',

  // Semantic text
  'text-primary': 'var(--color-text-primary)',
  'text-secondary': 'var(--color-text-secondary)',
  'text-tertiary': 'var(--color-text-tertiary)',
  'text-inverse': 'var(--color-text-inverse)',
  'text-success': 'var(--color-text-success)',
  'text-error': 'var(--color-text-error)',
  'text-warning': 'var(--color-text-warning)',
  'text-info': 'var(--color-text-info)',

  // On-color foregrounds
  'on-primary': 'var(--color-on-primary)',
  'on-secondary': 'var(--color-on-secondary)',
  'on-surface': 'var(--color-on-surface)',
  'on-background': 'var(--color-on-background)',
  'on-inverse': 'var(--color-on-inverse)',
  'on-success': 'var(--color-on-success)',
  'on-warning': 'var(--color-on-warning)',
  'on-error': 'var(--color-on-error)',
  'on-info': 'var(--color-on-info)',

  // Surfaces
  'surface-level0': 'var(--color-surface-level0)',
  'surface-level1': 'var(--color-surface-level1)',
  'surface-level2': 'var(--color-surface-level2)',
  'surface-level3': 'var(--color-surface-level3)',
  'surface-level4': 'var(--color-surface-level4)',
  'surface-level5': 'var(--color-surface-level5)',
  'surface-translucent': 'var(--color-surface-translucent)',
  'surface-translucent-strong': 'var(--color-surface-translucent-strong)',

  // Overlays
  'overlay-subtle': 'var(--color-overlay-subtle)',
  'overlay-default': 'var(--color-overlay-default)',
  'overlay-strong': 'var(--color-overlay-strong)',
  'overlay-inverse': 'var(--color-overlay-inverse)',

  // Ring colors
  'ring-focus': 'var(--color-ring-focus)',
  'ring-primary': 'var(--color-ring-primary)',
  'ring-success': 'var(--color-ring-success)',
  'ring-warning': 'var(--color-ring-warning)',
  'ring-error': 'var(--color-ring-error)',
  'ring-info': 'var(--color-ring-info)',
  'ring-inverse': 'var(--color-ring-inverse)',

  // Backdrops
  'backdrop-subtle': 'var(--color-backdrop-subtle)',
  'backdrop-default': 'var(--color-backdrop-default)',
  'backdrop-strong': 'var(--color-backdrop-strong)',
  'backdrop-inverse': 'var(--color-backdrop-inverse)',

  // Border colors
  'border-default': 'var(--color-border-default)',
  'border-light': 'var(--color-border-light)',
  'border-dark': 'var(--color-border-dark)',
  'border-primary': 'var(--color-border-primary)',
  'border-success': 'var(--color-border-success)',
  'border-warning': 'var(--color-border-warning)',
  'border-error': 'var(--color-border-error)',
  'border-info': 'var(--color-border-info)',

  // Interactive colors
  'interactive-hover': 'var(--color-interactive-hover)',
  'interactive-active': 'var(--color-interactive-active)',
  'interactive-focus': 'var(--color-interactive-focus)',
  'interactive-disabled': 'var(--color-interactive-disabled)',
} as const;

// Most commonly used colors for sprinkles (limited set to avoid union explosion)
export const commonColors = [
  'primary-50', 'primary-100', 'primary-200', 'primary-300', 'primary-400',
  'primary-500', 'primary-600', 'primary-700', 'primary-800', 'primary-900',
  'secondary-50', 'secondary-100', 'secondary-200', 'secondary-300', 'secondary-400',
  'secondary-500', 'secondary-600', 'secondary-700', 'secondary-800', 'secondary-900',
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
  'white', 'black', 'transparent',
  'background-primary', 'background-secondary', 'background-tertiary', 'background-inverse',
  'accent-soft', 'accent-surface', 'accent-strong', 'accent-border', 'accent-text',
  'text-primary', 'text-secondary', 'text-tertiary', 'text-inverse', 'text-success', 'text-error', 'text-warning', 'text-info',
  'on-primary', 'on-secondary', 'on-surface', 'on-background', 'on-inverse', 'on-success', 'on-warning', 'on-error', 'on-info',
  'surface-level0', 'surface-level1', 'surface-level2', 'surface-level3', 'surface-level4', 'surface-level5',
  'surface-translucent', 'surface-translucent-strong',
  'overlay-subtle', 'overlay-default', 'overlay-strong', 'overlay-inverse',
  'ring-focus', 'ring-primary', 'ring-success', 'ring-warning', 'ring-error', 'ring-info', 'ring-inverse',
  'backdrop-subtle', 'backdrop-default', 'backdrop-strong', 'backdrop-inverse',
  'border-default', 'border-light', 'border-dark', 'border-primary', 'border-success', 'border-warning', 'border-error', 'border-info',
  'interactive-hover', 'interactive-active', 'interactive-focus', 'interactive-disabled'
] as const;