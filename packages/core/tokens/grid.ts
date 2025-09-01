// Grid-related token maps and enums (pure TS)

// Common grid template presets
export const gridTemplateColumnsPresets = {
  // Auto-fit presets
  autoFit100: 'repeat(auto-fit, minmax(100px, 1fr))',
  autoFit120: 'repeat(auto-fit, minmax(120px, 1fr))',
  autoFit150: 'repeat(auto-fit, minmax(150px, 1fr))',
  autoFit200: 'repeat(auto-fit, minmax(200px, 1fr))',
  autoFit240: 'repeat(auto-fit, minmax(240px, 1fr))',
  autoFit250: 'repeat(auto-fit, minmax(250px, 1fr))',
  autoFit300: 'repeat(auto-fit, minmax(300px, 1fr))',
  autoFit360: 'repeat(auto-fit, minmax(360px, 1fr))',
  // Auto-fill presets
  autoFill100: 'repeat(auto-fill, minmax(100px, 1fr))',
  autoFill120: 'repeat(auto-fill, minmax(120px, 1fr))',
  autoFill150: 'repeat(auto-fill, minmax(150px, 1fr))',
  autoFill200: 'repeat(auto-fill, minmax(200px, 1fr))',
  autoFill240: 'repeat(auto-fill, minmax(240px, 1fr))',
  autoFill250: 'repeat(auto-fill, minmax(250px, 1fr))',
  autoFill300: 'repeat(auto-fill, minmax(300px, 1fr))',
  autoFill360: 'repeat(auto-fill, minmax(360px, 1fr))',
  // Simple fractional presets
  cols2: '1fr 1fr',
  cols3: '1fr 1fr 1fr',
  cols4: '1fr 1fr 1fr 1fr',
} as const;

export const gridTemplateColumnsRepeat = {
  cols1: 'repeat(1, minmax(0, 1fr))',
  cols2: 'repeat(2, minmax(0, 1fr))',
  cols3: 'repeat(3, minmax(0, 1fr))',
  cols4: 'repeat(4, minmax(0, 1fr))',
  cols5: 'repeat(5, minmax(0, 1fr))',
  cols6: 'repeat(6, minmax(0, 1fr))',
  cols7: 'repeat(7, minmax(0, 1fr))',
  cols8: 'repeat(8, minmax(0, 1fr))',
  cols9: 'repeat(9, minmax(0, 1fr))',
  cols10: 'repeat(10, minmax(0, 1fr))',
  cols11: 'repeat(11, minmax(0, 1fr))',
  cols12: 'repeat(12, minmax(0, 1fr))',
} as const;

export const gridTemplateRowsRepeat = {
  rows1: 'repeat(1, minmax(0, 1fr))',
  rows2: 'repeat(2, minmax(0, 1fr))',
  rows3: 'repeat(3, minmax(0, 1fr))',
  rows4: 'repeat(4, minmax(0, 1fr))',
  rows5: 'repeat(5, minmax(0, 1fr))',
  rows6: 'repeat(6, minmax(0, 1fr))',
  rows12: 'repeat(12, minmax(0, 1fr))',
} as const;

export const gridAutoFlowValues = ['row', 'column', 'dense', 'row dense', 'column dense'] as const;

export const gridAutoTrackValues = {
  auto: 'auto',
  minContent: 'min-content',
  maxContent: 'max-content',
  fr1: '1fr',
  fr2: '2fr',
  minmaxFr: 'minmax(0, 1fr)',
} as const;

export const gridPlacementValues = {
  justifyItems: ['start', 'end', 'center', 'stretch'] as const,
  alignItems: ['start', 'end', 'center', 'stretch', 'baseline'] as const,
  justifyContent: ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly'] as const,
  alignContent: ['start', 'end', 'center', 'stretch', 'space-between', 'space-around'] as const,
  placeItems: ['start', 'end', 'center', 'stretch'] as const,
  placeContent: ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly'] as const,
} as const;

// Grid line utilities
const lineNumbers = Array.from({ length: 13 }, (_, i) => i + 1); // 1..13
export const gridLineStartValues = Object.fromEntries([
  ['auto', 'auto'],
  ...lineNumbers.map((n) => [String(n), String(n)]),
  ...Array.from({ length: 12 }, (_, i) => [`span${i + 1}`, `span ${i + 1}`]),
]) as Record<string, string>;

export const gridLineEndValues = gridLineStartValues;
