import { spacingScale, spacingWithNegative } from './spacing-scale';
import type {
  SpacingPositiveKey,
  SpacingNegativeKey,
  SpacingScaleKey,
} from './spacing-scale';

// Spacing scale used across sprinkles and layout utilities
export const spacingPositive = spacingScale;

export const spacingWithNegatives = spacingWithNegative;

export const sizeValues = {
  ...spacingScale,
  full: '100%',
  auto: 'auto',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
  screenW: '100vw',
  screenH: '100vh',
  svw: '100svw',
  svh: '100svh',
  lvw: '100lvw',
  lvh: '100lvh',
  dvw: '100dvw',
  dvh: '100dvh',
  half: '50%',
  third: '33.333333%',
  twoThirds: '66.666667%',
  quarter: '25%',
  threeQuarter: '75%',
  prose: '65ch',
} as const;

export type SpacingKey = SpacingPositiveKey;
export type { SpacingNegativeKey, SpacingScaleKey };
