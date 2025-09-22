<script lang="ts">
  import { onMount } from 'svelte';
  import { createThemeContext, setThemeContext, themeStore } from './theme-context';
  import { lightTheme, darkTheme, colorMappings } from '@milkshake-ui/core';

  interface Props {
    children: any;
    initialTheme?: 'light' | 'dark';
  }

  let { children, initialTheme = 'light' }: Props = $props();

  // Create theme context
  const themeContext = createThemeContext(initialTheme);
  setThemeContext(themeContext);

  // Apply theme class to document and mark styles as loaded
  $effect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      const body = document.body;

      // Remove existing theme classes
      root.classList.remove(lightTheme, darkTheme, colorMappings);

      // Add current theme class and color mappings
      if ($themeStore === 'light') {
        root.classList.add(lightTheme, colorMappings);
      } else {
        root.classList.add(darkTheme, colorMappings);
      }

      // Mark styles as loaded to show content
      body.classList.add('styles-loaded');
    }
  });
</script>

<!-- Apply theme classes to the root element -->
<div class={$themeStore === 'light' ? `${lightTheme} ${colorMappings}` : `${darkTheme} ${colorMappings}`}>
  {@render children()}
</div>

<style>
  /* Theme styles are handled by vanilla-extract createTheme() */
  /* CSS custom properties are automatically applied via the theme classes */
</style>