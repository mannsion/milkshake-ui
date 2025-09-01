// Include global reset + font rendering optimizations as a side-effect so
// any app importing sprinkles also gets html/body margin:0 in prod builds.
import './font-rendering.css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { colorMap } from './color-mappings.css';
import { themeContract } from './theme-contract.css';
// Token maps (pure TS) imported from tokens/*
import { breakpointValues } from './tokens/breakpoints';
import { spacingPositive, spacingWithNegatives, sizeValues } from './tokens/spacing';
import {
	fontSizeValues,
	fontWeightValues,
	fontFamilyValues,
	lineHeightValues,
	letterSpacingValues,
	textDecorationThicknessValues,
	textUnderlineOffsetValues,
	textDecorationStyleValues,
	fontOpticalSizingValues,
	hangingPunctuationValues,
	fontVariantLigaturesValues,
	fontVariantNumericValues,
	textDecorationSkipInkValues,
	textTransformValues,
	fontStyleValues,
	fontKerningValues,
	fontVariantCapsValues,
	fontVariantEastAsianValues,
	textJustifyValues,
	lineBreakValues,
	overflowWrapValues,
	wordSpacingValues,
	tabSizeValues,
	textUnderlinePositionValues
} from './tokens/typography';
import { borderRadiusValues, borderWidthValues } from './tokens/borders';
import {
	transitionDurationValues,
	transitionPropertyValues,
	transitionTimingFunctionValues
} from './tokens/transitions';
import { aspectRatioValues } from './tokens/aspect-ratio';
import { objectFitValues, objectPositionValues } from './tokens/object-fit';
import {
	overscrollBehaviorValues,
	scrollSnapTypeValues,
	scrollSnapAlignValues,
	scrollSnapStopValues,
	scrollBehaviorValues
} from './tokens/scroll';
import { filterValues, mixBlendModeValues, backgroundBlendModeValues } from './tokens/filters';
import {
	cursorValues,
	pointerEventsValues,
	userSelectValues,
	touchActionValues
} from './tokens/interaction';
import { flexValues, flexGrowValues, flexShrinkValues, orderValues } from './tokens/flex';
import {
	scaleValues,
	rotateValues,
	skewValues,
	translateAxisValues,
	transformOriginValues
} from './tokens/transforms';
import {
	gridTemplateColumnsPresets,
	gridTemplateColumnsRepeat,
	gridTemplateRowsRepeat,
	gridAutoFlowValues,
	gridAutoTrackValues,
	gridPlacementValues,
	gridLineStartValues,
	gridLineEndValues
} from './tokens/grid';

const boxShadowValues = {
	none: themeContract.shadows.boxShadow.none,
	xs: themeContract.shadows.boxShadow.xs,
	sm: themeContract.shadows.boxShadow.sm,
	md: themeContract.shadows.boxShadow.md,
	lg: themeContract.shadows.boxShadow.lg,
	xl: themeContract.shadows.boxShadow.xl,
	'2xl': themeContract.shadows.boxShadow['2xl'],
	inner: themeContract.shadows.boxShadow.inner,
	outline: themeContract.shadows.boxShadow.outline
} as const;

const backdropFilterValues = {
	none: 'none',
	blurSm: `blur(${themeContract.backdropBlur.sm})`,
	blurMd: `blur(${themeContract.backdropBlur.md})`,
	blurLg: `blur(${themeContract.backdropBlur.lg})`,
	blurBright: `blur(${themeContract.backdropBlur.sm}) brightness(1.1)`,
	blurDim: `blur(${themeContract.backdropBlur.md}) brightness(0.85)`,
	contrast: 'contrast(1.2)',
	saturate: 'saturate(1.35)'
};

