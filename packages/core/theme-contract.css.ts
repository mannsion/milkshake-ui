import { spacingWithNegative } from './tokens/spacing-scale';

const createNullEntries = <T extends Record<string, unknown>>(tokens: T) =>
	Object.fromEntries(Object.keys(tokens).map((key) => [key, null])) as {
		[K in keyof T]: null;
	};

const spacingContract = createNullEntries(spacingWithNegative);

const formatSegment = (segment: string | number) => {
	const stringified = String(segment);
	const isNegative = stringified.startsWith('-');
	const cleaned = stringified
		.replace(/^-/, '')
		.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
		.replace(/[^a-zA-Z0-9]+/g, '-')
		.replace(/-{2,}/g, '-')
		.replace(/^-+|-+$/g, '')
		.toLowerCase() || 'default';
	return isNegative ? `neg-${cleaned}` : cleaned;
};

const createVarName = (path: Array<string | number>) =>
	`--milkshake-${path.map(formatSegment).join('-')}`;

const buildVarNameMap = (tokens: unknown, path: Array<string | number> = []): any => {
	if (tokens && typeof tokens === 'object') {
		return Object.fromEntries(
			Object.entries(tokens as Record<string, unknown>).map(([key, value]) => [
				key,
				buildVarNameMap(value, [...path, key]),
			]),
		);
	}
	return createVarName(path);
};

const toVarReferences = (varNames: unknown): any => {
	if (varNames && typeof varNames === 'object') {
		return Object.fromEntries(
			Object.entries(varNames as Record<string, unknown>).map(([key, value]) => [
				key,
				toVarReferences(value),
			]),
		);
	}
	return `var(${varNames as string})`;
};

