import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';
import type { ThemeName } from '@milkshake-ui/core';
import { fontVariantOrder, type FontVariant } from './theme-overrides/font-overrides.css';

// Theme context type
interface ThemeContext {
  currentTheme: typeof themeStore;
  setTheme: (theme: ThemeName) => void;
  toggleTheme: () => void;
  currentFontVariant: typeof fontVariantStore;
  setFontVariant: (variant: FontVariant) => void;
  cycleFontVariant: () => void;
}

// Context key
const THEME_CONTEXT_KEY = 'milkshake-theme-context';

const THEME_SEQUENCE: ThemeName[] = [
  'zigrok',
  'strawberry-milkshake',
  'light',
  'dark',
  'dark-milk',
  'high-contrast-light',
  'high-contrast-dark',
  'high-contrast-dark-milk',
];

const FONT_VARIANT_SEQUENCE = fontVariantOrder;

// Create theme store
const themeStore = writable<ThemeName>('zigrok');
const fontVariantStore = writable<FontVariant>('sans');

// Initialize theme from localStorage or system preference
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('milkshake-theme') as ThemeName;
  const savedFontVariant = localStorage.getItem('milkshake-font-variant') as FontVariant;
  if (
    savedTheme &&
    THEME_SEQUENCE.includes(savedTheme)
  ) {
    themeStore.set(savedTheme);
  } else {
    themeStore.set('zigrok');
  }

  if (savedFontVariant && FONT_VARIANT_SEQUENCE.includes(savedFontVariant)) {
    fontVariantStore.set(savedFontVariant);
  } else {
    fontVariantStore.set('sans');
  }
}

// Subscribe to theme changes and save to localStorage
themeStore.subscribe((theme) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('milkshake-theme', theme);
  }
});

fontVariantStore.subscribe((variant) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('milkshake-font-variant', variant);
  }
});

// Create theme context
export function createThemeContext(
  initialTheme: ThemeName = 'zigrok',
  initialFontVariant: FontVariant = 'sans'
): ThemeContext {
  // Set initial theme
  themeStore.set(initialTheme);
  fontVariantStore.set(initialFontVariant);

  const setTheme = (theme: ThemeName) => {
    themeStore.set(theme);
  };

  const toggleTheme = () => {
    themeStore.update((current) => {
      const index = THEME_SEQUENCE.indexOf(current);
      if (index === -1) {
        return 'zigrok';
      }
      return THEME_SEQUENCE[(index + 1) % THEME_SEQUENCE.length];
    });
  };

  const setFontVariant = (variant: FontVariant) => {
    fontVariantStore.set(variant);
  };

  const cycleFontVariant = () => {
    fontVariantStore.update((current) => {
      const index = FONT_VARIANT_SEQUENCE.indexOf(current);
      if (index === -1) {
        return 'sans';
      }
      return FONT_VARIANT_SEQUENCE[(index + 1) % FONT_VARIANT_SEQUENCE.length];
    });
  };

  return {
    currentTheme: themeStore,
    setTheme,
    toggleTheme,
    currentFontVariant: fontVariantStore,
    setFontVariant,
    cycleFontVariant,
  };
}

// Set theme context
export function setThemeContext(context: ThemeContext) {
  setContext(THEME_CONTEXT_KEY, context);
}

// Get theme context
export function getThemeContext(): ThemeContext {
  const context = getContext(THEME_CONTEXT_KEY) as ThemeContext;
  if (!context) {
    throw new Error('Theme context not found. Make sure to wrap your app with ThemeProvider.');
  }
  return context;
}

// Export the theme store for direct use
export { themeStore, fontVariantStore };