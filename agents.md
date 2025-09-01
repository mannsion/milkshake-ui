# Agent Playbook: Milkshake UI

## Snapshot of the current system
- **Source-only distribution**: `packages/core` exports raw TypeScript + vanilla-extract styles, no compiled output, aligning with the source-consumption model.
- **Design tokens**: Global themes cover colors, spacing, typography, borders, shadows, animations, layers, backdrops, and semantic mappings via `theme-contract.css.ts` and themed variants (`light`, `dark`, `high-contrast`, `zigrok`).
- **Utility layer**: `sprinkles.css.ts` wires responsive spacing, typography, grid, flex, layout, transitions, scroll, aspect ratio, object-fit, filters, and interaction tokens. Additional recipes live in `layout.css.ts`, `grid.css.ts`, `sections.css.ts`, `overlays.css.ts`, `typography-utilities.css.ts`, and `accessibility.css.ts`.
- **Components**: Early primitives (`button`, `button-group`, `card`, `list`, `select`) use vanilla-extract recipes with semantic tokens but lack slot APIs, variants beyond tone/size, and interaction helpers like disclosure state.
- **Demo site (`packages/site`)**: SvelteKit app showcases tokens and components, handles theme + font switching via context, and demonstrates utilities across colors, grids, spacing, transitions, CQ patterns, and orientation helpers.
- **Documentation gap**: `packages/core/ReadMe.md` is empty; knowledge currently lives only in source and the Svelte demo.

## Key observations & gaps versus major frameworks
- **Utility completeness (Tailwind, UnoCSS)**: Despite the refreshed spacing/size tokens, we still lack flex order/grow/shrink shorthands, `justify-self`/`align-self` responsive variants, transform/scale/rotate utilities, filter/backdrop presets parity, and stateful variants (hover/focus/active) within `sprinkles`.
- **Token alignment**: `sprinkles` typography tokens stop at `6xl`, but themes define up to `9xl`; there’s no negative letter-spacing beyond presets. Need consistent exports and TypeScript unions so consumers don’t hit missing token errors.
- **Color & semantic breadth (Chakra, Mantine)**: Only one primary/secondary palette; no grayscale aliases (e.g., `surface`, `muted`), no accent ramp beyond caramel, no brand-neutral tokens for charts beyond `dataVizPalettes`. Chakra/Mantine provide extensive semantic slots (info, destructive, outline) across components that Milkshake lacks.
- **Component coverage (Material UI, Radix UI)**: Lacking core patterns like inputs, textarea, checkbox, radio, switch, slider, tabs, accordion, dialog, tooltip, navbar, table, pagination. Current components don’t expose ARIA-driven behaviors the way Radix primitives do.
- **A11y & interaction**: No skip-link integration in demo, no focus-visible helpers on utility classes, no motion-reduced variants, and `autoStackButtonGroup` is referenced but not exported from `packages/core` (broken import).
- **Theming ergonomics**: Theme switching works but there’s no per-component theming guidance, no design token docs, no migration instructions, and no cross-theme visual regression tests.
- **Tooling & ecosystem**: No Storybook/Chromatic, no Playwright visual snapshots, no lint rules ensuring token usage, no automated contrast validation beyond `assertContrast` util.

## 2025 CSS feature coverage
- **Already shipping in Milkshake UI**
   - **Size container queries** (`containerType: inline-size`, `@container` usage) power `sidebar`, `switcher`, and responsive demos (`packages/core/layout.css.ts`, `packages/site/src/routes/+page.svelte`).
   - **Dynamic viewport units** (`dvh`, `svh`, `lvh`, `dvw`, `svw`) are exported via `sizeValues` so consumers can opt into the 2023–2024 viewport unit refresh without polyfills.
   - **Modern color functions**: `color-mix()` is used throughout the demo and available to downstream apps thanks to raw CSS exports; tokens are OKLCH-ready but not yet expressed in that colorspace.
   - **Scroll snapping ergonomics**: `reel` uses `scrollbar-gutter: stable`, `scroll-snap-type`, and scroll padding tokens to showcase the Scroll Snap & Overflow updates that hit evergreen browsers in 2024.
   - **User-preference media queries**: `prefers-reduced-motion` fallbacks are wired into animations and exported utilities, aligning with the Media Queries Level 5 baseline.

- **Partial / opt-in ready**
   - **`text-wrap: balance` / `pretty`** values ship in `sprinkles`, though no core recipes exercise them yet—demo updates can spotlight the feature.
   - **Relative viewport units in spacing tokens** mean new scale entries such as `px`, fractional steps, and large rem values are consumable, but components still rely on legacy spacing presets.
   - **Color level 4 spaces**: theme data sticks to sRGB hexes even though the design system could move to `oklch()` once palettes are rebuilt.

