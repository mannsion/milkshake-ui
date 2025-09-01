export const flexValues = {
  1: '1 1 0%',
  auto: '1 1 auto',
  initial: '0 1 auto',
  none: 'none',
} as const;

export type FlexKey = keyof typeof flexValues;

export const flexGrowValues = ['0', '1'] as const;
export type FlexGrowKey = typeof flexGrowValues[number];

export const flexShrinkValues = ['0', '1'] as const;
export type FlexShrinkKey = typeof flexShrinkValues[number];

const orderRange = Array.from({ length: 13 }, (_, index) => index - 6).map((value) => value.toString());

export const orderValues = {
  ...Object.fromEntries(orderRange.map((value) => [value, value])),
  none: '0',
  first: '-9999',
  last: '9999',
} as const;

export type OrderKey = keyof typeof orderValues;
