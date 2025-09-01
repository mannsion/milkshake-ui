import { style, createGlobalTheme, globalStyle } from '@vanilla-extract/css';
import { breakpointValues } from './tokens/breakpoints';
import { cqMax } from './tokens/container-queries';
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
// Grid utilities moved to grid.css.ts

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

// Fluid container (no max-width cap)
export const containerFluid = style({
  maxWidth: '100%',
});

// Mobile-first responsive container that progressively caps max-width at breakpoints
export const containerResponsive = style({
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: spacing[4],
  paddingRight: spacing[4],
  '@media': {
    [`screen and (min-width: ${breakpointValues.sm})`]: { maxWidth: layoutUtils.container.sm },
    [`screen and (min-width: ${breakpointValues.md})`]: { maxWidth: layoutUtils.container.md },
    [`screen and (min-width: ${breakpointValues.lg})`]: { maxWidth: layoutUtils.container.lg },
    [`screen and (min-width: ${breakpointValues.xl})`]: { maxWidth: layoutUtils.container.xl },
    [`screen and (min-width: ${breakpointValues['2xl']})`]: { maxWidth: layoutUtils.container['2xl'] },
  },
});

// Safe-area utilities for devices with display cutouts (iOS/Android)
export const safeArea = style({
  paddingTop: 'env(safe-area-inset-top)',
  paddingRight: 'env(safe-area-inset-right)',
  paddingBottom: 'env(safe-area-inset-bottom)',
  paddingLeft: 'env(safe-area-inset-left)',
});

export const safeAreaX = style({
  paddingRight: 'env(safe-area-inset-right)',
  paddingLeft: 'env(safe-area-inset-left)',
});

export const safeAreaY = style({
  paddingTop: 'env(safe-area-inset-top)',
  paddingBottom: 'env(safe-area-inset-bottom)',
});

export const safeAreaTop = style({ paddingTop: 'env(safe-area-inset-top)' });
export const safeAreaRight = style({ paddingRight: 'env(safe-area-inset-right)' });
export const safeAreaBottom = style({ paddingBottom: 'env(safe-area-inset-bottom)' });
export const safeAreaLeft = style({ paddingLeft: 'env(safe-area-inset-left)' });

// Orientation helpers (show-only)
export const showPortrait = style({
  display: 'none',
  '@media': { '(orientation: portrait)': { display: 'initial' } },
});

export const showLandscape = style({
  display: 'none',
  '@media': { '(orientation: landscape)': { display: 'initial' } },
});

// Container Query helpers
// Enable inline-size container on an element so its children can react to its size
export const cq = style({
  containerType: 'inline-size',
});

// Switcher pattern variants: horizontal until threshold, then stack.
// Self-contained (enables containerType).
const baseSwitcher = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: spacing[4],
  alignItems: 'flex-start',
  containerType: 'inline-size',
} as const;

export const switcherAtSm = style({
  ...baseSwitcher,
  '@container': { [cqMax.sm]: { flexDirection: 'column' } },
});

export const switcherAtMd = style({
  ...baseSwitcher,
  '@container': { [cqMax.md]: { flexDirection: 'column' } },
});

export const switcherAtLg = style({
  ...baseSwitcher,
  '@container': { [cqMax.lg]: { flexDirection: 'column' } },
});

// Back-compat alias (default stacks at md)
export const switcher = switcherAtMd;

export const cover = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  padding: spacing[6],
  gap: spacing[4],
});

globalStyle(`${cover} > :last-child`, {
  marginTop: 'auto',
});

export const frame = style({
  display: 'grid',
  placeItems: 'center',
  minHeight: '100vh',
  padding: spacing[6],
  textAlign: 'center',
});

globalStyle(`${frame} > *`, {
  maxWidth: 'min(100%, 65ch)',
});

export const reel = style({
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: 'max-content',
  gap: spacing[4],
  overflowX: 'auto',
  paddingBlockStart: spacing[2],
  paddingBlockEnd: spacing[4],
  paddingInline: spacing[3],
  scrollSnapType: 'x proximity',
  scrollPaddingInline: spacing[3],
  scrollPaddingBlockStart: spacing[2],
  scrollbarGutter: 'stable',
  scrollbarWidth: 'thin',
  WebkitOverflowScrolling: 'touch',
  overscrollBehaviorX: 'contain',
});

globalStyle(`${reel} > *`, {
  scrollSnapAlign: 'start',
});

// Full-bleed helper: expand content to viewport width and neutralize parent padding
export const fullBleed = style({
  width: '100vw',
  position: 'relative',
  left: '50%',
  right: '50%',
  marginLeft: 'calc(50% - 50vw)',
  marginRight: 'calc(50% - 50vw)',
  '@supports': {
    '(width: 100dvw)': {
      width: '100dvw',
      marginLeft: 'calc(50% - 50dvw)',
      marginRight: 'calc(50% - 50dvw)',
    },
  },
});


// Clipping and isolation utilities
// Modern overflow clipping with sensible fallback. Ensures inner content doesn't spill visually.
export const clip = style({
  overflow: 'clip',
  // Fallback for browsers without overflow: clip support
  '@supports': {
    'not (overflow: clip)': {
      overflow: 'hidden',
    },
  },
});

export const clipX = style({
  overflowX: 'clip',
  '@supports': {
    'not (overflow-x: clip)': {
      overflowX: 'hidden',
    },
  },
});

export const clipY = style({
  overflowY: 'clip',
  '@supports': {
    'not (overflow-y: clip)': {
      overflowY: 'hidden',
    },
  },
});

// Create a new stacking/containment context so "outside" stays on top reliably across browsers.
export const isolate = style({
  isolation: 'isolate',
});

// A surface that isolates and clips its contents. Use on outer containers so inner content gets clipped under it.
export const surface = style([
  isolate,
  clip,
]);

// Stack recipe: vertical rhythm with a sensible default gap
export const stack = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[4],
});

// Cluster recipe: horizontal wrap group with gap and center alignment
export const cluster = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: spacing[3],
  rowGap: spacing[3],
});

// Sidebar (CQ): two columns when wide, stack when narrow
export const sidebar = style({
  display: 'grid',
  gap: spacing[4],
  containerType: 'inline-size',
  gridTemplateColumns: 'minmax(0, 1fr) minmax(16rem, 28%)',
  '@container': {
    [cqMax.lg]: {
      gridTemplateColumns: '1fr',
    },
  },
});

