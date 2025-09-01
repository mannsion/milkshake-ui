export const aspectRatioValues = {
  auto: 'auto',
  square: '1 / 1',
  video: '16 / 9',
  portrait: '3 / 4',
  landscape: '4 / 3',
} as const;

export type AspectRatioKey = keyof typeof aspectRatioValues;
