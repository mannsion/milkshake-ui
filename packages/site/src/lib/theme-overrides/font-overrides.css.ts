import { createTheme } from '@vanilla-extract/css';
import { themeContract } from '@milkshake-ui/core';

const interSansStack = '"Inter var", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif';
const sourceSerifStack = '"Source Serif Pro", ui-serif, "Times New Roman", Times, serif';
const monoStack = 'ui-monospace, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace';
const displayStack = '"Inter var", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif';

export const fontOverrides = {
  sans: createTheme(themeContract.typography.fontFamily, {
    sans: interSansStack,
    serif: sourceSerifStack,
    mono: monoStack,
    display: displayStack,
  }),
  serif: createTheme(themeContract.typography.fontFamily, {
    sans: sourceSerifStack,
    serif: sourceSerifStack,
    mono: monoStack,
    display: displayStack,
  }),
  mono: createTheme(themeContract.typography.fontFamily, {
    sans: monoStack,
    serif: sourceSerifStack,
    mono: monoStack,
    display: displayStack,
  }),
  display: createTheme(themeContract.typography.fontFamily, {
    sans: displayStack,
    serif: sourceSerifStack,
    mono: monoStack,
    display: displayStack,
  }),
} as const;

export type FontVariant = keyof typeof fontOverrides;

export const fontVariantOrder: FontVariant[] = ['sans', 'serif', 'mono', 'display'];

export const fontVariantLabels: Record<FontVariant, string> = {
  sans: 'Sans (Inter)',
  serif: 'Serif (Source Serif Pro)',
  mono: 'Mono (Code)',
  display: 'Display (Inter Display)',
};
