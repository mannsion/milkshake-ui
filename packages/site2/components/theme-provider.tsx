import { useEffect, useMemo } from "react";
import type { ReactNode } from "react";

import type {
	MilkshakeThemeDefinition,
	MilkshakeThemeTone,
} from "@milkshake-ui/core/themes/default-themes";

const THEME_LINK_DATA_KEY = "milkshakeTheme";
const BASE_LINK_DATA_KEY = "milkshakeBase";

type MilkshakeProviderProps = {
	children: ReactNode;
	baseHref?: string;
	theme: MilkshakeThemeDefinition<string, MilkshakeThemeTone>;
};

const ensureStylesheet = (href: string, dataKey: string) => {
	if (typeof document === "undefined") return undefined;

	const selector = `link[data-${dataKey}]`;
	let link = document.head.querySelector<HTMLLinkElement>(selector);

	const getAbsoluteHref = () => {
		try {
			return new URL(href, window.location.href).href;
		} catch {
			return href;
		}
	};

	if (!link) {
		const absoluteHref = typeof window !== "undefined" ? getAbsoluteHref() : href;
		const candidates = Array.from(
			document.head.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]'),
		);
		link = candidates.find((candidate) => {
			const candidateHref = candidate.getAttribute("href");
			return candidateHref === href || candidate.href === absoluteHref;
		}) ?? null;

		if (!link) {
			link = document.createElement("link");
			link.rel = "stylesheet";
			document.head.append(link);
		}

		link.dataset[dataKey] = "true";
	}

	if (link.getAttribute("href") !== href) {
		link.setAttribute("href", href);
	}

	return link;
};

const applyBaseStylesheet = (href?: string) => {
	if (!href) return;
	ensureStylesheet(href, BASE_LINK_DATA_KEY);
};

const applyThemeStylesheet = (
	theme: MilkshakeThemeDefinition<string, MilkshakeThemeTone>,
) => {
	const link = ensureStylesheet(theme.href, THEME_LINK_DATA_KEY);
	if (!link) return;

	link.dataset.themeName = theme.name;
	link.dataset.themeTone = theme.tone;

	const updateElement = (element: HTMLElement | null) => {
		if (!element) return;
		element.dataset.theme = theme.name;
		element.dataset.themeTone = theme.tone;
	};

	updateElement(document.documentElement);
	updateElement(document.body);
};

export const MilkshakeProvider = ({ children, baseHref, theme }: MilkshakeProviderProps) => {
	const resolvedBaseHref = useMemo(() => baseHref ?? undefined, [baseHref]);

	useEffect(() => {
		if (typeof document === "undefined") return;
		applyBaseStylesheet(resolvedBaseHref);
		applyThemeStylesheet(theme);
	}, [resolvedBaseHref, theme]);

	return <>{children}</>;
};

export type { MilkshakeProviderProps };
