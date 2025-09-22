import { createGlobalTheme } from '@vanilla-extract/css';

export const breakpoints = createGlobalTheme(':root', {
  // Breakpoint values
  mobile: '0px',
  sm: '640px',   // Small tablets, large phones
  md: '768px',   // Tablets, small laptops
  lg: '1024px',  // Laptops, small desktops
  xl: '1280px',  // Desktops
  '2xl': '1536px', // Large desktops, ultrawide
});

// Media queries for responsive design
export const mediaQueries = {
  sm: `screen and (min-width: ${breakpoints.sm})`,
  md: `screen and (min-width: ${breakpoints.md})`,
  lg: `screen and (min-width: ${breakpoints.lg})`,
  xl: `screen and (min-width: ${breakpoints.xl})`,
  '2xl': `screen and (min-width: ${breakpoints['2xl']})`,

  // Max-width queries (mobile-first approach)
  'max-sm': `screen and (max-width: 639px)`,
  'max-md': `screen and (max-width: 767px)`,
  'max-lg': `screen and (max-width: 1023px)`,
  'max-xl': `screen and (max-width: 1279px)`,

  // Range queries
  'sm-md': `screen and (min-width: ${breakpoints.sm}) and (max-width: 767px)`,
  'md-lg': `screen and (min-width: ${breakpoints.md}) and (max-width: 1023px)`,
  'lg-xl': `screen and (min-width: ${breakpoints.lg}) and (max-width: 1279px)`,
};