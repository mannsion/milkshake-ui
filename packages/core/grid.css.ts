import { style } from '@vanilla-extract/css';

// Grid container helpers
export const grid = style({
  display: 'grid',
});

export const gridAutoFit = style({
  display: 'grid',
  // Cap column min to container width to avoid horizontal overflow on tiny screens
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
  gap: '2rem',
});

export const gridAutoFitSmall = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 120px), 1fr))',
  gap: '0.5rem',
});

export const gridAutoFitMedium = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
  gap: '2rem',
});

// Grid utilities
export const gridUtils = {
  // Grid templates
  gridCols1: style({ gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' }),
  gridCols2: style({ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }),
  gridCols3: style({ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }),
  gridCols4: style({ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }),
  gridCols5: style({ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }),
  gridCols6: style({ gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' }),
  gridCols12: style({ gridTemplateColumns: 'repeat(12, minmax(0, 1fr))' }),

  // Grid column spans
  colSpan1: style({ gridColumn: 'span 1 / span 1' }),
  colSpan2: style({ gridColumn: 'span 2 / span 2' }),
  colSpan3: style({ gridColumn: 'span 3 / span 3' }),
  colSpan4: style({ gridColumn: 'span 4 / span 4' }),
  colSpan5: style({ gridColumn: 'span 5 / span 5' }),
  colSpan6: style({ gridColumn: 'span 6 / span 6' }),
  colSpan12: style({ gridColumn: 'span 12 / span 12' }),

  // Grid row spans
  rowSpan1: style({ gridRow: 'span 1 / span 1' }),
  rowSpan2: style({ gridRow: 'span 2 / span 2' }),
  rowSpan3: style({ gridRow: 'span 3 / span 3' }),
  rowSpan4: style({ gridRow: 'span 4 / span 4' }),
  rowSpan5: style({ gridRow: 'span 5 / span 5' }),
  rowSpan6: style({ gridRow: 'span 6 / span 6' }),
};
