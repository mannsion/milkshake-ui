export const fontSizeValues = {
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

export const fontWeightValues = {
  thin: '100',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

export const fontFamilyValues = {
  sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  serif: 'ui-serif, "Times New Roman", Times, serif',
  mono: 'ui-monospace, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
} as const;

export const lineHeightValues = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
} as const;

export const letterSpacingValues = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

export const textDecorationThicknessValues = {
  auto: 'auto',
  fromFont: 'from-font',
  thin: '1px',
  medium: '2px',
  thick: '3px',
} as const;

export const textUnderlineOffsetValues = {
  auto: 'auto',
  '0': '0',
  '1': '1px',
  '2': '2px',
  '3': '3px',
  '4': '4px',
  '6': '6px',
  '8': '8px',
} as const;

export const textDecorationStyleValues = ['solid', 'double', 'dotted', 'dashed', 'wavy'] as const;

export const fontOpticalSizingValues = ['auto', 'none'] as const;

export const hangingPunctuationValues = ['none', 'first', 'allow-end', 'force-end', 'last'] as const;

export const fontVariantLigaturesValues = [
  'normal',
  'none',
  'common-ligatures',
  'no-common-ligatures',
  'discretionary-ligatures',
  'no-discretionary-ligatures',
  'historical-ligatures',
  'no-historical-ligatures',
  'contextual',
  'no-contextual',
] as const;

export const fontVariantNumericValues = [
  'normal',
  'ordinal',
  'slashed-zero',
  'lining-nums',
  'oldstyle-nums',
  'proportional-nums',
  'tabular-nums',
  'diagonal-fractions',
  'stacked-fractions',
] as const;

export const textDecorationSkipInkValues = ['auto', 'none'] as const;

export const textTransformValues = ['none', 'capitalize', 'uppercase', 'lowercase'] as const;

export const fontStyleValues = ['normal', 'italic', 'oblique'] as const;

export const fontKerningValues = ['auto', 'normal', 'none'] as const;

export const fontVariantCapsValues = [
  'normal',
  'small-caps',
  'all-small-caps',
  'petite-caps',
  'all-petite-caps',
  'unicase',
  'titling-caps',
] as const;

export const fontVariantEastAsianValues = [
  'normal',
  'jis78',
  'jis83',
  'jis90',
  'jis04',
  'simplified',
  'traditional',
  'full-width',
  'proportional-width',
  'ruby',
] as const;

export const textJustifyValues = ['auto', 'inter-word', 'inter-character', 'none'] as const;

export const lineBreakValues = ['auto', 'loose', 'normal', 'strict', 'anywhere'] as const;

export const overflowWrapValues = ['normal', 'anywhere', 'break-word'] as const;

export const wordSpacingValues = {
  normal: 'normal',
  tight: '0.05em',
  wider: '0.1em',
  widest: '0.2em',
} as const;

export const tabSizeValues = ['2', '4', '8'] as const;

export const textUnderlinePositionValues = ['auto', 'from-font', 'under', 'left', 'right'] as const;
