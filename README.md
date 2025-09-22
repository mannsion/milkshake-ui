# Milkshake UI

> Version: 0.0.1 — Ultra Alpha — Work in Progress

Milkshake UI is a TypeScript‑as‑source design system and utility layer powered by vanilla‑extract and sprinkles. It delivers a unified theme contract, responsive utilities, and zero‑runtime CSS in a framework‑agnostic way.

## The problem it solves

Teams often juggle CSS frameworks, runtime CSS‑in‑JS, and ad‑hoc tokens. That leads to:
- Runtime overhead and flash of unstyled content from client‑side style injection
- Inconsistent theming and breakpoints across apps
- Weak type safety for tokens and utilities
- Painful reuse across frameworks and build tools

Milkshake UI flips this: ship typed source tokens/utilities, let the consumer’s build produce final CSS. No runtime styling, no lock‑in.

## Design goals

- TypeScript first: source‑only distribution for the core, rich IntelliSense and safety
- Zero runtime CSS: all styles generated at build time via vanilla‑extract
- Framework agnostic: works with Vite, Webpack, Rollup, etc., and any UI framework
- Consistent theming: one theme contract, light/dark variants, high‑contrast path
- Strong responsive system: mobile‑first with sm/md/lg/xl/2xl breakpoints
- Accessibility by default: visible focus, motion preferences, contrast‑aware palette
- Great DX: clear errors, ergonomic utilities (sprinkles), fast iteration

## Concept and architecture

- Core (source‑only): design tokens, theme contract, sprinkles utilities, and CSS building blocks authored in vanilla‑extract. Consumed directly as TypeScript so your app’s build emits CSS.
- Vite plugin (built for distribution): assists local dev with seamless TS source mapping for the core and Windows/Vite path normalization. Shipped as ESM + CJS with type definitions.
- Example site: a SvelteKit app demonstrating usage and theming.

## What it does (today)

- Tokens: colors, spacing, typography, borders, shadows, transitions
- Theme system: light/dark themes via a unified contract
- Utilities: responsive sprinkles, layout/grid/sections helpers
- Accessibility: focus styles, reduced‑motion support, contrast‑sane defaults
- Performance: tree‑shakable exports, zero runtime CSS‑in‑JS overhead

## Using it (high‑level)

- Add the Milkshake Vite plugin alongside `@vanilla-extract/vite-plugin` in Vite projects.
- Import tokens/utilities from `@milkshake-ui/core` directly in TypeScript.
- In monorepos, use `tsconfig` paths to point `@milkshake-ui/core` and the plugin to local TS entries for dev.

Example Vite setup (conceptual):

```ts
import { sveltekit } from '@sveltejs/kit/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import milkshakeSourcePlugin from '@milkshake-ui/vite-plugin';

export default {
  plugins: [
    vanillaExtractPlugin({ identifiers: 'debug' }),
    sveltekit(),
    milkshakeSourcePlugin(),
  ],
  css: { devSourcemap: true },
  ssr: { noExternal: ['@vanilla-extract/css'] },
};
```

Example tsconfig paths (for local dev):

```jsonc
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@milkshake-ui/core": ["../core/index.ts"],
      "@milkshake-ui/vite-plugin": ["../vite-plugin/index.ts"]
    }
  }
}
```

## Distribution model

- Core: distributed as TypeScript source (no prebuilt JS or d.ts). Consumers must use TypeScript; their build generates CSS via vanilla‑extract.
- Vite plugin: distributed as built JS (ESM + CJS) with `.d.ts` so tooling works out of the box.

## Status

- Version: 0.0.1 (Ultra Alpha)
- Work in Progress: expect rapid iteration and breaking changes.
- Not production‑ready yet.

## Roadmap (abridged)

- More component primitives and variants
- Theming ergonomics and high‑contrast polish
- Expanded accessibility checks and dev‑time warnings
- Visual regression tests and cross‑browser coverage
- Documentation site with comprehensive examples

## License

ISC © mannsion

Have questions or feedback? Please open an issue.