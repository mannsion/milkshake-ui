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

// Type-safe color keys
export type ColorKey = keyof typeof colorMap;

// Function to get CSS variable from semantic name
export const getColorValue = (colorKey: ColorKey): string => {
  return colorMap[colorKey];
};

// Most commonly used colors for sprinkles (limited set to avoid union explosion)
export const commonColors = [
  'primary-50', 'primary-100', 'primary-200', 'primary-300', 'primary-400',
  'primary-500', 'primary-600', 'primary-700', 'primary-800', 'primary-900',
  'neutral-50', 'neutral-100', 'neutral-200', 'neutral-300', 'neutral-400',
  'neutral-500', 'neutral-600', 'neutral-700', 'neutral-800', 'neutral-900',
  'success-500', 'success-600', 'success-700',
  'warning-500', 'warning-600', 'warning-700',
  'error-500', 'error-600', 'error-700',
  'info-500', 'info-600', 'info-700',
  'white', 'black', 'transparent'
] as const;