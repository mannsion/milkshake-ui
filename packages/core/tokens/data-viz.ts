export const dataVizPalettes = {
  light: {
    categorical: {
      1: '#FF5C88',
      2: '#F97316',
      3: '#22C55E',
      4: '#3B82F6',
      5: '#9333EA',
      6: '#14B8A6',
      7: '#FACC15',
      8: '#EC4899',
    },
    sequential: {
      1: '#FFF9F3',
      2: '#FCEBD9',
      3: '#EEDCC8',
      4: '#CDBBA7',
      5: '#7E6F60',
    },
    divergent: {
      negative: '#DC2626',
      neutral: '#FFFEFC',
      positive: '#16A34A',
    },
  },
  dark: {
    categorical: {
      1: '#FF7FA3',
      2: '#F59E0B',
      3: '#4ADE80',
      4: '#57AEFF',
      5: '#A855F7',
      6: '#2DD4BF',
      7: '#FACC15',
      8: '#F97316',
    },
    sequential: {
      1: '#17110E',
      2: '#211914',
      3: '#3A2E26',
      4: '#5A473C',
      5: '#A28371',
    },
    divergent: {
      negative: '#F87171',
      neutral: '#2B221C',
      positive: '#4ADE80',
    },
  },
  highContrastLight: {
    categorical: {
      1: '#000000',
      2: '#FF3B66',
      3: '#0284C7',
      4: '#10B981',
      5: '#F59E0B',
      6: '#7C3AED',
      7: '#0F172A',
      8: '#DC2626',
    },
    sequential: {
      1: '#FFFFFF',
      2: '#F1E0C6',
      3: '#DAB78E',
      4: '#A77D4C',
      5: '#5C4527',
    },
    divergent: {
      negative: '#B91C1C',
      neutral: '#FFFFFF',
      positive: '#047857',
    },
  },
  highContrastDark: {
    categorical: {
      1: '#FFFFFF',
      2: '#FF6486',
      3: '#57AEFF',
      4: '#22C55E',
      5: '#FBBF24',
      6: '#C084FC',
      7: '#38BDF8',
      8: '#F97316',
    },
    sequential: {
      1: '#0A0706',
      2: '#120E0C',
      3: '#18120F',
      4: '#211914',
      5: '#5A473C',
    },
    divergent: {
      negative: '#F87171',
      neutral: '#211914',
      positive: '#4ADE80',
    },
  },
} as const;

export type DataVizPaletteName = keyof typeof dataVizPalettes;
export type DataVizPaletteValues = typeof dataVizPalettes[DataVizPaletteName];