- **Not adopted yet (opportunities)**
   - **CSS Nesting**, **cascade layers (`@layer`)**, and **`@scope`**: vanilla-extract’s object syntax sidesteps raw CSS, so we lack native layering/nesting guarantees. Consider authoring helpers that emit layered classnames for predictable override behavior.
   - **`:has()` selectors** for parent-aware styling and **style container queries** (`@container style(...)`) are absent, limiting advanced responsive/stateful patterns.
   - **Subgrid**, **anchor positioning**, **scroll-driven animations (`animation-timeline`, `scroll-timeline`)**, and the **View Transitions API** are untouched; they represent future layout/animation differentiators once component coverage grows.
   - **`@property` custom property registration** and **`@starting-style`** could unlock smoother theme transitions but are not yet wired into tokens.
   - **font-palette / color-font controls** and **font-tech media queries** remain unexplored even though typography utilities could expose them for display-heavy themes.

> Next steps: audit where helpers can expose these APIs (e.g., a `layeredSprinkles()` experiment, scroll-timeline utilities, anchor-based overlay positioning) and update the demo to illustrate newly enabled tokens such as `textWrap="balance"` and dynamic viewport sizing.

## Phase 1 focus — expand the CSS layer
1. **Token & scale consolidation**
   - Sync `sprinkles` token maps with `themeContract` (expose `7xl`–`9xl`, add missing spacing steps, unify naming between `spacing.css.ts` and `tokens/spacing.ts`).
   - Add alias maps for semantic colors (`surface`, `on-surface`, `muted`, `subtle`) to reduce leakage of raw palette numbers.
   - Fill gaps in transitions (delay tokens, motion-safe variants) and radii (alias `pill`, `circle`).
2. **Utility breadth & DX**
   - Extend `sprinkles` with layout essentials: `flexGrow`, `flexShrink`, `flex`, `order`, `justifySelf`, `alignSelf`, `placeSelf`, `textWrap`, `textIndent`, `backgroundImage` presets, scroll snapping extras, transforms (`scale`, `rotate`, `translate` using spacing tokens).
   - Introduce state-aware recipes via vanilla-extract `recipes` (hover/focus/active variants) and consider per-utility `@media (prefers-reduced-motion)` guards.
   - Provide mixins for container queries and add `@container style()` helpers for repeated patterns (switcher, sidebar).
3. **Documentation & testing scaffolding**
   - Author `packages/core/ReadMe.md` with installation, theme usage, sprinkles guide, and component charter once phase deliverables ship.
   - Spin up automated checks: lint rule ensuring only exported tokens used, unit tests for `color-utils`, snapshot tests for theme contracts.
   - Fix `autoStackButtonGroup` export or replace with documented utility.
4. **Demo site enhancements**
   - Integrate skip link from `accessibility.css.ts`, add sections for new utilities, ensure all component permutations are showcased, and add interactive token inspector.

## Phase 2 roadmap — `@milkshake-ui/bindings-react`
1. **Foundation**
   - Create `packages/bindings-react` with TS + vanilla-extract setup, re-export sprinkles and tokens, and wrap CSS primitives in forwardRef components.
   - Establish strict prop typing using `Sprinkles` + variant unions, ensuring style props compose with `className`.
2. **Component architecture**
   - Build headless + styled components: `Button`, `ButtonGroup`, `Card`, `List`, `Select`, then expand to form inputs, switch, checkbox, radio using controlled/uncontrolled patterns.
   - Integrate Radix primitives where behavior is complex (dialog, tooltip) while layering Milkshake styling via `classNames` or `Slot` APIs.
   - Provide compound component patterns (e.g., `Card.Header`, `Card.Body`) with variant props.
3. **Theming & tokens**
   - Offer React hooks (`useTheme`, `ThemeProvider`) that mirror Svelte context logic, with SSR-safe hydration and color-mode synchronization.
   - Expose utility to merge custom theme tokens with defaults, plus CLI or script to scaffold themes.
4. **Testing & docs**
   - Add Storybook with MDX docs per component, use Chromatic or Loki for regressions.
   - Write React Testing Library specs and Playwright component tests.
   - Provide migration guides and usage snippets similar to Chakra docs.

## Operating instructions for future passes
- Treat `packages/core` as the single source of truth for tokens
- Track feature parity parity with Tailwind (utilities), Radix (a11y primitives), and Chakra (component coverage) to guide backlog prioritization.
- Keep the agent free to iterate quickly—no new self-imposed restrictions; prefer creating TODOs or backlog items in `agents.md` for clarity.
- Continuously verify the import surface (`index.ts`) matches what demos and consumers expect to avoid runtime gaps.
