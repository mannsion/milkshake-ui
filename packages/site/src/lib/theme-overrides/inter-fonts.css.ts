import { createTheme } from '@vanilla-extract/css';
import { themeContract } from '@milkshake-ui/core';

// Override typography font families so the demo site showcases Inter.
export const interFontTheme = createTheme(themeContract.typography.fontFamily, {
  sans: '"Inter var", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  serif: 'ui-serif, "Times New Roman", Times, serif',
  mono: 'ui-monospace, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
  display: '"Inter var", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
});
