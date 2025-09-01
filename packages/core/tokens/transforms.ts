import { spacingWithNegative, type SpacingScaleKey } from './spacing-scale';

export const scaleValues = {
  0: '0',
  50: '0.5',
  75: '0.75',
  90: '0.9',
  95: '0.95',
  100: '1',
  105: '1.05',
  110: '1.1',
  125: '1.25',
  150: '1.5',
} as const;
export type ScaleKey = keyof typeof scaleValues;

export const rotateValues = {
  '-180': '-180deg',
  '-135': '-135deg',
  '-90': '-90deg',
  '-45': '-45deg',
  '-12': '-12deg',
  '-6': '-6deg',
  '-3': '-3deg',
  '-1': '-1deg',
  0: '0deg',
  1: '1deg',
  3: '3deg',
  6: '6deg',
  12: '12deg',
  45: '45deg',
  90: '90deg',
  135: '135deg',
  180: '180deg',
} as const;
export type RotateKey = keyof typeof rotateValues;

export const skewValues = {
  '-12': '-12deg',
  '-6': '-6deg',
  '-3': '-3deg',
  '-1': '-1deg',
  0: '0deg',
  1: '1deg',
  3: '3deg',
  6: '6deg',
  12: '12deg',
} as const;
export type SkewKey = keyof typeof skewValues;

const translatePercentages = {
  none: '0',
  half: '50%',
  '-half': '-50%',
  full: '100%',
  '-full': '-100%',
} as const;

export const translateAxisValues = {
  ...spacingWithNegative,
  ...translatePercentages,
} satisfies Record<SpacingScaleKey | keyof typeof translatePercentages, string>;

export type TranslateAxisKey = SpacingScaleKey | keyof typeof translatePercentages;

export const transformOriginValues = [
  'center',
  'top',
  'top left',
  'top right',
  'right',
  'bottom',
  'bottom left',
  'bottom right',
  'left',
] as const;
export type TransformOriginKey = typeof transformOriginValues[number];
