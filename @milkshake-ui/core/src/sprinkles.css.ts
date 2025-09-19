import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { colorMap } from './color-mappings.css';
import { themeContract } from './theme-contract.css';

// Inline token maps to avoid cross-file runtime ordering issues during VE compilation
const borderRadiusValues = {
  none: '0px',
  sm: '0.125rem',
  md: '0.25rem',
  lg: '0.375rem',
  xl: '0.5rem',
  '2xl': '0.75rem',
  '3xl': '1rem',
  '4xl': '1.5rem',
  full: '9999px',
} as const;

const borderWidthValues = {
  none: '0px',
  thin: '1px',
  medium: '2px',
  thick: '3px',
  heavy: '4px',
} as const;

const fontSizeValues = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
} as const;

const fontWeightValues = {
  thin: '100',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

const fontFamilyValues = {
  sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  serif: 'ui-serif, "Times New Roman", Times, serif',
  mono: 'ui-monospace, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
} as const;

const transitionDurationValues = {
  fastest: '75ms',
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slowest: '700ms',
} as const;

// Breakpoint values for sprinkles (actual pixel values, not CSS variables)
const breakpointValues = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Spacing scale (matches spacing.css.ts)
const spacingPositive = {
  '0': '0px',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
  '72': '18rem',
  '80': '20rem',
  '96': '24rem',
  '112': '28rem',
  '128': '32rem',
} as const;

const spacingWithNegatives = {
  ...spacingPositive,
  '-1': '-0.25rem',
  '-2': '-0.5rem',
  '-3': '-0.75rem',
  '-4': '-1rem',
  '-5': '-1.25rem',
  '-6': '-1.5rem',
  '-8': '-2rem',
  '-10': '-2.5rem',
  '-12': '-3rem',
  '-16': '-4rem',
  '-20': '-5rem',
  '-24': '-6rem',
  '-32': '-8rem',
} as const;

// Width/height using spacing scale plus keywords
const sizeValues = {
  ...spacingPositive,
  full: '100%',
  auto: 'auto',
} as const;

// Simple responsive conditions - only essential properties using simple values
const responsiveConditions = defineProperties({
  conditions: {
    mobile: {},
    sm: { '@media': `screen and (min-width: ${breakpointValues.sm})` },
    md: { '@media': `screen and (min-width: ${breakpointValues.md})` },
    lg: { '@media': `screen and (min-width: ${breakpointValues.lg})` },
    xl: { '@media': `screen and (min-width: ${breakpointValues.xl})` },
    '2xl': { '@media': `screen and (min-width: ${breakpointValues['2xl']})` },
  },
  defaultCondition: 'mobile',
  properties: {
    // Spacing utilities only - using simple values
    paddingTop: spacingPositive,
    paddingBottom: spacingPositive,
    paddingLeft: spacingPositive,
    paddingRight: spacingPositive,
    marginTop: spacingWithNegatives,
    marginBottom: spacingWithNegatives,
    marginLeft: spacingWithNegatives,
    marginRight: spacingWithNegatives,
    gap: spacingPositive,

    // Color utilities - using semantic names (converted to CSS variables internally)
    color: colorMap,
    backgroundColor: colorMap,

    // Typography utilities mapped to concrete CSS values
    fontSize: fontSizeValues,
    fontWeight: fontWeightValues,

    // Layout utilities
    width: sizeValues,
    height: sizeValues,
  },
});

// Static properties - only essential non-responsive utilities
const staticProperties = defineProperties({
  properties: {
    // Basic layout utilities
    display: ['none', 'block', 'flex', 'grid', 'inline', 'inline-block', 'inline-flex', 'inline-grid'],
    position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    textAlign: ['left', 'center', 'right', 'justify'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    flexWrap: ['wrap', 'nowrap', 'wrap-reverse'],
    justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    alignSelf: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    gridTemplateColumns: ['repeat(auto-fit, minmax(100px, 1fr))', 'repeat(auto-fit, minmax(150px, 1fr))', 'repeat(auto-fit, minmax(200px, 1fr))', 'repeat(auto-fit, minmax(250px, 1fr))', 'repeat(auto-fit, minmax(300px, 1fr))', '1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr'],
    alignContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],

    // Border utilities - mapped to concrete CSS values
    borderRadius: borderRadiusValues,
    borderWidth: borderWidthValues,
    borderStyle: ['solid', 'dashed', 'dotted', 'double'],
    borderColor: colorMap,
    borderBottomWidth: borderWidthValues,
    borderBottomColor: colorMap,

    // Shadow utilities - theme-aware (uses themeContract variables)
    boxShadow: {
      none: themeContract.shadows.boxShadow.none,
      xs: themeContract.shadows.boxShadow.xs,
      sm: themeContract.shadows.boxShadow.sm,
      md: themeContract.shadows.boxShadow.md,
      lg: themeContract.shadows.boxShadow.lg,
      xl: themeContract.shadows.boxShadow.xl,
      '2xl': themeContract.shadows.boxShadow['2xl'],
      inner: themeContract.shadows.boxShadow.inner,
      outline: themeContract.shadows.boxShadow.outline,
    },

    // Transition utilities
    transitionDuration: transitionDurationValues,
    transitionProperty: {
      all: 'all',
      colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      opacity: 'opacity',
      transform: 'transform',
      shadow: 'box-shadow, filter',
    },
    transitionTimingFunction: ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'],

    // Additional layout utilities
    minHeight: ['screen', 'full', 'auto'],
    maxWidth: ['80rem', '48rem', '32rem', '24rem', '20rem'],

    // Text utilities
    textDecoration: ['none', 'underline', 'line-through'],
    overflow: ['visible', 'hidden', 'scroll', 'auto'],
  fontFamily: fontFamilyValues,

    // Padding and margin token maps (combined with shorthands below)
    paddingTop: spacingPositive,
    paddingRight: spacingPositive,
    paddingBottom: spacingPositive,
    paddingLeft: spacingPositive,
    marginTop: spacingWithNegatives,
    marginRight: spacingWithNegatives,
    marginBottom: spacingWithNegatives,
    marginLeft: spacingWithNegatives,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    paddingX: ['paddingRight', 'paddingLeft'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
    marginX: ['marginRight', 'marginLeft'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

// Create the sprinkles instance
export const sprinkles = createSprinkles(responsiveConditions, staticProperties);

// Export the type for TypeScript
export type Sprinkles = Parameters<typeof sprinkles>[0];