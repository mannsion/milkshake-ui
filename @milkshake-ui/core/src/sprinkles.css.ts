import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { colorMap } from './color-mappings.css';

// Breakpoint values for sprinkles (actual pixel values, not CSS variables)
const breakpointValues = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

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
    paddingTop: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96', '112', '128'],
    paddingBottom: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96', '112', '128'],
    paddingLeft: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96', '112', '128'],
    paddingRight: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96', '112', '128'],
    marginTop: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96', '112', '128', '-1', '-2', '-3', '-4', '-6', '-8', '-12', '-16', '-20', '-24', '-32'],
    marginBottom: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96', '112', '128', '-1', '-2', '-3', '-4', '-6', '-8', '-12', '-16', '-20', '-24', '-32'],
    marginLeft: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96', '112', '128', '-1', '-2', '-3', '-4', '-6', '-8', '-12', '-16', '-20', '-24', '-32'],
    marginRight: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96', '112', '128', '-1', '-2', '-3', '-4', '-6', '-8', '-12', '-16', '-20', '-24', '-32'],
    gap: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96', '112', '128'],

    // Color utilities - using semantic names (converted to CSS variables internally)
    color: colorMap,
    backgroundColor: colorMap,

    // Typography utilities only - using simple values
    fontSize: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
    fontWeight: ['thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],

    // Layout utilities
    width: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96', '112', '128', 'full', 'auto'],
    height: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96', '112', '128', 'full', 'auto'],
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

    // Border utilities - using CSS variables from theme contract
    borderRadius: ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
    borderWidth: ['none', 'thin', 'medium', 'thick', 'heavy'],
    borderStyle: ['solid', 'dashed', 'dotted', 'double'],
    borderColor: colorMap,
    borderBottomWidth: ['none', 'thin', 'medium', 'thick', 'heavy'],
    borderBottomColor: colorMap,

    // Shadow utilities - using simple values
    boxShadow: ['none', 'sm', 'md', 'lg', 'xl', 'inner', 'outline'],

    // Transition utilities
    transitionDuration: ['fastest', 'fast', 'normal', 'slow', 'slowest'],
    transitionProperty: ['all', 'colors', 'opacity', 'transform', 'shadow'],
    transitionTimingFunction: ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'],

    // Additional layout utilities
    minHeight: ['screen', 'full', 'auto'],
    maxWidth: ['80rem', '48rem', '32rem', '24rem', '20rem'],

    // Text utilities
    textDecoration: ['none', 'underline', 'line-through'],
    overflow: ['visible', 'hidden', 'scroll', 'auto'],
    fontFamily: ['sans', 'serif', 'mono'],

    // Padding and margin shorthands
    padding: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96', '112', '128'],
    paddingX: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96', '112', '128'],
    paddingY: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96', '112', '128'],
    margin: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96', '112', '128', '-1', '-2', '-3', '-4', '-6', '-8', '-12', '-16', '-20', '-24', '-32'],
    marginX: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96', '112', '128', '-1', '-2', '-3', '-4', '-6', '-8', '-12', '-16', '-20', '-24', '-32'],
    marginY: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64', '72', '80', '96', '112', '128', '-1', '-2', '-3', '-4', '-6', '-8', '-12', '-16', '-20', '-24', '-32'],
  },
});

// Create the sprinkles instance
export const sprinkles = createSprinkles(responsiveConditions, staticProperties);

// Export the type for TypeScript
export type Sprinkles = Parameters<typeof sprinkles>[0];