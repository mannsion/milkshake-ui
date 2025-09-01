<script lang="ts">
  import ThemeProvider from '$lib/ThemeProvider.svelte';

  // Get the children from SvelteKit
  let { children } = $props();
</script>

<ThemeProvider initialTheme="zigrok">
  {@render children()}
</ThemeProvider>

<!-- Theme styles are injected by vanilla-extract classes on the root -->