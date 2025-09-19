import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { colorMap } from './color-mappings.css';
import { themeContract } from './theme-contract.css';
// Token maps (pure TS) imported from tokens/*
import { breakpointValues } from './tokens/breakpoints';
import { spacingPositive, spacingWithNegatives, sizeValues } from './tokens/spacing';
import { fontSizeValues, fontWeightValues, fontFamilyValues } from './tokens/typography';
import { borderRadiusValues, borderWidthValues } from './tokens/borders';
import { transitionDurationValues, transitionPropertyValues, transitionTimingFunctionValues } from './tokens/transitions';

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
    transitionProperty: transitionPropertyValues,
    transitionTimingFunction: transitionTimingFunctionValues,

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