// Simple responsive conditions - include spacing, typography, layout, and grid essentials
const responsiveConditions = defineProperties({
	conditions: {
		mobile: {},
		sm: { '@media': `screen and (min-width: ${breakpointValues.sm})` },
		md: { '@media': `screen and (min-width: ${breakpointValues.md})` },
		lg: { '@media': `screen and (min-width: ${breakpointValues.lg})` },
		xl: { '@media': `screen and (min-width: ${breakpointValues.xl})` },
		'2xl': { '@media': `screen and (min-width: ${breakpointValues['2xl']})` },
		hover: { selector: '&:hover' },
		focus: { selector: '&:focus' },
		focusVisible: { selector: '&:focus-visible' },
		active: { selector: '&:active' }
	},
	defaultCondition: 'mobile',
	properties: {
		// Spacing utilities (responsive)
		paddingTop: spacingPositive,
		paddingRight: spacingPositive,
		paddingBottom: spacingPositive,
		paddingLeft: spacingPositive,
		marginTop: spacingWithNegatives,
		marginRight: spacingWithNegatives,
		marginBottom: spacingWithNegatives,
		marginLeft: spacingWithNegatives,
		gap: spacingPositive,
		columnGap: spacingPositive,
		rowGap: spacingPositive,

		// Scroll positioning utilities
		scrollMarginTop: spacingWithNegatives,
		scrollMarginRight: spacingWithNegatives,
		scrollMarginBottom: spacingWithNegatives,
		scrollMarginLeft: spacingWithNegatives,
		scrollMarginInline: spacingWithNegatives,
		scrollMarginInlineStart: spacingWithNegatives,
		scrollMarginInlineEnd: spacingWithNegatives,
		scrollMarginBlock: spacingWithNegatives,
		scrollMarginBlockStart: spacingWithNegatives,
		scrollMarginBlockEnd: spacingWithNegatives,
		scrollPaddingTop: spacingPositive,
		scrollPaddingRight: spacingPositive,
		scrollPaddingBottom: spacingPositive,
		scrollPaddingLeft: spacingPositive,
		scrollPaddingInline: spacingPositive,
		scrollPaddingInlineStart: spacingPositive,
		scrollPaddingInlineEnd: spacingPositive,
		scrollPaddingBlock: spacingPositive,
		scrollPaddingBlockStart: spacingPositive,
		scrollPaddingBlockEnd: spacingPositive,

		// Color utilities - using semantic names (converted to CSS variables internally)
		color: colorMap,
		backgroundColor: colorMap,
		borderColor: colorMap,
		borderBottomColor: colorMap,
		outlineColor: themeContract.focusRing.color,
		boxShadow: boxShadowValues,
		filter: filterValues,
		backdropFilter: backdropFilterValues,

		// Typography utilities mapped to concrete CSS values
		fontSize: fontSizeValues,
		fontWeight: fontWeightValues,
		lineHeight: lineHeightValues,
		letterSpacing: letterSpacingValues,
		wordSpacing: wordSpacingValues,

		// Layout utilities
		width: sizeValues,
		height: sizeValues,
		aspectRatio: aspectRatioValues,

		// Logical spacing utilities
		marginInline: spacingWithNegatives,
		marginInlineStart: spacingWithNegatives,
		marginInlineEnd: spacingWithNegatives,
		marginBlock: spacingWithNegatives,
		marginBlockStart: spacingWithNegatives,
		marginBlockEnd: spacingWithNegatives,
		paddingInline: spacingPositive,
		paddingInlineStart: spacingPositive,
		paddingInlineEnd: spacingPositive,
		paddingBlock: spacingPositive,
		paddingBlockStart: spacingPositive,
		paddingBlockEnd: spacingPositive,
		insetInline: spacingWithNegatives,
		insetInlineStart: spacingWithNegatives,
		insetInlineEnd: spacingWithNegatives,
		insetBlock: spacingWithNegatives,
		insetBlockStart: spacingWithNegatives,
		insetBlockEnd: spacingWithNegatives,
		top: spacingWithNegatives,
		right: spacingWithNegatives,
		bottom: spacingWithNegatives,
		left: spacingWithNegatives,

		// Grid responsive utilities
		gridTemplateColumns: {
			...gridTemplateColumnsPresets,
			...gridTemplateColumnsRepeat
		},
		gridTemplateRows: gridTemplateRowsRepeat,
		gridAutoFlow: [...gridAutoFlowValues],
		gridAutoRows: gridAutoTrackValues,
		gridAutoColumns: gridAutoTrackValues,
		justifyItems: [...gridPlacementValues.justifyItems],
		alignItems: [...gridPlacementValues.alignItems],
		justifyContent: [...gridPlacementValues.justifyContent],
		alignContent: [...gridPlacementValues.alignContent],
		placeItems: [...gridPlacementValues.placeItems],
		placeContent: [...gridPlacementValues.placeContent],
		placeSelf: ['auto', 'start', 'end', 'center', 'stretch'],
		justifySelf: ['auto', 'start', 'end', 'center', 'stretch'],
		alignSelf: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
		gridColumnStart: gridLineStartValues,
		gridColumnEnd: gridLineEndValues,
		gridRowStart: gridLineStartValues,
		gridRowEnd: gridLineEndValues,

		// Flex utilities (responsive)
		flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
		flexWrap: ['wrap', 'nowrap', 'wrap-reverse'],
		flexGrow: flexGrowValues,
		flexShrink: flexShrinkValues,
		flex: flexValues,
		flexBasis: sizeValues,
		order: orderValues,

		// Transform utilities
		scale: scaleValues,
		scaleX: scaleValues,
		scaleY: scaleValues,
		rotate: rotateValues,
		skewX: skewValues,
		skewY: skewValues,
		translateX: translateAxisValues,
		translateY: translateAxisValues,
		transformOrigin: transformOriginValues
	},
	shorthands: {
		padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
		paddingX: ['paddingRight', 'paddingLeft'],
		paddingY: ['paddingTop', 'paddingBottom'],
		margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
		marginX: ['marginRight', 'marginLeft'],
		marginY: ['marginTop', 'marginBottom'],
		scrollMargin: [
			'scrollMarginTop',
			'scrollMarginRight',
			'scrollMarginBottom',
			'scrollMarginLeft'
		],
		scrollMarginX: ['scrollMarginRight', 'scrollMarginLeft'],
		scrollMarginY: ['scrollMarginTop', 'scrollMarginBottom'],
		scrollPadding: [
			'scrollPaddingTop',
			'scrollPaddingRight',
			'scrollPaddingBottom',
			'scrollPaddingLeft'
		],
		scrollPaddingX: ['scrollPaddingRight', 'scrollPaddingLeft'],
		scrollPaddingY: ['scrollPaddingTop', 'scrollPaddingBottom'],
		inset: ['top', 'right', 'bottom', 'left'],
		insetX: ['left', 'right'],
		insetY: ['top', 'bottom']
	}
});

