// Color utilities - types and functions for semantic color mapping
import { colorMap } from './color-mappings.css';

// Type-safe color keys
export type ColorKey = keyof typeof colorMap;

// Function to get CSS variable from semantic name
export const getColorValue = (colorKey: ColorKey): string => {
  return colorMap[colorKey];
};