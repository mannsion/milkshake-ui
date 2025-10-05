import baseStylesHref from './base.css?url';
import lightHref from './light.css?url';
import darkHref from './dark.css?url';
import darkMilkHref from './dark-milk.css?url';
import highContrastLightHref from './high-contrast-light.css?url';
import highContrastDarkHref from './high-contrast-dark.css?url';
import highContrastDarkMilkHref from './high-contrast-dark-milk.css?url';

export type MilkshakeThemeTone = 'light' | 'dark';

export type MilkshakeThemeDefinition<
	Name extends string,
	Tone extends MilkshakeThemeTone,
> = {
	name: Name;
	tone: Tone;
	href: string;
};

const defineTheme = <Name extends string, Tone extends MilkshakeThemeTone>(
	name: Name,
	tone: Tone,
	href: string,
): MilkshakeThemeDefinition<Name, Tone> => ({
	name,
	tone,
	href,
});

export const milkshakeBaseThemeHref = baseStylesHref;

export const milkshakeDefaultLightThemes = {
	light: defineTheme('light', 'light', lightHref),
	'high-contrast-light': defineTheme('high-contrast-light', 'light', highContrastLightHref),
} as const satisfies Record<string, MilkshakeThemeDefinition<string, 'light'>>;

export const milkshakeDefaultDarkThemes = {
	dark: defineTheme('dark', 'dark', darkHref),
	'dark-milk': defineTheme('dark-milk', 'dark', darkMilkHref),
	'high-contrast-dark': defineTheme('high-contrast-dark', 'dark', highContrastDarkHref),
	'high-contrast-dark-milk': defineTheme('high-contrast-dark-milk', 'dark', highContrastDarkMilkHref),
} as const satisfies Record<string, MilkshakeThemeDefinition<string, 'dark'>>;

export type MilkshakeLightThemeName = keyof typeof milkshakeDefaultLightThemes;
export type MilkshakeDarkThemeName = keyof typeof milkshakeDefaultDarkThemes;

export type MilkshakeLightThemeDefinition =
	(typeof milkshakeDefaultLightThemes)[MilkshakeLightThemeName];
export type MilkshakeDarkThemeDefinition =
	(typeof milkshakeDefaultDarkThemes)[MilkshakeDarkThemeName];

export const milkshakeDefaultThemes = {
	light: milkshakeDefaultLightThemes,
	dark: milkshakeDefaultDarkThemes,
} as const;

export type MilkshakeDefaultThemeName = MilkshakeLightThemeName | MilkshakeDarkThemeName;
export type MilkshakeDefaultThemeDefinition =
	| MilkshakeLightThemeDefinition
	| MilkshakeDarkThemeDefinition;

export const getMilkshakeLightTheme = <Name extends MilkshakeLightThemeName>(
	name: Name,
): MilkshakeLightThemeDefinition => milkshakeDefaultLightThemes[name];

export const getMilkshakeDarkTheme = <Name extends MilkshakeDarkThemeName>(
	name: Name,
): MilkshakeDarkThemeDefinition => milkshakeDefaultDarkThemes[name];

export const getMilkshakeLightThemeHref = <Name extends MilkshakeLightThemeName>(
	name: Name,
): string => getMilkshakeLightTheme(name).href;

export const getMilkshakeDarkThemeHref = <Name extends MilkshakeDarkThemeName>(
	name: Name,
): string => getMilkshakeDarkTheme(name).href;

export const getMilkshakeThemeHref = <Name extends MilkshakeDefaultThemeName>(
	name: Name,
): string => {
	if (name in milkshakeDefaultLightThemes) {
		return milkshakeDefaultLightThemes[name as MilkshakeLightThemeName].href;
	}
	return milkshakeDefaultDarkThemes[name as MilkshakeDarkThemeName].href;
};
