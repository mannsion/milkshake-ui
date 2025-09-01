<script lang="ts">
	import { sprinkles } from '@milkshake-ui/core';
	import {
		// Sections
		main,
		hero,
		section,
		sectionAlt,
		noPaddingX,
		footer,
		themeIndicator,
		// Layout
		containerResponsive,
		containerFluid,
		safeArea,
		cq,
		switcher,
		switcherAtSm,
		switcherAtMd,
		switcherAtLg,
		surface,
		stack,
		reel,
		cluster,
		sidebar,
		showPortrait,
		showLandscape,
		// Container query tokens
		cqMin,
		cqMax,
		containerBreakpointValues,
		// Grid
		gridAutoFit,
		gridAutoFitSmall,
		gridAutoFitMedium,
		// Components
		button,
		buttonSize,
		buttonSolid,
		buttonSoft,
		buttonOutline,
		buttonGhost,
		buttonLink,
		buttonGroup,
		buttonGroupJustified,
		buttonGroupVertical,
		card,
		cardBody,
		select,
		selectSize
	} from '@milkshake-ui/core';
	import { getThemeContext } from '$lib/theme-context';
	import { fontVariantLabels, fontVariantOrder, type FontVariant } from '$lib/theme-overrides/font-overrides.css';

	const {
		currentTheme,
		toggleTheme,
		setTheme,
		currentFontVariant,
		setFontVariant,
		cycleFontVariant
	} = getThemeContext();

	const fontVariants = fontVariantOrder;
	const cardPadding = cardBody;
	const responsiveSystemShell = `${containerResponsive} ${cq} ${surface} ${sprinkles({ paddingBottom: '6' })}`;

	const colorShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
	const spacingValues = ['0', '4', '6', '8', '12', '16', '24', '32'];
	const timingFunctions = ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'] as const;

	const buttonTones = ['primary', 'accent', 'neutral', 'info', 'success', 'warning', 'danger'] as const;
	type ButtonTone = (typeof buttonTones)[number];

	const toneLabels: Record<ButtonTone, string> = {
		primary: 'Primary',
		accent: 'Accent',
		neutral: 'Neutral',
		info: 'Info',
		success: 'Success',
		warning: 'Warning',
		danger: 'Danger'
	};

	const variantClassMap = {
		solid: buttonSolid,
		soft: buttonSoft,
		outline: buttonOutline,
		ghost: buttonGhost,
		link: buttonLink
	} as const;

	type ButtonVariantKey = keyof typeof variantClassMap;

	const buttonVariantShowcase = [
		{
			id: 'solid',
			title: 'Solid',
			description: 'High-emphasis actions with the new raised surface treatment.',
			variantMap: buttonSolid
		},
		{
			id: 'soft',
			title: 'Soft',
			description: 'Low-elevation fills for calm secondary actions.',
			variantMap: buttonSoft
		},
		{
			id: 'outline',
			title: 'Outline',
			description: 'Border-focused buttons that sit well on tinted surfaces.',
			variantMap: buttonOutline
		},
		{
			id: 'ghost',
			title: 'Ghost',
			description: 'Transparent surfaces for quiet, low-priority actions.',
			variantMap: buttonGhost
		},
		{
			id: 'link',
			title: 'Link',
			description: 'Typographic link buttons for inline calls to action.',
			variantMap: buttonLink
		}
	] satisfies Array<{
		id: ButtonVariantKey;
		title: string;
		description: string;
		variantMap: (typeof variantClassMap)[ButtonVariantKey];
	}>;

	const buttonGroupClassMap = {
		horizontal: buttonGroup,
		justified: buttonGroupJustified,
		vertical: buttonGroupVertical
	} as const;

	type ButtonGroupLayout = keyof typeof buttonGroupClassMap;

	const buttonGroupShowcase = [
		{
			title: 'Launch Flow',
			description: 'Primary call-to-action with complementary preview and live demo links.',
			layout: 'horizontal',
			size: 'lg',
			buttons: [
				{ label: 'Start Trial', tone: 'primary', variant: 'solid' },
				{ label: 'Preview Docs', tone: 'accent', variant: 'soft' },
				{ label: 'Live Demo', tone: 'info', variant: 'outline' }
			]
		},
		{
			title: 'Segmented Control',
			description: 'Justified trio that flexes to full width for navigation patterns.',
			layout: 'justified',
			size: 'md',
			buttons: [
				{ label: 'Overview', tone: 'neutral', variant: 'soft' },
				{ label: 'Metrics', tone: 'info', variant: 'soft' },
				{ label: 'Activity', tone: 'warning', variant: 'soft' }
			]
		},
		{
			title: 'Command Palette',
			description: 'Vertical stack suited for menus or mobile drawers.',
			layout: 'vertical',
			size: 'md',
			buttons: [
				{ label: 'Create', tone: 'success', variant: 'solid' },
				{ label: 'Duplicate', tone: 'accent', variant: 'outline' },
				{ label: 'Archive', tone: 'danger', variant: 'ghost' }
			]
		}
	] satisfies Array<{
		title: string;
		description: string;
		layout: ButtonGroupLayout;
		size: keyof typeof buttonSize;
		buttons: Array<{
			label: string;
			tone: ButtonTone;
			variant: ButtonVariantKey;
		}>;
}>;

const resolveButtonGroupClass = (layout?: ButtonGroupLayout): string => {
	switch (layout) {
		case 'justified':
			return buttonGroupJustified;
		case 'vertical':
			return buttonGroupVertical;
		default:
			return buttonGroup;
	}
};

const buttonSizesDemo = [
		{ key: 'sm', label: 'Small', description: 'Tight toolbars, compact dialogs.' },
		{ key: 'md', label: 'Medium', description: 'Default size for forms and flows.' },
		{ key: 'lg', label: 'Large', description: 'High-impact hero or marketing CTAs.' }
	] satisfies Array<{
		key: keyof typeof buttonSize;
		label: string;
		description: string;
	}>;

	const handleThemeChange = (event: Event) => {
		const target = event.target;
		if (!(target instanceof HTMLSelectElement)) {
			return;
		}
		setTheme(target.value as import('@milkshake-ui/core').ThemeName);
	};

	const handleFontChange = (event: Event) => {
		const target = event.target;
		if (!(target instanceof HTMLSelectElement)) {
			return;
		}
		setFontVariant(target.value as FontVariant);
	};
</script>

