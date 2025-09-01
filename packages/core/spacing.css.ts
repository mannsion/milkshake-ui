import { createGlobalTheme } from '@vanilla-extract/css';
import { spacingWithNegative } from './tokens/spacing-scale';

export const spacing = createGlobalTheme(':root', spacingWithNegative);