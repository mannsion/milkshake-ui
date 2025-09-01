<script lang="ts">
  import { createThemeContext, setThemeContext, themeStore, fontVariantStore } from './theme-context';
  import {
    lightTheme,
    darkTheme,
    darkMilkTheme,
    highContrastLightTheme,
    highContrastDarkTheme,
    highContrastDarkMilkTheme,
    zigrokTheme,
    strawberryMilkshakeTheme,
    colorMappings,
  } from '@milkshake-ui/core';
  import { fontOverrides, type FontVariant } from './theme-overrides/font-overrides.css';

  interface Props {
    children: any;
    initialTheme?:
      | 'zigrok'
  | 'strawberry-milkshake'
      | 'light'
      | 'dark'
      | 'dark-milk'
      | 'high-contrast-light'
      | 'high-contrast-dark'
      | 'high-contrast-dark-milk';
    initialFontVariant?: FontVariant;
  }

  let { children, initialTheme = 'zigrok', initialFontVariant = 'sans' }: Props = $props();

  // Create theme context
  const themeContext = createThemeContext(initialTheme, initialFontVariant);
  setThemeContext(themeContext);

  const fontOverrideClasses = Object.values(fontOverrides);

  const resolveThemeClasses = (theme: string) => {
    switch (theme) {
      case 'light':
        return [lightTheme, colorMappings];
      case 'dark':
        return [darkTheme, colorMappings];
      case 'dark-milk':
        return [darkMilkTheme, colorMappings];
      case 'strawberry-milkshake':
        return [strawberryMilkshakeTheme, colorMappings];
      case 'high-contrast-light':
        return [highContrastLightTheme, colorMappings];
      case 'high-contrast-dark':
        return [highContrastDarkTheme, colorMappings];
      case 'high-contrast-dark-milk':
        return [highContrastDarkMilkTheme, colorMappings];
      case 'zigrok':
      default:
        return [zigrokTheme, colorMappings];
    }
  };

  const resolveFontClass = (variant: FontVariant) => fontOverrides[variant] ?? fontOverrides.sans;

  // Apply theme class to document and mark styles as loaded
  $effect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const root = document.documentElement;
    const body = document.body;

    root.classList.remove(
      zigrokTheme,
  strawberryMilkshakeTheme,
      lightTheme,
      darkTheme,
      darkMilkTheme,
      highContrastLightTheme,
      highContrastDarkTheme,
      highContrastDarkMilkTheme,
      colorMappings,
      ...fontOverrideClasses
    );

    const theme = $themeStore;
    const fontVariant = $fontVariantStore;
    const themeClasses = resolveThemeClasses(theme);
    const fontClass = resolveFontClass(fontVariant);

    root.classList.add(fontClass, ...themeClasses);
    body.classList.add('styles-loaded');
  });
</script>

<!-- Apply theme classes to the root element -->
<div class={[resolveFontClass($fontVariantStore), ...resolveThemeClasses($themeStore)].join(' ')}>
  {@render children()}
</div>

<style>
  /* Theme styles are handled by vanilla-extract createTheme() */
  /* CSS custom properties are automatically applied via the theme classes */
</style>