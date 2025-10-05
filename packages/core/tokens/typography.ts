import { themeContract } from '../theme-contract.css';

export const fontSizeValues = themeContract.typography.fontSize;

export const fontWeightValues = themeContract.typography.fontWeight;

export const fontFamilyValues = themeContract.typography.fontFamily;

export const lineHeightValues = themeContract.typography.lineHeight;

export const letterSpacingValues = themeContract.typography.letterSpacing;

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
