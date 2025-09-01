export const overscrollBehaviorValues = ['auto', 'contain', 'none'] as const;
export type OverscrollBehaviorKey = typeof overscrollBehaviorValues[number];

export const scrollSnapTypeValues = {
  none: 'none',
  'x-proximity': 'x proximity',
  'y-proximity': 'y proximity',
  'both-proximity': 'both proximity',
  'x-mandatory': 'x mandatory',
  'y-mandatory': 'y mandatory',
  'both-mandatory': 'both mandatory',
} as const;
export type ScrollSnapTypeKey = keyof typeof scrollSnapTypeValues;

export const scrollSnapAlignValues = ['none', 'start', 'end', 'center'] as const;
export type ScrollSnapAlignKey = typeof scrollSnapAlignValues[number];

export const scrollSnapStopValues = ['normal', 'always'] as const;
export type ScrollSnapStopKey = typeof scrollSnapStopValues[number];

export const scrollBehaviorValues = ['auto', 'smooth'] as const;
export type ScrollBehaviorKey = typeof scrollBehaviorValues[number];
