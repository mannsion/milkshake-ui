import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { breakpoints } from './tokens/breakpoints';
import { space } from './tokens/space';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': `screen and (min-width: ${breakpoints.tablet}px)` },
    desktop: { '@media': `screen and (min-width: ${breakpoints.desktop}px)` },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    flexWrap: ['wrap', 'nowrap'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'],
    alignItems: ['flex-start', 'center', 'flex-end', 'stretch'],
    gap: space,
    padding: space,
    paddingLeft: space,
    paddingRight: space,
    paddingTop: space,
    paddingBottom: space,
    margin: space,
    marginLeft: { ...space, auto: 'auto' },
    marginRight: { ...space, auto: 'auto' },
    marginTop: space,
    marginBottom: space,
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexBasis: {
      '1/12': '8.333%',
      '2/12': '16.667%',
      '3/12': '25%',
      '4/12': '33.333%',
      '5/12': '41.667%',
      '6/12': '50%',
      '7/12': '58.333%',
      '8/12': '66.667%',
      '9/12': '75%',
      '10/12': '83.333%',
      '11/12': '91.667%',
      full: '100%',
    },
    maxWidth: {
      mobile: '100%',
      tablet: '768px',
      desktop: '1024px',
    },
  },
});

export const sprinkles = createSprinkles(responsiveProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
