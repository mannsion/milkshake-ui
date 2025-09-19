// Breakpoint values for sprinkles (actual pixel values, not CSS variables)
export const breakpointValues = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export type BreakpointKey = keyof typeof breakpointValues;
