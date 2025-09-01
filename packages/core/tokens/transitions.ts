export const transitionDurationValues = {
  fastest: '75ms',
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slowest: '700ms',
} as const;

export const transitionPropertyValues = {
  all: 'all',
  colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
  opacity: 'opacity',
  transform: 'transform',
  shadow: 'box-shadow, filter',
} as const;

export const transitionTimingFunctionValues = ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'] as const;
