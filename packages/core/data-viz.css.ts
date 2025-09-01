import { themeContract } from './theme-contract.css';

// Data visualization tokens derived from the active theme contract.
// Consumers can reference these variables directly in styles or sprinkles.
export const dataViz = themeContract.dataViz;

export type DataVizPalette = typeof dataViz;
