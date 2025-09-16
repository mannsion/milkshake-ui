<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { typography } from '@milkshake-ui/core';

	let { children } = $props();
	const L = typography.text.label;
	const P = typography.text.paragraph;
	const themeClass = typography.typographyThemeClass;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class={themeClass} style="min-height: 100dvh; display: grid; grid-template-rows: auto 1fr;">
	<header style="display:flex; align-items:center; justify-content:space-between; padding: 0.75rem 1rem; border-bottom: 1px solid #e5e7eb;">
		<div class={L.normal} style="letter-spacing: .08em; text-transform: uppercase;">Milkshake UI</div>
		<nav style="display:flex; gap: 1rem;">
			<a href="/" class={L.subtle}>Home</a>
			<a href="/typography" class={L.subtle}>Typography</a>
		</nav>
	</header>
	<main style="padding: 1.25rem;">
		{@render children?.()}
	</main>
	<footer style="border-top: 1px solid #e5e7eb; padding: .75rem 1rem;">
		<p class={P.sm}>© {new Date().getFullYear()} Milkshake UI</p>
	</footer>
  
</div>