// Theme contract defines the structure of all design tokens.
// This ensures type safety and consistency across themes.
const themeContractDefinition = {
	// Color palette
	colors: {
		primary: {
			50: null,
			100: null,
			200: null,
			300: null,
			400: null,
			500: null,
			600: null,
			700: null,
			800: null,
			900: null,
		},
		secondary: {
			50: null,
			100: null,
			200: null,
			300: null,
			400: null,
			500: null,
			600: null,
			700: null,
			800: null,
			900: null,
		},
		neutral: {
			50: null,
			100: null,
			200: null,
			300: null,
			400: null,
			500: null,
			600: null,
			700: null,
			800: null,
			900: null,
		},
		success: {
			50: null,
			100: null,
			200: null,
			300: null,
			400: null,
			500: null,
			600: null,
			700: null,
			800: null,
			900: null,
		},
		error: {
			50: null,
			100: null,
			200: null,
			300: null,
			400: null,
			500: null,
			600: null,
			700: null,
			800: null,
			900: null,
		},
		warning: {
			50: null,
			100: null,
			200: null,
			300: null,
			400: null,
			500: null,
			600: null,
			700: null,
			800: null,
			900: null,
		},
		info: {
			50: null,
			100: null,
			200: null,
			300: null,
			400: null,
			500: null,
			600: null,
			700: null,
			800: null,
			900: null,
		},
		white: null,
		black: null,
		transparent: null,
	},

	// Spacing scale (includes negatives for margin utilities)
	spacing: spacingContract,

	// Typography
	typography: {
		fontFamily: {
			sans: null,
			serif: null,
			mono: null,
			display: null,
		},
		fontStyle: {
			normal: null,
			italic: null,
		},
		fontSize: {
			xs: null,
			sm: null,
			base: null,
			lg: null,
			xl: null,
			'2xl': null,
			'3xl': null,
			'4xl': null,
			'5xl': null,
			'6xl': null,
			'7xl': null,
			'8xl': null,
			'9xl': null,
		},
		fontWeight: {
			thin: null,
			extralight: null,
			light: null,
			normal: null,
			medium: null,
			semibold: null,
			bold: null,
			extrabold: null,
			black: null,
		},
		lineHeight: {
			none: null,
			tight: null,
			snug: null,
			normal: null,
			relaxed: null,
			loose: null,
		},
		letterSpacing: {
			tighter: null,
			tight: null,
			normal: null,
			wide: null,
			wider: null,
			widest: null,
		},
		rendering: {
			webkitFontSmoothing: null,
			mozOsxFontSmoothing: null,
			textRendering: null,
			fontFeatureSettings: null,
			fontVariationSettings: null,
			fontSynthesis: null,
			fontKerning: null,
		},
	},

	// Borders
	borders: {
		radius: {
			none: null,
			sm: null,
			md: null,
			lg: null,
			xl: null,
			'2xl': null,
			'3xl': null,
			'4xl': null,
			full: null,
		},
		width: {
			none: null,
			thin: null,
			medium: null,
			thick: null,
			heavy: null,
		},
		style: {
			solid: null,
			dashed: null,
			dotted: null,
			double: null,
		},
	},

	// Shadows
	shadows: {
		boxShadow: {
			none: null,
			xs: null,
			sm: null,
			md: null,
			lg: null,
			xl: null,
			'2xl': null,
			inner: null,
			outline: null,
		},
		dropShadow: {
			none: null,
			sm: null,
			md: null,
			lg: null,
			xl: null,
			'2xl': null,
		},
	},

	// Animations
	animations: {
		duration: {
			fastest: null,
			fast: null,
			normal: null,
			slow: null,
			slowest: null,
		},
		easing: {
			linear: null,
			in: null,
			out: null,
			inOut: null,
			bounce: null,
			elastic: null,
		},
		transition: {
			all: null,
			colors: null,
			opacity: null,
			transform: null,
			shadow: null,
			position: null,
			size: null,
		},
	},

	focusRing: {
		width: {
			none: null,
			sm: null,
			md: null,
			lg: null,
		},
		offset: {
			none: null,
			sm: null,
			md: null,
		},
		color: {
			focus: null,
			primary: null,
			success: null,
			warning: null,
			error: null,
			info: null,
			inverse: null,
		},
	},

	layers: {
		base: null,
		dropdown: null,
		sticky: null,
		nav: null,
		overlay: null,
		modal: null,
		popover: null,
		toast: null,
		tooltip: null,
	},

	backdrop: {
		subtle: null,
		default: null,
		strong: null,
		inverse: null,
	},

	backdropBlur: {
		none: null,
		sm: null,
		md: null,
		lg: null,
	},

	dataViz: {
		categorical: {
			1: null,
			2: null,
			3: null,
			4: null,
			5: null,
			6: null,
			7: null,
			8: null,
		},
		sequential: {
			1: null,
			2: null,
			3: null,
			4: null,
			5: null,
		},
		divergent: {
			negative: null,
			neutral: null,
			positive: null,
		},
	},

	// Semantic color mappings for components and utilities
	semantic: {
		background: {
			primary: null,
			secondary: null,
			tertiary: null,
			inverse: null,
		},
		accent: {
			soft: null,
			surface: null,
			strong: null,
			border: null,
			text: null,
		},
		text: {
			primary: null,
			secondary: null,
			tertiary: null,
			inverse: null,
			success: null,
			error: null,
			warning: null,
			info: null,
		},
		border: {
			default: null,
			light: null,
			dark: null,
			primary: null,
			success: null,
			error: null,
			warning: null,
			info: null,
		},
		interactive: {
			hover: null,
			active: null,
			focus: null,
			disabled: null,
		},
		on: {
			primary: null,
			secondary: null,
			surface: null,
			background: null,
			inverse: null,
			success: null,
			warning: null,
			error: null,
			info: null,
		},
		surface: {
			level0: null,
			level1: null,
			level2: null,
			level3: null,
			level4: null,
			level5: null,
			translucent: null,
			translucentStrong: null,
		},
		overlay: {
			subtle: null,
			default: null,
			strong: null,
			inverse: null,
		},
		stateLayerOpacity: {
			hover: null,
			focus: null,
			pressed: null,
			drag: null,
			disabled: null,
		},
		ring: {
			focus: null,
			primary: null,
			success: null,
			warning: null,
			error: null,
			info: null,
			inverse: null,
		},
	},
} as const;

type ThemeContractDefinition = typeof themeContractDefinition;

type VarReference = `var(--${string})`;

type ThemeVarNameShape<T> = {
	[K in keyof T]: T[K] extends null ? `--milkshake-${string}` : ThemeVarNameShape<T[K]>;
};

type ThemeVarReferenceShape<T> = {
	[K in keyof T]: T[K] extends null ? VarReference : ThemeVarReferenceShape<T[K]>;
};

type StripIndexSignatures<T> = T extends object
	? {
			[K in keyof T as K extends string
				? string extends K
					? never
					: K
				: K extends number
					? number extends K
						? never
						: K
					: K extends symbol
						? symbol extends K
							? never
							: K
						: K]: StripIndexSignatures<T[K]>;
		}
	: T;

type ThemeVarNames = StripIndexSignatures<ThemeVarNameShape<ThemeContractDefinition>>;
type ThemeVarReferences = StripIndexSignatures<ThemeVarReferenceShape<ThemeContractDefinition>>;

export const themeVarNames = buildVarNameMap(themeContractDefinition) as ThemeVarNames;

export const themeContract = toVarReferences(themeVarNames) as ThemeVarReferences;

export type ThemeContract = ThemeVarReferences;
export type ThemeVariable = ThemeContract['colors']['primary'][500];
