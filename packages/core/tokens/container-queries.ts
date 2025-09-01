export const containerBreakpointValues = {
  // Mirror viewport breakpoints in rem so they adapt with root font size
  sm: '40rem',  // ~640px
  md: '48rem',  // ~768px
  lg: '64rem',  // ~1024px
  xl: '80rem',  // ~1280px
  '2xl': '96rem', // ~1536px
} as const;

export type ContainerBreakpointKey = keyof typeof containerBreakpointValues;

// Named container query strings for convenience
export const cqMin = {
  sm: `(min-width: ${containerBreakpointValues.sm})`,
  md: `(min-width: ${containerBreakpointValues.md})`,
  lg: `(min-width: ${containerBreakpointValues.lg})`,
  xl: `(min-width: ${containerBreakpointValues.xl})`,
  '2xl': `(min-width: ${containerBreakpointValues['2xl']})`,
} as const;

export const cqMax = {
  sm: `(max-width: ${containerBreakpointValues.sm})`,
  md: `(max-width: ${containerBreakpointValues.md})`,
  lg: `(max-width: ${containerBreakpointValues.lg})`,
  xl: `(max-width: ${containerBreakpointValues.xl})`,
  '2xl': `(max-width: ${containerBreakpointValues['2xl']})`,
} as const;
