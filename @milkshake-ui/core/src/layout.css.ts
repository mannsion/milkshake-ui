import { style } from '@vanilla-extract/css';
import { createGlobalTheme } from '@vanilla-extract/css';
import { spacing } from './spacing.css';

// Layout utilities using vanilla-extract styles
export const layoutUtils = createGlobalTheme(':root', {
  // Container utilities
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Aspect ratio utilities
  aspectRatio: {
    square: '1 / 1',
    video: '16 / 9',
    portrait: '3 / 4',
    landscape: '4 / 3',
  },
});

// Flexbox utilities
export const flexUtils = {
  // Flex direction
  flexRow: style({
    flexDirection: 'row',
  }),
  flexCol: style({
    flexDirection: 'column',
  }),
  flexRowReverse: style({
    flexDirection: 'row-reverse',
  }),
  flexColReverse: style({
    flexDirection: 'column-reverse',
  }),

  // Flex wrap
  flexWrap: style({
    flexWrap: 'wrap',
  }),
  flexWrapReverse: style({
    flexWrap: 'wrap-reverse',
  }),
  flexNoWrap: style({
    flexWrap: 'nowrap',
  }),

  // Justify content
  justifyStart: style({
    justifyContent: 'flex-start',
  }),
  justifyEnd: style({
    justifyContent: 'flex-end',
  }),
  justifyCenter: style({
    justifyContent: 'center',
  }),
  justifyBetween: style({
    justifyContent: 'space-between',
  }),
  justifyAround: style({
    justifyContent: 'space-around',
  }),
  justifyEvenly: style({
    justifyContent: 'space-evenly',
  }),

  // Align items
  itemsStart: style({
    alignItems: 'flex-start',
  }),
  itemsEnd: style({
    alignItems: 'flex-end',
  }),
  itemsCenter: style({
    alignItems: 'center',
  }),
  itemsBaseline: style({
    alignItems: 'baseline',
  }),
  itemsStretch: style({
    alignItems: 'stretch',
  }),

  // Align self
  selfAuto: style({
    alignSelf: 'auto',
  }),
  selfStart: style({
    alignSelf: 'flex-start',
  }),
  selfEnd: style({
    alignSelf: 'flex-end',
  }),
  selfCenter: style({
    alignSelf: 'center',
  }),
  selfStretch: style({
    alignSelf: 'stretch',
  }),
  selfBaseline: style({
    alignSelf: 'baseline',
  }),
};

// Grid utilities
export const gridUtils = {
  // Grid templates
  gridCols1: style({
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  }),
  gridCols2: style({
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  }),
  gridCols3: style({
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  }),
  gridCols4: style({
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  }),
  gridCols5: style({
    gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
  }),
  gridCols6: style({
    gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
  }),
  gridCols12: style({
    gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
  }),

  // Grid column spans
  colSpan1: style({
    gridColumn: 'span 1 / span 1',
  }),
  colSpan2: style({
    gridColumn: 'span 2 / span 2',
  }),
  colSpan3: style({
    gridColumn: 'span 3 / span 3',
  }),
  colSpan4: style({
    gridColumn: 'span 4 / span 4',
  }),
  colSpan5: style({
    gridColumn: 'span 5 / span 5',
  }),
  colSpan6: style({
    gridColumn: 'span 6 / span 6',
  }),
  colSpan12: style({
    gridColumn: 'span 12 / span 12',
  }),

  // Grid row spans
  rowSpan1: style({
    gridRow: 'span 1 / span 1',
  }),
  rowSpan2: style({
    gridRow: 'span 2 / span 2',
  }),
  rowSpan3: style({
    gridRow: 'span 3 / span 3',
  }),
  rowSpan4: style({
    gridRow: 'span 4 / span 4',
  }),
  rowSpan5: style({
    gridRow: 'span 5 / span 5',
  }),
  rowSpan6: style({
    gridRow: 'span 6 / span 6',
  }),
};

// Display utilities
export const displayUtils = {
  block: style({
    display: 'block',
  }),
  inlineBlock: style({
    display: 'inline-block',
  }),
  inline: style({
    display: 'inline',
  }),
  flex: style({
    display: 'flex',
  }),
  inlineFlex: style({
    display: 'inline-flex',
  }),
  grid: style({
    display: 'grid',
  }),
  inlineGrid: style({
    display: 'inline-grid',
  }),
  hidden: style({
    display: 'none',
  }),
};

// Position utilities
export const positionUtils = {
  static: style({
    position: 'static',
  }),
  fixed: style({
    position: 'fixed',
  }),
  absolute: style({
    position: 'absolute',
  }),
  relative: style({
    position: 'relative',
  }),
  sticky: style({
    position: 'sticky',
  }),
};

// Overflow utilities
export const overflowUtils = {
  overflowAuto: style({
    overflow: 'auto',
  }),
  overflowHidden: style({
    overflow: 'hidden',
  }),
  overflowVisible: style({
    overflow: 'visible',
  }),
  overflowScroll: style({
    overflow: 'scroll',
  }),
  overflowXAuto: style({
    overflowX: 'auto',
  }),
  overflowYAuto: style({
    overflowY: 'auto',
  }),
  overflowXHidden: style({
    overflowX: 'hidden',
  }),
  overflowYHidden: style({
    overflowY: 'hidden',
  }),
  overflowXVisible: style({
    overflowX: 'visible',
  }),
  overflowYVisible: style({
    overflowY: 'visible',
  }),
  overflowXScroll: style({
    overflowX: 'scroll',
  }),
  overflowYScroll: style({
    overflowY: 'scroll',
  }),
};

// Visibility utilities
export const visibilityUtils = {
  visible: style({
    visibility: 'visible',
  }),
  invisible: style({
    visibility: 'hidden',
  }),
  srOnly: style({
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
  }),
};

// Z-index utilities
export const zIndexUtils = {
  z0: style({
    zIndex: '0',
  }),
  z10: style({
    zIndex: '10',
  }),
  z20: style({
    zIndex: '20',
  }),
  z30: style({
    zIndex: '30',
  }),
  z40: style({
    zIndex: '40',
  }),
  z50: style({
    zIndex: '50',
  }),
  zAuto: style({
    zIndex: 'auto',
  }),
};

// Container utility
export const container = style({
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: spacing[4],
  paddingRight: spacing[4],
});

// Responsive container variants
export const containerSm = style({
  maxWidth: layoutUtils.container.sm,
});

export const containerMd = style({
  maxWidth: layoutUtils.container.md,
});

export const containerLg = style({
  maxWidth: layoutUtils.container.lg,
});

export const containerXl = style({
  maxWidth: layoutUtils.container.xl,
});

export const container2xl = style({
  maxWidth: layoutUtils.container['2xl'],
});