<main class={[main, safeArea].join(' ')}>
	<div class={containerResponsive} style="margin-bottom: 1.5rem;">
		<div
			class={sprinkles({
				backgroundColor: 'warning-100',
				color: 'warning-900',
				paddingY: '2',
				paddingX: '4',
				borderRadius: 'lg',
				borderWidth: 'thin',
				borderColor: 'warning-300',
				textAlign: 'center',
				fontSize: 'sm',
				fontWeight: 'semibold'
			})}
			style="background-color: color-mix(in srgb, var(--color-warning-100) 75%, transparent); border-color: color-mix(in srgb, var(--color-warning-300) 60%, transparent); box-shadow: 0 12px 40px -28px rgba(191, 148, 74, 0.45);"
		>
			<strong>Alpha 0.1 Preview:</strong> Milkshake UI!! is an early work in progress. APIs, tokens, and themes may change without notice. Please don’t use this build in production yet.
		</div>
	</div>
	<!-- Hero Section -->
	<section class={hero}>
		<div class={containerResponsive}>
			<div
				class={`${sprinkles({
					position: 'relative',
					borderRadius: '3xl',
					overflow: 'hidden',
					boxShadow: 'xl',
				})} hero-shell`}
			>
				<div class="hero-shell__visual" aria-hidden="true">
					<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" role="presentation">
						<defs>
													<linearGradient id="hero-evening-cream" x1="800" y1="0" x2="800" y2="900" gradientUnits="userSpaceOnUse">
							<stop offset="0%" stop-color="#0B1224" />
							<stop offset="45%" stop-color="#111428" />
							<stop offset="100%" stop-color="#050B16" />
						</linearGradient>

							<linearGradient id="hero-flow-back" x1="0" y1="280" x2="0" y2="900" gradientUnits="userSpaceOnUse">
								<stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.35" />
								<stop offset="45%" stop-color="#F8EEE3" stop-opacity="0.55" />
								<stop offset="100%" stop-color="#EED0B4" stop-opacity="0.75" />
							</linearGradient>

							<linearGradient id="hero-flow-mid" x1="0" y1="420" x2="0" y2="900" gradientUnits="userSpaceOnUse">
								<stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.48" />
								<stop offset="35%" stop-color="#FDF4EA" stop-opacity="0.7" />
								<stop offset="100%" stop-color="#F4D8BA" stop-opacity="0.82" />
							</linearGradient>

							<linearGradient id="hero-flow-front" x1="0" y1="520" x2="0" y2="900" gradientUnits="userSpaceOnUse">
								<stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.78" />
								<stop offset="50%" stop-color="#FDF6EF" stop-opacity="0.88" />
								<stop offset="100%" stop-color="#F5DAC1" stop-opacity="0.9" />
							</linearGradient>

							<filter id="hero-milkGlow" x="-20%" y="-20%" width="140%" height="150%">
								<feGaussianBlur stdDeviation="24" result="blur" />
								<feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.6 0" />
								<feBlend in="SourceGraphic" in2="blur" mode="screen" />
							</filter>

							<style>
								.flow {
									mix-blend-mode: screen;
									transform-box: fill-box;
									transform-origin: center;
								}

								.flow--back {
									fill: url(#hero-flow-back);
									opacity: 0.5;
								}

								.flow--mid {
									fill: url(#hero-flow-mid);
									opacity: 0.66;
								}

								.flow--front {
									fill: url(#hero-flow-front);
									opacity: 0.84;
								}

								.static-fallback {
									display: none;
								}

								@media (prefers-reduced-motion: reduce) {
									.smil {
										display: none;
									}

									.static-fallback {
										display: block;
									}
								}

							</style>
						</defs>

						<rect width="1600" height="900" fill="transparent" />

						<g filter="url(#hero-milkGlow)">
							<g class="flow-layer">
								<path class="flow flow--back smil" d="M -220 540 C 80 460 340 340 720 380 C 1080 420 1320 320 1820 500 L 1820 900 L -220 900 Z">
									<animate attributeName="d" dur="22s" repeatCount="indefinite" values="M -220 540 C 80 460 340 340 720 380 C 1080 420 1320 320 1820 500 L 1820 900 L -220 900 Z;M -240 520 C 40 440 320 360 700 360 C 1060 360 1340 300 1780 480 L 1780 900 L -240 900 Z;M -200 560 C 120 480 360 340 720 400 C 1100 440 1360 340 1840 520 L 1840 900 L -200 900 Z;M -220 540 C 80 460 340 340 720 380 C 1080 420 1320 320 1820 500 L 1820 900 L -220 900 Z" />
									<animateTransform attributeName="transform" type="translate" dur="26s" repeatCount="indefinite" values="0 0; 18 -10; -16 8; 0 0" />
								</path>
								<path class="flow flow--back static-fallback" d="M -220 540 C 80 460 340 340 720 380 C 1080 420 1320 320 1820 500 L 1820 900 L -220 900 Z" />
							</g>

							<g class="flow-layer">
								<path class="flow flow--mid smil" d="M -260 660 C 40 620 420 520 780 580 C 1160 640 1400 580 1820 700 L 1820 900 L -260 900 Z">
									<animate attributeName="d" dur="18s" repeatCount="indefinite" values="M -260 660 C 40 620 420 520 780 580 C 1160 640 1400 580 1820 700 L 1820 900 L -260 900 Z;M -240 640 C 80 600 420 500 780 560 C 1140 620 1420 560 1800 680 L 1800 900 L -240 900 Z;M -280 680 C 20 640 420 540 780 600 C 1180 660 1380 600 1840 720 L 1840 900 L -280 900 Z;M -260 660 C 40 620 420 520 780 580 C 1160 640 1400 580 1820 700 L 1820 900 L -260 900 Z" />
									<animateTransform attributeName="transform" type="translate" dur="20s" repeatCount="indefinite" values="0 0; 14 -6; -12 5; 0 0" />
								</path>
								<path class="flow flow--mid static-fallback" d="M -260 660 C 40 620 420 520 780 580 C 1160 640 1400 580 1820 700 L 1820 900 L -260 900 Z" />
							</g>

							<g class="flow-layer">
								<path class="flow flow--front smil" d="M -220 760 C 0 740 360 700 760 740 C 1160 780 1500 760 1860 780 L 1860 900 L -220 900 Z">
									<animate attributeName="d" dur="16s" repeatCount="indefinite" values="M -220 760 C 0 740 360 700 760 740 C 1160 780 1500 760 1860 780 L 1860 900 L -220 900 Z;M -200 740 C 40 720 360 680 780 720 C 1160 760 1480 740 1820 760 L 1820 900 L -200 900 Z;M -240 780 C -20 760 360 720 760 760 C 1160 800 1520 780 1880 800 L 1880 900 L -240 900 Z;M -220 760 C 0 740 360 700 760 740 C 1160 780 1500 760 1860 780 L 1860 900 L -220 900 Z" />
									<animateTransform attributeName="transform" type="translate" dur="18s" repeatCount="indefinite" values="0 0; 10 -4; -9 3; 0 0" />
								</path>
								<path class="flow flow--front static-fallback" d="M -220 760 C 0 740 360 700 760 740 C 1160 780 1500 760 1860 780 L 1860 900 L -220 900 Z" />
							</g>
						</g>
					</svg>
				</div>
				<div
					class={`${sprinkles({
						position: 'relative',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '4',
						paddingY: { mobile: '6', md: '8' },
						paddingX: { mobile: '4', md: '8' },
						textAlign: 'center',
					})} hero-shell__content`}
				>
					<span class={sprinkles({
						display: 'inline-flex',
						alignItems: 'center',
						gap: '2',
						backgroundColor: 'accent-soft',
						color: 'accent-text',
						paddingX: '3',
						paddingY: '1',
						borderRadius: 'full',
						fontSize: 'xs',
						fontWeight: 'semibold',
						borderWidth: 'thin',
						borderColor: 'accent-border',
					})}>
						✨ Secondary accent unlocked
					</span>
					<h1 class={sprinkles({ fontSize: '4xl', fontWeight: 'bold', color: 'accent-text' })}>
						Milkshake UI - Test
					</h1>
					<p
						class={sprinkles({ fontSize: 'lg', color: 'text-secondary', marginBottom: '6', maxWidth: '48rem' })}
						style="margin-inline: auto;"
					>
						A pure CSS utility framework built with vanilla-extract and sprinkles.
						Framework-agnostic, zero runtime, and fully responsive.
					</p>

				<!-- Primary action buttons -->
				<div class={sprinkles({ display: 'flex', justifyContent: 'center', marginTop: '4' })}>
					<div class={buttonGroup}>
						<button class={`${button} ${buttonSize.lg} ${buttonSolid.primary}`} style="min-width: 9rem;">
							Get Started
						</button>
						<a
							href="https://github.com/mannsion/milkshake-ui"
							target="_blank"
							rel="noopener noreferrer"
							class={`${button} ${buttonSize.lg} ${buttonOutline.accent}`} style="min-width: 9rem;"
						>
							Sip the Docs
						</a>
					</div>
				</div>
				<!-- Theme controls -->
				<div class={sprinkles({ display: 'flex', justifyContent: 'center', marginTop: '4' })}>
					<div class={`${card} ${sprinkles({ width: { mobile: 'full', sm: 'auto' } })}`}>
						<div class={`${cardBody} ${sprinkles({ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4', width: 'full' })}`}>
							<div class={sprinkles({ width: 'full', display: 'flex', flexDirection: 'column', gap: '2' })}>
								<label for="theme-select" class={sprinkles({ fontSize: 'sm', color: 'accent-text', fontWeight: 'medium' })}>Theme</label>
								<div class={`${buttonGroup} ${sprinkles({ width: 'full' })}`}>
									<select
										id="theme-select"
										class={`${select}`}
										value={$currentTheme}
										on:change={handleThemeChange}
										aria-label="Select theme"
									>
										<option value="zigrok">⚡ Zigrok Quantum (Default)</option>
										<option value="strawberry-milkshake">🍓 Strawberry Milkshake (Pastel Pop)</option>
										<option value="light">🍨 Vanilla Milkshake (Light)</option>
										<option value="dark">🌙 Midnight Cocoa (Dark)</option>
										<option value="dark-milk">🍫 Milk Chocolate (Dark Milk)</option>
										<option value="high-contrast-light">⚡ Vanilla High Contrast</option>
										<option value="high-contrast-dark">⚡ Midnight High Contrast</option>
										<option value="high-contrast-dark-milk">⚡ Milk Chocolate High Contrast</option>
									</select>
									<button
										class={`${button} ${buttonSize.md} ${buttonGhost.neutral}`}
										on:click={toggleTheme}
										type="button"
										aria-label="Cycle theme"
										title="Cycle theme"
									>
										🔁 Cycle
									</button>
								</div>
							</div>
							<div class={sprinkles({ width: 'full', display: 'flex', flexDirection: 'column', gap: '2' })}>
								<label for="font-select" class={sprinkles({ fontSize: 'sm', color: 'accent-text', fontWeight: 'medium' })}>
									Font Mode
								</label>
								<div class={`${buttonGroup} ${sprinkles({ width: 'full' })}`}>
									<select
										id="font-select"
										class={`${select}`}
										value={$currentFontVariant}
										on:change={handleFontChange}
										aria-label="Select font variant"
									>
										{#each fontVariants as variant}
											<option value={variant}>{fontVariantLabels[variant]}</option>
										{/each}
									</select>
									<button
										class={`${button} ${buttonSize.md} ${buttonGhost.neutral}`}
										on:click={cycleFontVariant}
										type="button"
										aria-label="Cycle font"
										title="Cycle font"
									>
										🔁 Cycle
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
	</section>
	<!-- Theme Showcase Section -->
	<section class={sectionAlt}>
		<div class={containerResponsive}>
			<h2 class={sprinkles({ fontSize: '3xl', fontWeight: 'semibold', color: 'accent-text', textAlign: 'center' })}>
				🎨 Dynamic Theming System
			</h2>
			<p class={sprinkles({ fontSize: 'lg', color: 'neutral-700' })} style="text-align: center; margin-bottom: 3rem; max-width: 48rem; margin-left: auto; margin-right: auto;">
				Switch between light and dark themes to see how all components adapt automatically.
				The theming system uses CSS custom properties for seamless theme switching.
			</p>

			<div class={gridAutoFit}>
				<!-- Theme-aware Card -->
				<div class={`${card}`}>
					<div class={cardBody}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })}>
							Theme-Aware Components
						</h3>
						<p class={sprinkles({ fontSize: 'sm', color: 'neutral-700' })} style="margin-bottom: 1rem;">
							This card automatically adapts to the current theme using semantic color tokens.
						</p>
						<div class={sprinkles({ display: 'flex', flexWrap: 'wrap' })} style="gap: 0.5rem;">
							<span class={sprinkles({ backgroundColor: 'primary-500', color: 'white', paddingX: '3', paddingY: '1', borderRadius: 'md', fontSize: 'xs', fontWeight: 'medium' })}>
								Primary
							</span>
							<span class={sprinkles({ backgroundColor: 'accent-strong', color: 'on-secondary', paddingX: '3', paddingY: '1', borderRadius: 'md', fontSize: 'xs', fontWeight: 'medium', boxShadow: 'sm' })}>
								Accent
							</span>
							<span class={sprinkles({ backgroundColor: 'success-500', color: 'white', paddingX: '3', paddingY: '1', borderRadius: 'md', fontSize: 'xs', fontWeight: 'medium' })}>
								Success
							</span>
							<span class={sprinkles({ backgroundColor: 'warning-500', color: 'white', paddingX: '3', paddingY: '1', borderRadius: 'md', fontSize: 'xs', fontWeight: 'medium' })}>
								Warning
							</span>
						</div>
					</div>
				</div>

				<!-- Interactive Elements -->
				<div class={`${card}`}>
					<div class={cardBody}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })}>
							Interactive States
						</h3>
						<div class={sprinkles({ display: 'flex', flexDirection: 'column' })} style="gap: 0.75rem;">
						<div class={buttonGroupVertical}>
							<button class={`${button} ${buttonSize.md} ${buttonSolid.primary}`}>Solid primary</button>
							<button class={`${button} ${buttonSize.md} ${buttonOutline.accent}`}>Outline accent</button>
							<button class={`${button} ${buttonSize.md} ${buttonGhost.neutral}`}>Ghost surface</button>
						</div>
						<button class={`${button} ${buttonLink.primary}`}>Link emphasis</button>
					</div>
					</div>
				</div>

				<!-- Typography Showcase -->
				<div class={`${card}`}>
					<div class={cardBody}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })}>
							Typography Scale
						</h3>
						<div class={sprinkles({ display: 'flex', flexDirection: 'column' })} style="gap: 0.5rem;">
							<div class={sprinkles({ fontSize: 'xs', color: 'neutral-600' })}>
								Extra Small Text
							</div>
							<div class={sprinkles({ fontSize: 'sm', color: 'neutral-700' })}>
								Small Text
							</div>
							<div class={sprinkles({ fontSize: 'base', color: 'neutral-800' })}>
								Base Text
							</div>
							<div class={sprinkles({ fontSize: 'lg', color: 'neutral-900' })}>
								Large Text
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Current Theme Indicator -->
					<div
						class={`${themeIndicator} ${sprinkles({
							backgroundColor: 'surface-translucent-strong',
							borderRadius: 'xl',
							borderWidth: 'thin',
							borderColor: 'accent-border',
							padding: '4',
							backdropFilter: 'blurSm',
						})}`}
					>
						<p class={sprinkles({ fontSize: 'sm', color: 'accent-text', fontWeight: 'medium' })}>
							Current Theme: <strong>
								{#if $currentTheme === 'light'}
									🍨 Vanilla Milkshake (Light)
								{:else if $currentTheme === 'strawberry-milkshake'}
									🍓 Strawberry Milkshake (Pastel Pop)
								{:else if $currentTheme === 'dark'}
									🌙 Midnight Cocoa (Dark)
								{:else if $currentTheme === 'dark-milk'}
									🍫 Milk Chocolate (Dark Milk)
								{:else if $currentTheme === 'high-contrast-light'}
									⚡ Vanilla High Contrast
								{:else if $currentTheme === 'high-contrast-dark'}
									⚡ Midnight High Contrast
								{:else if $currentTheme === 'high-contrast-dark-milk'}
									⚡ Milk Chocolate High Contrast
								{:else}
									⚡ Zigrok Quantum
								{/if}
							</strong>
						</p>
						<p class={sprinkles({ fontSize: 'sm', color: 'accent-text' })}>
							Active Font Mode: <strong>{fontVariantLabels[$currentFontVariant]}</strong>
						</p>
					</div>
		</div>
	</section>

	<!-- Buttons Showcase Section -->
	<section class={section}>
		<div class={containerResponsive}>
			<h2 class={sprinkles({ fontSize: '3xl', fontWeight: 'semibold', color: 'accent-text', textAlign: 'center' })}>
				Buttons & Groups
			</h2>
			<p
				class={sprinkles({ fontSize: 'lg', color: 'neutral-700' })}
				style="text-align: center; margin-bottom: 3rem; max-width: 48rem; margin-inline: auto;"
			>
				Every tone and surface combination in one spot for quick interaction testing.
			</p>

			<div class={gridAutoFitMedium}>
				{#each buttonVariantShowcase as showcase}
					<div class={card}>
						<div class={cardBody}>
							<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })}>
								{showcase.title} Buttons
							</h3>
							<p class={sprinkles({ fontSize: 'sm', color: 'neutral-600' })} style="margin-bottom: 0.75rem;">
								{showcase.description}
							</p>
							<div
								class={sprinkles({ display: 'flex', flexWrap: 'wrap', alignItems: 'center' })}
								style="gap: 0.75rem;"
							>
								{#each buttonTones as tone}
									<button
										type="button"
										class={[button, showcase.id === 'link' ? '' : buttonSize.md, showcase.variantMap[tone]].filter(Boolean).join(' ')}
										aria-label={`${toneLabels[tone]} ${showcase.title} button`}
									>
										{toneLabels[tone]}
									</button>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>

			<div class={gridAutoFitMedium} style="margin-top: 2.5rem;">
				<div class={card}>
					<div class={cardBody}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })}>
							Size Scale
						</h3>
						<p class={sprinkles({ fontSize: 'sm', color: 'neutral-600' })} style="margin-bottom: 0.75rem;">
							Compare the padding rhythm for each size token.
						</p>
						<div class={sprinkles({ display: 'flex', flexDirection: 'column' })} style="gap: 1rem;">
							{#each buttonSizesDemo as size}
								<div class={sprinkles({ display: 'flex', alignItems: 'center', flexWrap: 'wrap' })} style="gap: 0.75rem;">
									<button
										type="button"
										class={[button, buttonSolid.primary, buttonSize[size.key]].join(' ')}
									>
										{size.label}
									</button>
									<span class={sprinkles({ fontSize: 'sm', color: 'neutral-600' })}>{size.description}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>

				{#each buttonGroupShowcase as group}
					<div class={card}>
						<div class={cardBody}>
							<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })}>
								{group.title}
							</h3>
							<p class={sprinkles({ fontSize: 'sm', color: 'neutral-600' })} style="margin-bottom: 0.75rem;">
								{group.description}
							</p>
							<div
								class={resolveButtonGroupClass(group.layout)}
								style={group.layout === 'justified' ? 'width: 100%;' : undefined}
							>
								{#each group.buttons as btn}
									<button
										type="button"
										class={[button, buttonSize[group.size], variantClassMap[btn.variant][btn.tone]].join(' ')}
									>
										{btn.label}
									</button>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Colors Section -->
	<section class={section}>
		<div class={containerResponsive}>
			<h2 class={sprinkles({ fontSize: '3xl', fontWeight: 'semibold', color: 'accent-text' })} style="text-align: center;">
				Color Palette
			</h2>
			<p class={sprinkles({ fontSize: 'lg', color: 'neutral-700' })} style="text-align: center; margin-bottom: 3rem; max-width: 48rem; margin-left: auto; margin-right: auto;">
				Comprehensive color system with vanilla-inspired primary colors and semantic palettes.
			</p>

			<!-- Primary Colors -->
			<div style="margin-bottom: 3rem;">
				<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1.5rem;">
					Primary Colors
				</h3>
				<div class={gridAutoFitSmall}>
					{#each colorShades as shade}
						<div class={sprinkles({ padding: '4', borderRadius: 'md', textAlign: 'center', fontSize: 'xs', fontWeight: 'medium', color: 'white', backgroundColor: shade === '50' ? 'primary-50' : shade === '100' ? 'primary-100' : shade === '200' ? 'primary-200' : shade === '300' ? 'primary-300' : shade === '400' ? 'primary-400' : shade === '500' ? 'primary-500' : shade === '600' ? 'primary-600' : shade === '700' ? 'primary-700' : shade === '800' ? 'primary-800' : 'primary-900' })}>
							{shade}
						</div>
					{/each}
				</div>
			</div>

			<!-- Secondary Colors -->
			<div style="margin-bottom: 3rem;">
				<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1.5rem;">
					Secondary Colors
				</h3>
				<div class={gridAutoFitSmall}>
					{#each colorShades as shade}
						<div class={sprinkles({
							padding: '4',
							borderRadius: 'md',
							textAlign: 'center',
							fontSize: 'xs',
							fontWeight: 'medium',
							color: shade >= '500' ? 'white' : 'accent-text',
							backgroundColor: shade === '50' ? 'secondary-50' : shade === '100' ? 'secondary-100' : shade === '200' ? 'secondary-200' : shade === '300' ? 'secondary-300' : shade === '400' ? 'secondary-400' : shade === '500' ? 'secondary-500' : shade === '600' ? 'secondary-600' : shade === '700' ? 'secondary-700' : shade === '800' ? 'secondary-800' : 'secondary-900',
							borderWidth: 'thin',
							borderColor: 'accent-border',
						})}>
							{shade}
						</div>
					{/each}
				</div>
			</div>

			<!-- Neutral Colors -->
			<div style="margin-bottom: 3rem;">
				<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1.5rem;">
					Neutral Colors
				</h3>
				<div class={gridAutoFitSmall}>
					{#each colorShades as shade}
						<div class={sprinkles({ padding: '4', borderRadius: 'md', textAlign: 'center', fontSize: 'xs', fontWeight: 'medium', color: shade >= '500' ? 'white' : 'neutral-900', backgroundColor: shade === '50' ? 'neutral-50' : shade === '100' ? 'neutral-100' : shade === '200' ? 'neutral-200' : shade === '300' ? 'neutral-300' : shade === '400' ? 'neutral-400' : shade === '500' ? 'neutral-500' : shade === '600' ? 'neutral-600' : shade === '700' ? 'neutral-700' : shade === '800' ? 'neutral-800' : 'neutral-900' })}>
							{shade}
						</div>
					{/each}
				</div>
			</div>

			<!-- Semantic Colors -->
			<div style="margin-bottom: 3rem;">
				<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1.5rem;">
					Semantic Colors
				</h3>
				<div class={gridAutoFitSmall} style="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));">
					{#each ['success', 'error', 'warning', 'info'] as semantic}
						<div class={sprinkles({ padding: '6', borderRadius: 'lg', textAlign: 'center', fontSize: 'sm', fontWeight: 'semibold', color: 'white', backgroundColor: semantic === 'success' ? 'success-500' : semantic === 'error' ? 'error-500' : semantic === 'warning' ? 'warning-500' : 'info-500' })}>
							{semantic.charAt(0).toUpperCase() + semantic.slice(1)}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Typography Section -->
	<section class={sectionAlt}>
		<div class={containerResponsive}>
			<h2 class={sprinkles({ fontSize: '3xl', fontWeight: 'semibold', color: 'neutral-900' })} style="text-align: center;">
				Typography
			</h2>
			<p class={sprinkles({ fontSize: 'lg', color: 'neutral-700' })} style="text-align: center; margin-bottom: 3rem; max-width: 48rem; margin-left: auto; margin-right: auto;">
				Comprehensive typography system with multiple font families and sizes.
			</p>

			<div class={gridAutoFitMedium}>
				<!-- Font Sizes -->
				<div class={`${card}`}>
					<div class={cardBody}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1.5rem;">
							Font Sizes
						</h3>
						<div class={sprinkles({ display: 'flex', flexDirection: 'column' })} style="gap: 0.75rem;">
							{#each ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'] as size}
								<div class={sprinkles({ fontSize: size === 'xs' ? 'xs' : size === 'sm' ? 'sm' : size === 'base' ? 'base' : size === 'lg' ? 'lg' : size === 'xl' ? 'xl' : size === '2xl' ? '2xl' : size === '3xl' ? '3xl' : size === '4xl' ? '4xl' : size === '5xl' ? '5xl' : '6xl', color: 'neutral-900', borderBottomWidth: 'thin', borderBottomColor: 'neutral-200', paddingBottom: '1' })}>
									The quick brown fox jumps over the lazy dog ({size})
								</div>
							{/each}
						</div>
					</div>
				</div>

				<!-- Font Weights -->
				<div class={`${card}`}>
					<div class={cardBody}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1.5rem;">
							Font Weights
						</h3>
						<div class={sprinkles({ display: 'flex', flexDirection: 'column' })} style="gap: 0.75rem;">
							{#each ['thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'] as weight}
								<div class={sprinkles({ fontWeight: weight === 'thin' ? 'thin' : weight === 'light' ? 'light' : weight === 'normal' ? 'normal' : weight === 'medium' ? 'medium' : weight === 'semibold' ? 'semibold' : weight === 'bold' ? 'bold' : weight === 'extrabold' ? 'extrabold' : 'black', color: 'neutral-900', fontSize: 'lg' })}>
									The quick brown fox jumps over the lazy dog ({weight})
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Spacing Section -->
	<section class={section}>
		<div class={containerResponsive}>
			<h2 class={sprinkles({ fontSize: '3xl', fontWeight: 'semibold', color: 'neutral-900' })} style="text-align: center;">
				Spacing
			</h2>
			<p class={sprinkles({ fontSize: 'lg', color: 'neutral-700' })} style="text-align: center; margin-bottom: 3rem; max-width: 48rem; margin-left: auto; margin-right: auto;">
				Consistent spacing scale for margins, padding, and layout.
			</p>

			<div class={gridAutoFitSmall}>
				{#each ['1', '2', '3', '4', '6', '8', '12', '16', '24', '32'] as space}
					<div class={`${card}`}>
						<div class={cardBody}>
							<div class={sprinkles({ backgroundColor: 'secondary-500', color: 'on-secondary', height: space === '1' ? '1' : space === '2' ? '2' : space === '3' ? '3' : space === '4' ? '4' : space === '6' ? '6' : space === '8' ? '8' : space === '12' ? '12' : space === '16' ? '16' : space === '24' ? '24' : '32', width: 'full', boxShadow: 'sm' })}></div>
							<p class={sprinkles({ fontSize: 'sm', color: 'neutral-600', marginTop: '2', textAlign: 'center' })}>
								{space}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Framework Utilities Section -->
	<section class={sectionAlt}>
		<div class={containerResponsive}>
			<h2 class={sprinkles({ fontSize: '3xl', fontWeight: 'semibold', color: 'neutral-900' })} style="text-align: center;">
				Framework Utilities
			</h2>
			<p class={sprinkles({ fontSize: 'lg', color: 'neutral-700' })} style="text-align: center; margin-bottom: 3rem; max-width: 48rem; margin-left: auto; margin-right: auto;">
				Core utility classes for colors, spacing, borders, shadows, and layout.
			</p>

			<div class={gridAutoFitMedium}>
				<!-- Box Shadows -->
				<div class={`${card}`}>
					<div class={cardBody}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1.5rem;">
							Box Shadows
						</h3>
						<div class={sprinkles({ display: 'flex', flexDirection: 'column' })} style="gap: 1rem;">
							<div class={sprinkles({ backgroundColor: 'white', padding: '6', borderRadius: 'lg', boxShadow: 'sm', borderWidth: 'thin', borderColor: 'neutral-200' })}>
								<div class={sprinkles({ fontSize: 'sm', fontWeight: 'medium', color: 'neutral-900' })}>
									boxShadow: 'sm'
								</div>
							</div>
							<div class={sprinkles({ backgroundColor: 'white', padding: '6', borderRadius: 'lg', boxShadow: 'md', borderWidth: 'thin', borderColor: 'neutral-200' })}>
								<div class={sprinkles({ fontSize: 'sm', fontWeight: 'medium', color: 'neutral-900' })}>
									boxShadow: 'md'
								</div>
							</div>
							<div class={sprinkles({ backgroundColor: 'white', padding: '6', borderRadius: 'lg', boxShadow: 'lg', borderWidth: 'thin', borderColor: 'neutral-200' })}>
								<div class={sprinkles({ fontSize: 'sm', fontWeight: 'medium', color: 'neutral-900' })}>
									boxShadow: 'lg'
								</div>
							</div>
							<div class={sprinkles({ backgroundColor: 'white', padding: '6', borderRadius: 'lg', boxShadow: 'xl', borderWidth: 'thin', borderColor: 'neutral-200' })}>
								<div class={sprinkles({ fontSize: 'sm', fontWeight: 'medium', color: 'neutral-900' })}>
									boxShadow: 'xl'
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Border Utilities -->
				<div class={`${card}`}>
					<div class={cardBody}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1.5rem;">
							Border Utilities
						</h3>
						<div class={sprinkles({ display: 'flex', flexDirection: 'column' })} style="gap: 1rem;">
							<div class={sprinkles({ backgroundColor: 'white', padding: '4', borderRadius: 'md', borderWidth: 'thin', borderColor: 'neutral-400', borderStyle: 'solid' })}>
								<div class={sprinkles({ fontSize: 'xs', fontWeight: 'medium', color: 'neutral-700' })}>
									borderWidth: 'thin', borderColor: 'neutral-400'
								</div>
							</div>
							<div class={sprinkles({ backgroundColor: 'white', padding: '4', borderRadius: 'md', borderWidth: 'medium', borderColor: 'neutral-500', borderStyle: 'solid' })}>
								<div class={sprinkles({ fontSize: 'xs', fontWeight: 'medium', color: 'neutral-700' })}>
									borderWidth: 'medium', borderColor: 'neutral-500'
								</div>
							</div>
							<div class={sprinkles({ backgroundColor: 'white', padding: '4', borderRadius: 'md', borderWidth: 'thick', borderColor: 'primary-500', borderStyle: 'solid' })}>
								<div class={sprinkles({ fontSize: 'xs', fontWeight: 'medium', color: 'neutral-700' })}>
									borderWidth: 'thick', borderColor: 'primary-500'
								</div>
							</div>
							<div class={sprinkles({ backgroundColor: 'white', padding: '4', borderRadius: 'md', borderWidth: 'heavy', borderColor: 'error-500', borderStyle: 'solid' })}>
								<div class={sprinkles({ fontSize: 'xs', fontWeight: 'medium', color: 'neutral-700' })}>
									borderWidth: 'heavy', borderColor: 'error-500'
								</div>
							</div>
							<div class={sprinkles({ backgroundColor: 'white', padding: '4', borderRadius: 'lg', borderWidth: 'medium', borderColor: 'success-500', borderStyle: 'dashed' })}>
								<div class={sprinkles({ fontSize: 'xs', fontWeight: 'medium', color: 'neutral-700' })}>
									borderStyle: 'dashed'
								</div>
							</div>
							<div class={sprinkles({ backgroundColor: 'white', padding: '4', borderRadius: 'lg', borderWidth: 'medium', borderColor: 'warning-500', borderStyle: 'dotted' })}>
								<div class={sprinkles({ fontSize: 'xs', fontWeight: 'medium', color: 'neutral-700' })}>
									borderStyle: 'dotted'
								</div>
							</div>
							<div class={sprinkles({ backgroundColor: 'white', padding: '4', borderRadius: 'lg', borderWidth: 'medium', borderColor: 'info-500', borderStyle: 'double' })}>
								<div class={sprinkles({ fontSize: 'xs', fontWeight: 'medium', color: 'neutral-700' })}>
									borderStyle: 'double'
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Layout & Spacing -->
				<div class={`${card}`}>
					<div class={cardBody}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1.5rem;">
							Layout & Spacing
						</h3>
						<div class={sprinkles({ display: 'flex', flexDirection: 'column' })} style="gap: 1rem;">
							<div class={sprinkles({ backgroundColor: 'primary-100', padding: '4', borderRadius: 'md' })}>
								<div class={sprinkles({ fontSize: 'xs', fontWeight: 'medium', color: 'primary-700' })}>
									padding: 4
								</div>
							</div>
							<div class={sprinkles({ backgroundColor: 'success-100', paddingX: '6', paddingY: '3', borderRadius: 'md' })}>
								<div class={sprinkles({ fontSize: 'xs', fontWeight: 'medium', color: 'success-700' })}>
									paddingX: 6, paddingY: 3
								</div>
							</div>
							<div class={sprinkles({ backgroundColor: 'warning-100', margin: '4', borderRadius: 'md' })}>
								<div class={sprinkles({ fontSize: 'xs', fontWeight: 'medium', color: 'warning-700' })}>
									margin: 4
								</div>
							</div>
							<div class={sprinkles({ backgroundColor: 'info-100', marginX: '6', marginY: '3', borderRadius: 'md' })}>
								<div class={sprinkles({ fontSize: 'xs', fontWeight: 'medium', color: 'info-700' })}>
									marginX: 6, marginY: 3
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Additional Framework Examples -->
			<div class={gridAutoFitMedium} style="margin-top: 3rem;">
				<!-- Border Radius -->
				<div class={`${card}`}>
					<div class={cardBody}>
						<h4 class={sprinkles({ fontSize: 'lg', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">
							Border Radius
						</h4>
						<div class={sprinkles({ display: 'flex', flexDirection: 'row' })} style="gap: 0.75rem; flex-wrap: wrap;">
							<div class={sprinkles({ backgroundColor: 'secondary-500', color: 'on-secondary', padding: '3', borderRadius: 'sm', boxShadow: 'sm' })} style="width: 25%; height: 24px;"></div>
							<div class={sprinkles({ backgroundColor: 'secondary-500', color: 'on-secondary', padding: '3', borderRadius: 'md', boxShadow: 'sm' })} style="width: 25%; height: 24px;"></div>
							<div class={sprinkles({ backgroundColor: 'secondary-500', color: 'on-secondary', padding: '3', borderRadius: 'lg', boxShadow: 'sm' })} style="width: 25%; height: 24px;"></div>
							<div class={sprinkles({ backgroundColor: 'secondary-500', color: 'on-secondary', padding: '3', borderRadius: 'xl', boxShadow: 'sm' })} style="width: 25%; height: 24px;"></div>
							<div class={sprinkles({ backgroundColor: 'secondary-500', color: 'on-secondary', padding: '3', borderRadius: 'full', boxShadow: 'sm' })} style="width: 25%; height: 24px;"></div>
						</div>
						<div class={sprinkles({ fontSize: 'xs', color: 'neutral-600', marginTop: '2' })}>
							sm • md • lg • xl • full
						</div>
					</div>
				</div>

				<!-- Display & Position -->
				<div class={`${card}`}>
					<div class={cardBody}>
						<h4 class={sprinkles({ fontSize: 'lg', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">
							Display & Position
						</h4>
						<div class={sprinkles({ display: 'flex', flexDirection: 'row' })} style="gap: 0.75rem; flex-wrap: wrap;">
							<div
								class={sprinkles({
									backgroundColor: 'success-500',
									paddingX: '3',
									paddingY: '2',
									borderRadius: 'md',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									gap: '2'
								})}
								style="min-width: 5.5rem;"
							>
								<span class={sprinkles({ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', color: 'success-700', fontWeight: 'bold', borderRadius: 'sm', width: '6', height: '6', fontSize: 'xs' })}>F1</span>
								<span class={sprinkles({ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', color: 'success-700', fontWeight: 'bold', borderRadius: 'sm', width: '6', height: '6', fontSize: 'xs' })}>F2</span>
								<span class={sprinkles({ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', color: 'success-700', fontWeight: 'bold', borderRadius: 'sm', width: '6', height: '6', fontSize: 'xs' })}>F3</span>
							</div>
							<div
								class={sprinkles({
									backgroundColor: 'warning-500',
									padding: '3',
									borderRadius: 'md',
									display: 'grid',
									gap: '1',
									gridTemplateColumns: 'cols2'
								})}
								style="min-width: 5.5rem;"
							>
								<span class={sprinkles({ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', color: 'warning-700', fontWeight: 'bold', borderRadius: 'sm', fontSize: 'xs', height: '6' })}>G1</span>
								<span class={sprinkles({ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', color: 'warning-700', fontWeight: 'bold', borderRadius: 'sm', fontSize: 'xs', height: '6' })}>G2</span>
								<span class={sprinkles({ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', color: 'warning-700', fontWeight: 'bold', borderRadius: 'sm', fontSize: 'xs', height: '6' })}>G3</span>
								<span class={sprinkles({ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', color: 'warning-700', fontWeight: 'bold', borderRadius: 'sm', fontSize: 'xs', height: '6' })}>G4</span>
							</div>
							<div
								class={sprinkles({
									backgroundColor: 'error-500',
									padding: '3',
									borderRadius: 'md',
									position: 'relative',
									color: 'white'
								})}
								style="min-width: 5.5rem; min-height: 2.75rem;"
							>
								<span class={sprinkles({ fontSize: 'xs', fontWeight: 'bold' })}>Relative</span>
								<span
									class={sprinkles({
										display: 'inline-flex',
										alignItems: 'center',
										justifyContent: 'center',
										backgroundColor: 'white',
										color: 'error-600',
										fontWeight: 'bold',
										borderRadius: 'full',
										width: '6',
										height: '6',
										fontSize: 'xs',
										position: 'absolute'
									})}
									style="top: -0.5rem; right: -0.5rem;"
								>
									ABS
								</span>
							</div>
						</div>
						<div class={sprinkles({ fontSize: 'xs', color: 'neutral-600', marginTop: '2' })}>
							flex • grid • relative
						</div>
					</div>
				</div>

				<!-- Transitions -->
				<div class={`${card}`}>
					<div class={cardBody}>
						<h4 class={sprinkles({ fontSize: 'lg', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">
							Transitions
						</h4>
						<div class={sprinkles({ display: 'flex', flexDirection: 'row' })} style="gap: 0.75rem; flex-wrap: wrap;">
							<div
								class="transition-demo {sprinkles({ backgroundColor: 'info-500', padding: '3', borderRadius: 'md', transitionDuration: 'fastest', transitionProperty: 'all' })}"
								style="transition: all 75ms ease-out; width: 25%; height: 24px;"
								role="button"
								tabindex="0"
								aria-label="Fastest transition demo"
							></div>
							<div
								class="transition-demo {sprinkles({ backgroundColor: 'info-500', padding: '3', borderRadius: 'md', transitionDuration: 'fast' })}"
								style="transition: all 150ms ease-out; width: 25%; height: 24px;"
								role="button"
								tabindex="0"
								aria-label="Fast transition demo"
							></div>
							<div
								class="transition-demo {sprinkles({ backgroundColor: 'info-500', padding: '3', borderRadius: 'md', transitionDuration: 'normal' })}"
								style="transition: all 300ms ease-out; width: 25%; height: 24px;"
								role="button"
								tabindex="0"
								aria-label="Normal transition demo"
							></div>
							<div
								class="transition-demo {sprinkles({ backgroundColor: 'info-500', padding: '3', borderRadius: 'md', transitionDuration: 'slow' })}"
								style="transition: all 500ms ease-out; width: 25%; height: 24px;"
								role="button"
								tabindex="0"
								aria-label="Slow transition demo"
							></div>
						</div>
						<div class={sprinkles({ fontSize: 'xs', color: 'neutral-600', marginTop: '2' })}>
							fastest • fast • normal • slow (hover to see transitions)
						</div>
					</div>
				</div>

				<!-- Media & Scrolling Utilities -->
				<div class={`${card}`}>
					<div class={cardBody}>
						<h4 class={sprinkles({ fontSize: 'lg', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">Aspect Ratio & Object Fit</h4>
						<div class={sprinkles({ display: 'grid', gridTemplateColumns: 'cols3', gap: '3' })}>
							<div class={sprinkles({ backgroundColor: 'neutral-200', borderRadius: 'md', aspectRatio: 'square' })} style="overflow: hidden;">
								<img src="/favicon.svg" alt="square" class={sprinkles({ width: 'full', height: 'full', objectFit: 'cover' })} />
							</div>
							<div class={sprinkles({ backgroundColor: 'neutral-200', borderRadius: 'md', aspectRatio: 'video' })} style="overflow: hidden;">
								<img src="/favicon.svg" alt="video" class={sprinkles({ width: 'full', height: 'full', objectFit: 'contain', objectPosition: 'center' })} />
							</div>
							<div class={sprinkles({ backgroundColor: 'neutral-200', borderRadius: 'md', aspectRatio: 'portrait' })} style="overflow: hidden;">
								<img src="/favicon.svg" alt="portrait" class={sprinkles({ width: 'full', height: 'full', objectFit: 'cover', objectPosition: 'top' })} />
							</div>
						</div>

						<h4 class={sprinkles({ fontSize: 'lg', fontWeight: 'semibold', color: 'neutral-900' })} style="margin: 1rem 0;">Scroll Snap & Overscroll</h4>
						<div class={`${reel} ${sprinkles({ scrollSnapType: 'x-mandatory', overscrollBehavior: 'contain' })}`}>
							{#each Array(8) as _, i}
								<span class={sprinkles({ display: 'inline-block', backgroundColor: 'primary-100', color: 'primary-800', borderRadius: 'md', paddingX: '3', paddingY: '2', scrollSnapAlign: 'center', marginRight: '4' })}>Snap {i + 1}</span>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Grid System Section -->
	<section class={section}>
		<div class={containerResponsive}>
			<h2 class={sprinkles({ fontSize: '3xl', fontWeight: 'semibold', color: 'neutral-900' })} style="text-align: center;">
				Grid System
			</h2>
			<p class={sprinkles({ fontSize: 'lg', color: 'neutral-700' })} style="text-align: center; margin-bottom: 3rem; max-width: 48rem; margin-left: auto; margin-right: auto;">
				Feature-complete CSS Grid utilities: templates, auto-flow, tracks, placement, and line spans.
			</p>

			<div class={gridAutoFitMedium}>
				<!-- Templates: Auto-fit vs Auto-fill -->
				<div class={card}>
					<div class={cardBody}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">Templates: Auto-fit</h3>
						<div class={sprinkles({ display: 'grid', gridTemplateColumns: 'autoFit150', gap: '4' })}>
							{#each Array(8) as _, i}
								<div class={sprinkles({ backgroundColor: 'primary-100', borderRadius: 'md', padding: '4', color: 'primary-800', fontWeight: 'medium', textAlign: 'center' })}>
									Item {i + 1}
								</div>
							{/each}
						</div>
					</div>
				</div>

				<div class={card}>
					<div class={cardBody}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">Templates: Auto-fill</h3>
						<div class={sprinkles({ display: 'grid', gridTemplateColumns: 'autoFill150', gap: '4' })}>
							{#each Array(8) as _, i}
								<div class={sprinkles({ backgroundColor: 'success-100', borderRadius: 'md', padding: '4', color: 'success-800', fontWeight: 'medium', textAlign: 'center' })}>
									Item {i + 1}
								</div>
							{/each}
						</div>
					</div>
				</div>

				<!-- Repeat Columns -->
				<div class={card}>
					<div class={cardBody}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">Templates: Repeat Columns</h3>
						<div class={sprinkles({ display: 'grid', gridTemplateColumns: 'cols4', gap: '3' })}>
							{#each Array(8) as _, i}
								<div class={sprinkles({ backgroundColor: 'warning-100', borderRadius: 'md', padding: '3', color: 'warning-900', fontWeight: 'medium', textAlign: 'center' })}>Col {i + 1}</div>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<!-- Lines & Spans -->
			<div class={gridAutoFitMedium} style="margin-top: 2rem;">
				<div class={card}>
					<div class={cardBody}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">Grid Lines & Spans</h3>
						<div class={sprinkles({ display: 'grid', gridTemplateColumns: 'cols6', gap: '3' })}>
							<div class={sprinkles({ backgroundColor: 'info-100', borderRadius: 'md', padding: '3', gridColumnStart: 'span2', gridColumnEnd: 'span2', textAlign: 'center', color: 'info-900', fontWeight: 'medium' })}>span 2</div>
							<div class={sprinkles({ backgroundColor: 'info-100', borderRadius: 'md', padding: '3', gridColumnStart: 'span3', gridColumnEnd: 'span3', textAlign: 'center', color: 'info-900', fontWeight: 'medium' })}>span 3</div>
							<div class={sprinkles({ backgroundColor: 'info-100', borderRadius: 'md', padding: '3', textAlign: 'center', color: 'info-900', fontWeight: 'medium' })}>auto</div>
							<div class={sprinkles({ backgroundColor: 'info-100', borderRadius: 'md', padding: '3', gridColumnStart: '2', gridColumnEnd: '5', textAlign: 'center', color: 'info-900', fontWeight: 'medium' })}>2 ➝ 5</div>
						</div>
					</div>
				</div>

				<div class={card}>
					<div class={cardBody}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">Auto Flow & Tracks</h3>
						<div class={sprinkles({ display: 'grid', gridTemplateColumns: 'cols4', gap: '3', gridAutoFlow: 'row dense', gridAutoRows: 'minmaxFr' })}>
							{#each [24, 40, 32, 56, 24, 32, 48, 28] as h, i}
								<div class={sprinkles({ backgroundColor: 'neutral-100', borderRadius: 'md', padding: '3', color: 'neutral-900', fontWeight: 'medium', textAlign: 'center' })} style={`height: ${h / 4}rem; display: flex; align-items: center; justify-content: center;`}>
									Tile {i + 1}
								</div>
							{/each}
						</div>
						<div class={sprinkles({ fontSize: 'xs', color: 'neutral-600', marginTop: '2' })}>
							gridAutoFlow: 'row dense' • gridAutoRows: 'minmaxFr'
						</div>
					</div>
				</div>
			</div>

			<!-- Placement & Alignment -->
			<div class={gridAutoFitMedium} style="margin-top: 2rem;">
				<div class={card}>
					<div class={cardPadding}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">Place Items</h3>
						<div class={sprinkles({ display: 'grid', gridTemplateColumns: 'cols3', gap: '3', placeItems: 'center' })} style="height: 180px;">
							{#each Array(6) as _, i}
								<div class={sprinkles({ backgroundColor: 'neutral-200', borderRadius: 'md', padding: '3', color: 'neutral-800', fontWeight: 'medium' })}>Item {i + 1}</div>
							{/each}
						</div>
						<div class={sprinkles({ fontSize: 'xs', color: 'neutral-600', marginTop: '2' })}>placeItems: 'center'</div>
					</div>
				</div>

				<div class={card}>
					<div class={cardPadding}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">Place Content</h3>
						<div class={sprinkles({ display: 'grid', gridTemplateColumns: 'cols3', gap: '3', placeContent: 'center' })} style="height: 180px;">
							{#each Array(6) as _, i}
								<div class={sprinkles({ backgroundColor: 'neutral-200', borderRadius: 'md', padding: '3', color: 'neutral-800', fontWeight: 'medium' })}>Item {i + 1}</div>
							{/each}
						</div>
						<div class={sprinkles({ fontSize: 'xs', color: 'neutral-600', marginTop: '2' })}>placeContent: 'center'</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Typography: Font Families -->
	<section class={sectionAlt}>
		<div class={containerResponsive}>
			<h2 class={sprinkles({ fontSize: '3xl', fontWeight: 'semibold', color: 'neutral-900' })} style="text-align: center;">Typography: Font Families</h2>
			<p class={sprinkles({ fontSize: 'lg', color: 'neutral-700' })} style="text-align: center; margin-bottom: 3rem; max-width: 48rem; margin-left: auto; margin-right: auto;">
				Choose from sans, serif, and mono families.
			</p>
			<div class={gridAutoFitMedium}>
				<div class={card}><div class={cardPadding}><div class={sprinkles({ fontFamily: 'sans', fontSize: 'lg', color: 'neutral-900' })}>Sans: The quick brown fox jumps over the lazy dog.</div></div></div>
				<div class={card}><div class={cardPadding}><div class={sprinkles({ fontFamily: 'serif', fontSize: 'lg', color: 'neutral-900' })}>Serif: The quick brown fox jumps over the lazy dog.</div></div></div>
				<div class={card}><div class={cardPadding}><div class={sprinkles({ fontFamily: 'mono', fontSize: 'lg', color: 'neutral-900' })}>Mono: const hello = 'world';</div></div></div>
			</div>
		</div>
	</section>

	<!-- Transitions: Properties & Easing -->
	<section class={section}>
		<div class={containerResponsive}>
			<h2 class={sprinkles({ fontSize: '3xl', fontWeight: 'semibold', color: 'neutral-900' })} style="text-align: center;">Transitions: Properties & Easing</h2>
			<p class={sprinkles({ fontSize: 'lg', color: 'neutral-700' })} style="text-align: center; margin-bottom: 3rem; max-width: 48rem; margin-left: auto; margin-right: auto;">
				Transition properties (colors, transform, shadow) and timing functions.
			</p>
			<div class={gridAutoFitMedium}>
					<div class={card}>
						<div class={cardPadding}>
							<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">Timing Functions</h3>
							<div class={sprinkles({ display: 'flex', flexWrap: 'wrap' })} style="gap: 0.75rem;">
								{#each timingFunctions as tf}
									<div
										class={`transition-timing-demo ${sprinkles({ backgroundColor: 'primary-500', color: 'white', borderRadius: 'md', paddingX: '3', paddingY: '2', transitionDuration: 'slow', transitionProperty: 'transform', transitionTimingFunction: tf })}`}
										role="button"
										aria-label={`Timing function ${tf}`}
									>
										{tf}
									</div>
								{/each}
							</div>
						</div>
					</div>

				<div class={card}>
					<div class={cardPadding}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">Transition Properties</h3>
						<div class={sprinkles({ display: 'flex', flexWrap: 'wrap' })} style="gap: 0.75rem;">
							<div class="transition-color-demo {sprinkles({ backgroundColor: 'primary-500', color: 'white', borderRadius: 'md', paddingX: '3', paddingY: '2', transitionDuration: 'normal', transitionProperty: 'colors' })}">colors</div>
							<div class="transition-transform-demo {sprinkles({ backgroundColor: 'success-500', color: 'white', borderRadius: 'md', paddingX: '3', paddingY: '2', transitionDuration: 'normal', transitionProperty: 'transform' })}">transform</div>
							<div class="transition-shadow-demo {sprinkles({ backgroundColor: 'warning-500', color: 'white', borderRadius: 'md', paddingX: '3', paddingY: '2', transitionDuration: 'normal', transitionProperty: 'shadow', boxShadow: 'sm' })}">shadow</div>
						</div>
						<div class={sprinkles({ fontSize: 'xs', color: 'neutral-600', marginTop: '2' })}>Hover the chips</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Responsive System Demos: Orientation, Container Query Switcher -->
	<section class={section}>
		<div class={responsiveSystemShell}>
			<h2 class={sprinkles({ fontSize: '3xl', fontWeight: 'semibold', color: 'neutral-900' })} style="text-align: center;">Responsive System</h2>
			<p class={sprinkles({ fontSize: 'lg', color: 'neutral-700' })} style="text-align: center; margin-bottom: 2rem; max-width: 48rem; margin-left: auto; margin-right: auto;">Orientation helpers, container-query tokens, and a CQ-powered switcher.</p>

			<div class={`${gridAutoFitMedium}`}>
				<div class={card}>
					<div class={cardPadding}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">Orientation Helpers</h3>
						<p class={showPortrait}>Currently in <strong>portrait</strong> orientation.</p>
						<p class={showLandscape}>Currently in <strong>landscape</strong> orientation.</p>
					</div>
				</div>

				<div class={card}>
					<div class={cardPadding}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">Container Query Switcher</h3>
						<div class={`${cq} ${switcherAtMd}`}>
							<div class={sprinkles({ backgroundColor: 'primary-100', padding: '4', borderRadius: 'md' })}>Pane A</div>
							<div class={sprinkles({ backgroundColor: 'success-100', padding: '4', borderRadius: 'md' })}>Pane B</div>
							<div class={sprinkles({ backgroundColor: 'warning-100', padding: '4', borderRadius: 'md' })}>Pane C</div>
						</div>
						<p class={sprinkles({ fontSize: 'xs', color: 'neutral-600', marginTop: '2' })}>Stacks vertically when its container is ≤ {containerBreakpointValues.md} wide.</p>
					</div>
				</div>

				<div class={card}>
					<div class={cardPadding}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">Stack & Cluster</h3>
						<div class={stack}>
							<div class={sprinkles({ backgroundColor: 'neutral-200', borderRadius: 'md', padding: '3', color: 'neutral-900' })}>Stack item 1</div>
							<div class={sprinkles({ backgroundColor: 'neutral-200', borderRadius: 'md', padding: '3', color: 'neutral-900' })}>Stack item 2</div>
							<div class={sprinkles({ backgroundColor: 'neutral-200', borderRadius: 'md', padding: '3', color: 'neutral-900' })}>Stack item 3</div>
						</div>
						<div class={cluster} style="margin-top: 0.75rem;">
							{#each ['Chip A','Chip B','Chip C','Chip D','Chip E'] as label}
								<span class={sprinkles({ backgroundColor: 'secondary-500', color: 'on-secondary', paddingX: '3', paddingY: '1', borderRadius: 'full', fontSize: 'xs', boxShadow: 'sm' })}>{label}</span>
							{/each}
						</div>
						<div class={sprinkles({ fontSize: 'xs', color: 'neutral-600', marginTop: '2' })}>Stack = vertical rhythm; Cluster = wrapped row of chips with gap.</div>
					</div>
				</div>

				<div class={card}>
					<div class={cardPadding}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">CQ Sidebar</h3>
						<div class={`${cq} ${sidebar}`}>
							<div class={sprinkles({ backgroundColor: 'neutral-100', borderRadius: 'md', padding: '4', color: 'neutral-900' })}>
								<small class={sprinkles({ color: 'neutral-700' })}>Main</small>
								<p>When wide: two columns. When ≤ {containerBreakpointValues.lg}: stack.</p>
							</div>
							<aside class={sprinkles({ backgroundColor: 'neutral-100', borderRadius: 'md', padding: '4', color: 'neutral-900' })}>
								<small class={sprinkles({ color: 'neutral-700' })}>Sidebar</small>
								<p>Min 16rem, max ~28% when roomy.</p>
							</aside>
						</div>
					</div>
				</div>

				<!-- Container Query Tokens Info -->
				<div class={card}>
					<div class={cardPadding}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 0.75rem;">Container Query Tokens</h3>
						<div class={sprinkles({ fontSize: 'sm', color: 'neutral-700' })} style="margin-bottom: 0.75rem;">Named rem-based breakpoints for container queries:</div>
						<ul class={sprinkles({ fontSize: 'xs', color: 'neutral-700' })} style="list-style: none; padding: 0; margin: 0 0 0.75rem 0; display: grid; gap: 0.25rem;">
							{#each Object.entries(containerBreakpointValues) as [k, v]}
								<li><span class={sprinkles({ fontFamily: 'mono', color: 'neutral-800' })}>{k}</span>: <span class={sprinkles({ fontFamily: 'mono', color: 'neutral-700' })}>{v}</span></li>
							{/each}
						</ul>
						<div class={sprinkles({ fontSize: 'xs', color: 'neutral-700' })}>
							<div><span class={sprinkles({ fontFamily: 'mono', color: 'neutral-800' })}>cqMin.md</span> → <span class={sprinkles({ fontFamily: 'mono', color: 'neutral-700' })}>{cqMin.md}</span></div>
							<div><span class={sprinkles({ fontFamily: 'mono', color: 'neutral-800' })}>cqMax.md</span> → <span class={sprinkles({ fontFamily: 'mono', color: 'neutral-700' })}>{cqMax.md}</span></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Full-bleed fluid band example -->
	<section class={`${sectionAlt} ${noPaddingX}`}>
		<div class={`${containerFluid}`}>
			<div class={sprinkles({ backgroundColor: 'accent-strong', color: 'on-secondary', textAlign: 'center', paddingY: '6', boxShadow: 'lg' })}>
				Full‑bleed band using containerFluid
			</div>
		</div>
	</section>

	<!-- Footer -->
	<div class={`${footer} ${sprinkles({ backgroundColor: 'surface-translucent', borderWidth: 'thin', borderColor: 'accent-border', backdropFilter: 'blurSm' })}`}>
		<div class={containerResponsive}>
			<p class={sprinkles({ fontSize: 'sm', color: 'neutral-400' })} style="text-align: center;">
				Milkshake UI - A pure CSS utility framework built with vanilla-extract and sprinkles.
			</p>
		</div>
	</div>
</main>

<style>
	.hero-shell {
		position: relative;
		isolation: isolate;
		box-shadow: 0 24px 64px color-mix(in srgb, var(--semantic-overlay-strong) 15%, transparent);
		overflow: hidden;
		background: transparent;
	}

	.hero-shell__visual {
		position: absolute;
		inset: 0;
		pointer-events: none;
		opacity: 1;
		z-index: 0;
	}

	.hero-shell__visual svg {
		width: 100%;
		height: 100%;
		display: block;
	}

	.hero-shell__content {
		position: relative;
		z-index: 1;
	}

	.hero-shell__content h1,
	.hero-shell__content p {
		text-shadow: 0 10px 40px rgba(0, 0, 0, 0.24);
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-shell__visual .smil {
			display: none !important;
		}
	}

	.transition-demo:hover {
		transform: scale(1.1);
	}
	.transition-timing-demo:hover {
		transform: translateY(-12px);
	}
	.transition-color-demo:hover {
		background-color: var(--color-primary-600);
	}
	.transition-transform-demo:hover {
		transform: rotate(-2deg) scale(1.05);
	}
	.transition-shadow-demo:hover {
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.2);
	}
</style>

