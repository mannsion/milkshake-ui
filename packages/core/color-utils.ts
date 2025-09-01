// Color utilities - types and functions for semantic color mapping
import { colorMap } from './color-mappings.css';

// Type-safe color keys
export type ColorKey = keyof typeof colorMap;

// Function to get CSS variable from semantic name
export const getColorValue = (colorKey: ColorKey): string => {
  return colorMap[colorKey];
};

type Rgba = { r: number; g: number; b: number; a: number };

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);

const hexToRgba = (hex: string): Rgba | null => {
  const normalized = hex.replace('#', '').trim();
  if (normalized.length === 3) {
    const r = parseInt(normalized[0] + normalized[0], 16);
    const g = parseInt(normalized[1] + normalized[1], 16);
    const b = parseInt(normalized[2] + normalized[2], 16);
    return { r, g, b, a: 1 };
  }

  if (normalized.length === 6) {
    const r = parseInt(normalized.slice(0, 2), 16);
    const g = parseInt(normalized.slice(2, 4), 16);
    const b = parseInt(normalized.slice(4, 6), 16);
    return { r, g, b, a: 1 };
  }

  if (normalized.length === 8) {
    const r = parseInt(normalized.slice(0, 2), 16);
    const g = parseInt(normalized.slice(2, 4), 16);
    const b = parseInt(normalized.slice(4, 6), 16);
    const a = parseInt(normalized.slice(6, 8), 16) / 255;
    return { r, g, b, a };
  }

  return null;
};

const rgbStringToRgba = (value: string): Rgba | null => {
  const match = value
    .replace(/\s+/g, '')
    .match(/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(?:,(\d*\.?\d+))?\)$/i);

  if (!match) return null;

  const r = clamp(Number(match[1]) / 255) * 255;
  const g = clamp(Number(match[2]) / 255) * 255;
  const b = clamp(Number(match[3]) / 255) * 255;
  const a = match[4] !== undefined ? clamp(Number(match[4])) : 1;

  return { r, g, b, a };
};

const normalize255 = (value: number) => clamp(value / 255);

const srgbToLinear = (value: number): number => {
  if (value <= 0.04045) {
    return value / 12.92;
  }
  return Math.pow((value + 0.055) / 1.055, 2.4);
};

const relativeLuminance = ({ r, g, b }: Rgba): number => {
  const rs = srgbToLinear(normalize255(r));
  const gs = srgbToLinear(normalize255(g));
  const bs = srgbToLinear(normalize255(b));
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

const compositeOver = (foreground: Rgba, background: Rgba): Rgba => {
  if (foreground.a >= 0.999) {
    return { r: foreground.r, g: foreground.g, b: foreground.b, a: 1 };
  }

  const alpha = foreground.a + background.a * (1 - foreground.a);
  if (alpha === 0) {
    return { r: 0, g: 0, b: 0, a: 0 };
  }

  const r = (foreground.r * foreground.a + background.r * background.a * (1 - foreground.a)) / alpha;
  const g = (foreground.g * foreground.a + background.g * background.a * (1 - foreground.a)) / alpha;
  const b = (foreground.b * foreground.a + background.b * background.a * (1 - foreground.a)) / alpha;

  return { r, g, b, a: 1 };
};

const parseColor = (input: string): Rgba => {
  const value = input.trim();
  if (value.startsWith('var(')) {
    throw new Error(`Cannot evaluate CSS variable "${value}" without resolved color value.`);
  }

  return (
    hexToRgba(value) ||
    rgbStringToRgba(value) ||
    (() => {
      throw new Error(`Unsupported color format: "${value}". Provide hex or rgb/rgba strings.`);
    })()
  );
};

const solidify = (color: Rgba, fallback: Rgba): Rgba => {
  if (color.a >= 0.999) return color;
  return compositeOver(color, fallback);
};

const WHITE: Rgba = { r: 255, g: 255, b: 255, a: 1 };

export type ContrastInput = {
  foreground: string;
  background: string;
  minimum?: number;
  description?: string;
};

export const getContrastRatio = (foreground: string, background: string): number => {
  const bgColor = parseColor(background);
  const fgColor = parseColor(foreground);

  const solidBackground = solidify(bgColor, WHITE);
  const composedForeground = compositeOver(fgColor, solidBackground);

  const l1 = relativeLuminance(composedForeground);
  const l2 = relativeLuminance(solidBackground);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return Number(((lighter + 0.05) / (darker + 0.05)).toFixed(2));
};

export const meetsContrastRatio = (foreground: string, background: string, minimum = 4.5): boolean => {
  return getContrastRatio(foreground, background) >= minimum;
};

export const assertContrast = ({ foreground, background, minimum = 4.5, description }: ContrastInput): number => {
  const ratio = getContrastRatio(foreground, background);
  if (ratio < minimum) {
    const context = description ? ` (${description})` : '';
    throw new Error(`Contrast ratio ${ratio}:1 is below the required ${minimum}:1${context}.`);
  }
  return ratio;
};

export const reportContrast = (checks: ContrastInput[]): { description?: string; ratio: number; passes: boolean }[] => {
  return checks.map((check) => {
    const ratio = getContrastRatio(check.foreground, check.background);
    return {
      description: check.description,
      ratio,
      passes: ratio >= (check.minimum ?? 4.5),
    };
  });
};