export const objectFitValues = ['contain', 'cover', 'fill', 'none', 'scale-down'] as const;
export type ObjectFitKey = typeof objectFitValues[number];

export const objectPositionValues = {
  center: 'center',
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
  'top-left': 'top left',
  'top-right': 'top right',
  'bottom-left': 'bottom left',
  'bottom-right': 'bottom right',
} as const;
export type ObjectPositionKey = keyof typeof objectPositionValues;
