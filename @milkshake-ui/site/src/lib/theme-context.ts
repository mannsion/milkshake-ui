import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';
import { lightTheme, darkTheme, type ThemeName } from '@milkshake-ui/core';

// Theme context type
interface ThemeContext {
  currentTheme: typeof themeStore;
  setTheme: (theme: ThemeName) => void;
  toggleTheme: () => void;
}

// Context key
const THEME_CONTEXT_KEY = 'milkshake-theme-context';

// Create theme store
const themeStore = writable<ThemeName>('light');

// Initialize theme from localStorage or system preference
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('milkshake-theme') as ThemeName;
  if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
    themeStore.set(savedTheme);
  } else {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    themeStore.set(prefersDark ? 'dark' : 'light');
  }
}

// Subscribe to theme changes and save to localStorage
themeStore.subscribe((theme) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('milkshake-theme', theme);
  }
});

// Create theme context
export function createThemeContext(initialTheme: ThemeName = 'light'): ThemeContext {
  // Set initial theme
  themeStore.set(initialTheme);

  const setTheme = (theme: ThemeName) => {
    themeStore.set(theme);
  };

  const toggleTheme = () => {
    themeStore.update(current => current === 'light' ? 'dark' : 'light');
  };

  return {
    currentTheme: themeStore,
    setTheme,
    toggleTheme,
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
export { themeStore };