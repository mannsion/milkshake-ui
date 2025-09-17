<script lang="ts">
  import ThemeProvider from '$lib/ThemeProvider.svelte';
  import { lightTheme, darkTheme } from '@milkshake-ui/core';

  // Get the children from SvelteKit
  let { children } = $props();
</script>

<ThemeProvider initialTheme="light">
  {@render children()}
</ThemeProvider>

<!-- Apply theme styles globally -->
<svelte:head>
  <style>
    /* Apply light theme by default */
    :global(.theme-light) {
      /* Light theme styles are applied via CSS custom properties */
    }

    /* Apply dark theme */
    :global(.theme-dark) {
      /* Dark theme styles are applied via CSS custom properties */
    }
  </style>
</svelte:head>