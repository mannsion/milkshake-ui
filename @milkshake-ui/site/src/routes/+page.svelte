<script lang="ts">
	import { sprinkles } from '@milkshake-ui/core';
	import {
		// Sections
		main,
		hero,
		section,
		sectionAlt,
		footer,
		themeIndicator,
		// Layout
		container,
		// Grid
		gridAutoFit,
		gridAutoFitSmall,
		gridAutoFitMedium,
		// Components
		buttonPrimary,
		buttonSecondary,
		card,
		cardPadding,
	} from '@milkshake-ui/core';
	import { getThemeContext } from '$lib/theme-context';

	// Get theme context
	const { currentTheme, toggleTheme } = getThemeContext();

	// Demo data
	const colorShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] as const;
	const spacingValues = ['0', '4', '6', '8', '12', '16', '24', '32'] as const;
</script>

<main class={main}>
	<!-- Hero Section -->
	<section class={hero}>
		<div class={container}>
			<div class={sprinkles({ display: 'flex', alignItems: 'center', justifyContent: 'center' })} style="flex-direction: column; text-align: center;">
				<h1 class={sprinkles({ fontSize: '4xl', fontWeight: 'bold', color: 'neutral-900' })}>
					Milkshake UI
				</h1>
				<p class={sprinkles({ fontSize: 'lg', color: 'neutral-700' })} style="margin-bottom: 2rem; max-width: 48rem;">
					A pure CSS utility framework built with vanilla-extract and sprinkles.
					Framework-agnostic, zero runtime, and fully responsive.
				</p>
				<div class={sprinkles({ display: 'flex', flexWrap: 'wrap' })} style="gap: 1rem; justify-content: center;">
					<button class={buttonPrimary} style="padding: 0.75rem 1.5rem;">
						Get Started
					</button>
					<button class={buttonSecondary} style="padding: 0.75rem 1.5rem;">
						View Documentation
					</button>
					<!-- Theme Toggle Button -->
					<button
						class={buttonSecondary}
						style="padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.5rem;"
						onclick={toggleTheme}
						aria-label="Toggle theme"
					>
						{#if $currentTheme === 'light'}
							<span>🌙</span>
							<span class={sprinkles({ fontSize: 'sm' })}>Dark</span>
						{:else}
							<span>☀️</span>
							<span class={sprinkles({ fontSize: 'sm' })}>Light</span>
						{/if}
					</button>
				</div>
			</div>
		</div>
	</section>

	<!-- Theme Showcase Section -->
	<section class={sectionAlt}>
		<div class={container}>
			<h2 class={sprinkles({ fontSize: '3xl', fontWeight: 'semibold', color: 'neutral-900', textAlign: 'center' })}>
				🎨 Dynamic Theming System
			</h2>
			<p class={sprinkles({ fontSize: 'lg', color: 'neutral-700' })} style="text-align: center; margin-bottom: 3rem; max-width: 48rem; margin-left: auto; margin-right: auto;">
				Switch between light and dark themes to see how all components adapt automatically.
				The theming system uses CSS custom properties for seamless theme switching.
			</p>

			<div class={gridAutoFit}>
				<!-- Theme-aware Card -->
				<div class={card}>
					<div class={cardPadding}>
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
				<div class={card}>
					<div class={cardPadding}>
						<h3 class={sprinkles({ fontSize: 'xl', fontWeight: 'semibold', color: 'neutral-900' })}>
							Interactive States
						</h3>
						<div class={sprinkles({ display: 'flex', flexDirection: 'column' })} style="gap: 0.75rem;">
							<button class={buttonPrimary} style="padding: 0.5rem 1rem; font-size: 0.875rem;">
								Primary Button
							</button>
							<button class={buttonSecondary} style="padding: 0.5rem 1rem; font-size: 0.875rem;">
								Secondary Button
							</button>
						</div>
					</div>
				</div>

				<!-- Typography Showcase -->
				<div class={card}>
					<div class={cardPadding}>
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
			<div class={themeIndicator}>
				<p class={sprinkles({ fontSize: 'sm', color: 'primary-700', fontWeight: 'medium' })}>
					Current Theme: <strong>{$currentTheme === 'light' ? '☀️ Light' : '🌙 Dark'}</strong>
				</p>
			</div>
		</div>
	</section>

	<!-- Colors Section -->
	<section class={section}>
		<div class={container}>
			<h2 class={sprinkles({ fontSize: '3xl', fontWeight: 'semibold', color: 'neutral-900' })} style="text-align: center;">
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
		<div class={container}>
			<h2 class={sprinkles({ fontSize: '3xl', fontWeight: 'semibold', color: 'neutral-900' })} style="text-align: center;">
				Typography
			</h2>
			<p class={sprinkles({ fontSize: 'lg', color: 'neutral-700' })} style="text-align: center; margin-bottom: 3rem; max-width: 48rem; margin-left: auto; margin-right: auto;">
				Comprehensive typography system with multiple font families and sizes.
			</p>

			<div class={gridAutoFitMedium}>
				<!-- Font Sizes -->
				<div class={card}>
					<div class={cardPadding}>
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
				<div class={card}>
					<div class={cardPadding}>
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
		<div class={container}>
			<h2 class={sprinkles({ fontSize: '3xl', fontWeight: 'semibold', color: 'neutral-900' })} style="text-align: center;">
				Spacing
			</h2>
			<p class={sprinkles({ fontSize: 'lg', color: 'neutral-700' })} style="text-align: center; margin-bottom: 3rem; max-width: 48rem; margin-left: auto; margin-right: auto;">
				Consistent spacing scale for margins, padding, and layout.
			</p>

			<div class={gridAutoFitSmall}>
				{#each ['1', '2', '3', '4', '6', '8', '12', '16', '24', '32'] as space}
					<div class={card}>
						<div class={cardPadding}>
							<div class={sprinkles({ backgroundColor: 'primary-500', height: space === '1' ? '1' : space === '2' ? '2' : space === '3' ? '3' : space === '4' ? '4' : space === '6' ? '6' : space === '8' ? '8' : space === '12' ? '12' : space === '16' ? '16' : space === '24' ? '24' : '32', width: 'full' })}></div>
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
		<div class={container}>
			<h2 class={sprinkles({ fontSize: '3xl', fontWeight: 'semibold', color: 'neutral-900' })} style="text-align: center;">
				Framework Utilities
			</h2>
			<p class={sprinkles({ fontSize: 'lg', color: 'neutral-700' })} style="text-align: center; margin-bottom: 3rem; max-width: 48rem; margin-left: auto; margin-right: auto;">
				Core utility classes for colors, spacing, borders, shadows, and layout.
			</p>

			<div class={gridAutoFitMedium}>
				<!-- Box Shadows -->
				<div class={card}>
					<div class={cardPadding}>
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
				<div class={card}>
					<div class={cardPadding}>
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
				<div class={card}>
					<div class={cardPadding}>
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
				<div class={card}>
					<div class={cardPadding}>
						<h4 class={sprinkles({ fontSize: 'lg', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">
							Border Radius
						</h4>
						<div class={sprinkles({ display: 'flex', flexDirection: 'row' })} style="gap: 0.75rem; flex-wrap: wrap;">
							<div class={sprinkles({ backgroundColor: 'primary-500', padding: '3', borderRadius: 'sm' })} style="width: 25%; height: 24px;"></div>
							<div class={sprinkles({ backgroundColor: 'primary-500', padding: '3', borderRadius: 'md' })} style="width: 25%; height: 24px;"></div>
							<div class={sprinkles({ backgroundColor: 'primary-500', padding: '3', borderRadius: 'lg' })} style="width: 25%; height: 24px;"></div>
							<div class={sprinkles({ backgroundColor: 'primary-500', padding: '3', borderRadius: 'xl' })} style="width: 25%; height: 24px;"></div>
							<div class={sprinkles({ backgroundColor: 'primary-500', padding: '3', borderRadius: 'full' })} style="width: 25%; height: 24px;"></div>
						</div>
						<div class={sprinkles({ fontSize: 'xs', color: 'neutral-600', marginTop: '2' })}>
							sm • md • lg • xl • full
						</div>
					</div>
				</div>

				<!-- Display & Position -->
				<div class={card}>
					<div class={cardPadding}>
						<h4 class={sprinkles({ fontSize: 'lg', fontWeight: 'semibold', color: 'neutral-900' })} style="margin-bottom: 1rem;">
							Display & Position
						</h4>
						<div class={sprinkles({ display: 'flex', flexDirection: 'row' })} style="gap: 0.75rem; flex-wrap: wrap;">
							<div class={sprinkles({ backgroundColor: 'success-500', padding: '3', borderRadius: 'md', display: 'flex', alignItems: 'center', justifyContent: 'center' })} style="width: 25%; height: 24px;">
								<span class={sprinkles({ fontSize: 'xs', color: 'white', fontWeight: 'bold' })}>F</span>
							</div>
							<div class={sprinkles({ backgroundColor: 'warning-500', padding: '3', borderRadius: 'md', display: 'grid', alignItems: 'center', justifyContent: 'center' })} style="width: 25%; height: 24px;">
								<span class={sprinkles({ fontSize: 'xs', color: 'white', fontWeight: 'bold' })}>G</span>
							</div>
							<div class={sprinkles({ backgroundColor: 'error-500', padding: '3', borderRadius: 'md', position: 'relative' })} style="width: 25%; height: 24px;">
								<span class={sprinkles({ fontSize: 'xs', color: 'white', fontWeight: 'bold' })}>R</span>
							</div>
						</div>
						<div class={sprinkles({ fontSize: 'xs', color: 'neutral-600', marginTop: '2' })}>
							flex • grid • relative
						</div>
					</div>
				</div>

				<!-- Transitions -->
				<div class={card}>
					<div class={cardPadding}>
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
			</div>
		</div>
	</section>

	<!-- Footer -->
	<div class={footer}>
		<div class={container}>
			<p class={sprinkles({ fontSize: 'sm', color: 'neutral-400' })} style="text-align: center;">
				Milkshake UI - A pure CSS utility framework built with vanilla-extract and sprinkles.
			</p>
		</div>
	</div>
</main>

<style>
	.transition-demo:hover {
		transform: scale(1.1);
	}
</style>