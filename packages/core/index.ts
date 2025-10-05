// Export all design tokens
export { colors } from './colors.css';
export { spacing } from './spacing.css';
export { typography } from './typography.css';
export { borders } from './borders.css';
export { shadows } from './shadows.css';
export { animations } from './animations.css';
export { breakpoints } from './breakpoints.css';
export { containerBreakpointValues, cqMin, cqMax, type ContainerBreakpointKey } from './tokens/container-queries';
export { dataViz, type DataVizPalette } from './data-viz.css';
export { dataVizPalettes, type DataVizPaletteName, type DataVizPaletteValues } from './tokens/data-viz';
export {
	cursorValues,
	pointerEventsValues,
	userSelectValues,
	touchActionValues,
	type CursorKey,
	type PointerEventsKey,
	type UserSelectKey,
	type TouchActionKey,
} from './tokens/interaction';
export {
	flexValues,
	flexGrowValues,
	flexShrinkValues,
	orderValues,
	type FlexKey,
	type FlexGrowKey,
	type FlexShrinkKey,
	type OrderKey,
} from './tokens/flex';
export {
	filterValues,
	mixBlendModeValues,
	backgroundBlendModeValues,
	type FilterKey,
	type MixBlendModeKey,
	type BackgroundBlendModeKey,
} from './tokens/filters';
export {
	gridTemplateColumnsPresets,
	gridTemplateColumnsRepeat,
	gridTemplateRowsRepeat,
	gridAutoFlowValues,
	gridAutoTrackValues,
	gridPlacementValues,
	gridLineStartValues,
	gridLineEndValues,
	gridColumnSpanValues,
	gridRowSpanValues,
	type GridTemplateColumnsPresetKey,
	type GridTemplateColumnsRepeatKey,
	type GridTemplateColumnsKey,
	type GridTemplateRowsRepeatKey,
	type GridAutoFlowValue,
	type GridAutoTrackKey,
	type GridPlacementCategory,
	type GridPlacementValue,
	type GridLineKey,
	type GridColumnSpanKey,
	type GridRowSpanKey,
	type GridSpanKey,
} from './tokens/grid';

// Export theme system
export { themeContract } from './theme-contract.css';
export type { ThemeContract } from './theme-contract.css';

// Export color mappings for sprinkles
export { colorMappings, colorMap, commonColors } from './color-mappings.css';
export {
	getColorValue,
	getContrastRatio,
	meetsContrastRatio,
	assertContrast,
	reportContrast,
	type ColorKey,
} from './color-utils';
export {
	scaleValues,
	rotateValues,
	skewValues,
	translateAxisValues,
	transformOriginValues,
	type ScaleKey,
	type RotateKey,
	type SkewKey,
	type TranslateAxisKey,
	type TransformOriginKey,
} from './tokens/transforms';
export { skipLink, visuallyHidden } from './accessibility.css';
export {
	getDocumentDirection,
	setDocumentDirection,
	toggleDocumentDirection,
	withDocumentDirection,
	type DocumentDirection,
} from './direction';

// Export sprinkles utility
export { sprinkles } from './sprinkles.css';
export type { Sprinkles } from './sprinkles.css';
export {
	partitionSprinkleProps,
	isSprinklesProp,
	sprinklesPropertySet,
	getSprinklesClassName,
	type SprinklesProps,
} from './bindings/sprinkles';

// Export component styles (pure components only)
export * from './components.css';

// Export typography utilities (truncate, line-clamp, prose)
export * from './typography-utilities.css';

// Export layout and grid utilities
export * from './layout.css';
export * from './overlays.css';
export * from './grid.css';
export * from './sections.css';

// Ensure global font rendering + UA margin reset CSS is included for side-effects
// Note: This file only calls globalStyle and doesn't export symbols.
// Using a side-effect import prevents production tree-shaking from dropping it.
import './font-rendering.css';
import './scrollbars.css';