// Static properties - only essential non-responsive utilities
const staticProperties = defineProperties({
	properties: {
		// Basic layout utilities
		display: [
			'none',
			'block',
			'flex',
			'grid',
			'inline',
			'inline-block',
			'inline-flex',
			'inline-grid',
			'flow-root',
			'contents'
		],
		position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
		textAlign: ['left', 'center', 'right', 'justify'],
		whiteSpace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'],
		wordBreak: ['normal', 'break-word', 'break-all', 'keep-all'],
		overflowWrap: overflowWrapValues,
		hyphens: ['none', 'manual', 'auto'],
		textOverflow: ['clip', 'ellipsis'],
		textWrap: ['wrap', 'nowrap', 'balance', 'pretty'],
		textJustify: textJustifyValues,
		lineBreak: lineBreakValues,

		// Border utilities - mapped to concrete CSS values
		borderRadius: borderRadiusValues,
		borderWidth: borderWidthValues,
		borderStyle: ['solid', 'dashed', 'dotted', 'double'],
		borderBottomWidth: borderWidthValues,

		// Transition utilities
		transitionDuration: transitionDurationValues,
		transitionProperty: transitionPropertyValues,
		transitionTimingFunction: transitionTimingFunctionValues,

		// Additional layout utilities
		minHeight: ['screen', 'full', 'auto'],
		maxWidth: ['80rem', '48rem', '32rem', '24rem', '20rem'],
		objectFit: objectFitValues,
		objectPosition: objectPositionValues,
		overscrollBehavior: overscrollBehaviorValues,
		scrollBehavior: scrollBehaviorValues,
		scrollSnapType: scrollSnapTypeValues,
		scrollSnapAlign: scrollSnapAlignValues,
		scrollSnapStop: scrollSnapStopValues,

		// Text utilities
		textDecoration: ['none', 'underline', 'line-through', 'overline'],
		textDecorationStyle: textDecorationStyleValues,
		textDecorationThickness: textDecorationThicknessValues,
		textUnderlineOffset: textUnderlineOffsetValues,
		textUnderlinePosition: textUnderlinePositionValues,
		textDecorationColor: colorMap,
		textDecorationSkipInk: textDecorationSkipInkValues,
		fontOpticalSizing: fontOpticalSizingValues,
		hangingPunctuation: hangingPunctuationValues,
		initialLetter: ['2', '3', '4', '5'],
		fontVariantLigatures: fontVariantLigaturesValues,
		fontVariantNumeric: fontVariantNumericValues,
		fontVariantCaps: fontVariantCapsValues,
		fontVariantEastAsian: fontVariantEastAsianValues,
		fontStyle: fontStyleValues,
		textTransform: textTransformValues,
		fontKerning: fontKerningValues,
		tabSize: tabSizeValues,
		overflow: ['visible', 'hidden', 'scroll', 'auto'],
		fontFamily: fontFamilyValues,
		accentColor: colorMap,
		caretColor: colorMap,

		// Visual effects
		mixBlendMode: mixBlendModeValues,
		backgroundBlendMode: backgroundBlendModeValues,

		// Focus ring + outline utilities
		outlineWidth: themeContract.focusRing.width,
		outlineOffset: themeContract.focusRing.offset,
		outlineStyle: ['solid', 'dashed', 'dotted', 'double'],

		// Opacity utilities (state layer tokens)
		opacity: {
			hover: themeContract.semantic.stateLayerOpacity.hover,
			focus: themeContract.semantic.stateLayerOpacity.focus,
			pressed: themeContract.semantic.stateLayerOpacity.pressed,
			drag: themeContract.semantic.stateLayerOpacity.drag,
			disabled: themeContract.semantic.stateLayerOpacity.disabled
		},

		// Layering utilities
		zIndex: {
			base: themeContract.layers.base,
			dropdown: themeContract.layers.dropdown,
			sticky: themeContract.layers.sticky,
			nav: themeContract.layers.nav,
			overlay: themeContract.layers.overlay,
			modal: themeContract.layers.modal,
			popover: themeContract.layers.popover,
			toast: themeContract.layers.toast,
			tooltip: themeContract.layers.tooltip
		},

		// Interaction utilities
		cursor: cursorValues,
		pointerEvents: pointerEventsValues,
		userSelect: userSelectValues,
		touchAction: touchActionValues

		// Spacing token maps now live in responsiveProperties for breakpoint support
	}
	// no spacing shorthands here; they live in responsiveProperties
});

// Create the sprinkles instance
export const sprinkles = createSprinkles(responsiveConditions, staticProperties);

// Export the type for TypeScript
export type Sprinkles = Parameters<typeof sprinkles>[0];
