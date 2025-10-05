import { themeContract } from '../theme-contract.css';
import {
  spacingScale,
  spacingWithNegative,
  type SpacingPositiveKey,
  type SpacingNegativeKey,
  type SpacingScaleKey,
} from './spacing-scale';

const toSpacingRecord = <Key extends keyof typeof themeContract.spacing>(keys: readonly Key[]) =>
  keys.reduce<Record<Key, string>>((accumulator, key) => {
    accumulator[key] = themeContract.spacing[key];
    return accumulator;
  }, {} as Record<Key, string>);

const spacingPositiveKeys = Object.keys(spacingScale) as SpacingPositiveKey[];
const spacingAllKeys = Object.keys(spacingWithNegative) as SpacingScaleKey[];

export const spacingPositive = toSpacingRecord(spacingPositiveKeys);

export const spacingWithNegatives = toSpacingRecord(spacingAllKeys);

export const sizeValues = {
  ...spacingPositive,
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
