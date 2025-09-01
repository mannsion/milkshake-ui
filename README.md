# Milkshake UI

> ⚠️ **Alpha 0.1 – work in progress.** Expect rapid iteration, sharp edges, and breaking changes. Please don’t ship this to production yet.

> 🌐 **Website:** https://www.milkshake-ui.com/

> **Important:** Milkshake UI was authored in partnership with an AI-heavy toolkit—an experiment we know is controversial, so we’re radically transparent about it.
> - [GitHub Copilot (Agentic mode)](https://github.com/features/copilot)
> - [GitHub Copilot CLI](https://github.com/github/copilot-cli)
> - [OpenAI GPT-5 family (GPT-5 · GPT-5 Codex · GPT-5 mini)](https://platform.openai.com/docs/models)
> - [Anthropic Claude Sonnet 4](https://www.anthropic.com/claude)
> - [Stability AI · Stable Diffusion SDXL](https://stability.ai/stable-diffusion)

> A zero-runtime, TypeScript-first UI framework that ships design tokens, responsive utilities, and composable recipes straight from source.

Milkshake UI exists for teams that want modern design system power without shipping a CSS runtime. We author everything—tokens, themes, utilities, recipes—in vanilla-extract and let consuming apps compile the CSS in their own toolchain. The result: instant theming, typed ergonomics, and portable styling that feels great to build with.

---

## AI collaboration at a glance

- **Copilot + Codex workflow.** Iterations run through VS Code Copilot in agent mode backed by the GPT-5 Codex preview, so fixes, explanations, and PR-ready patches stay scoped to the active branch.
- **Focused task queues.** We trigger discrete Codex tasks (bug fix, doc polish, UX tweak) with repo guardrails—lint commands, design tokens, accessibility notes—so the agent only loads the context it needs.
- **Verifiable automation.** Each run yields command logs, test output, and preflight diffs we inspect before pushing or mirroring the change locally.
- **Human review & accountability.** Maintainers replay Codex steps in VS Code, run targeted checks, and capture keep/redo decisions in issues so no black-box merges slip through.

---

## What makes Milkshake different?

**Source-only distribution.** The core package exports TypeScript files, not bundled CSS. Your bundler (Vite, Webpack, esbuild, etc.) runs vanilla-extract and emits the final styles. Zero flash of unstyled content, zero runtime CSS-in-JS.

**Opinionated tokens, flexible consumption.** A unified theme contract provides semantic colors, spacing, typography, layers, overlays, data visualization palettes, and interaction tokens with light, dark, and high-contrast themes out of the box.

**Sprinkles-powered ergonomics.** Responsive utilities, logical spacing, container queries, overlay recipes, and layout primitives make building complex interfaces feel playful instead of painful.

**Accessibility wired in.** Skip-link styles, forced-colors overrides, RTL helpers, contrast utilities, and motion-respectful patterns are first-class citizens.

---

## Design principles

- **TypeScript-first** – Ship typed source, lean on IntelliSense, and catch mistakes at compile time.
- **Zero runtime styling** – Everything resolves at build time; we never ship runtime style insertion or global side effects.
- **Framework agnostic** – Work equally well in React, Svelte, Solid, Vue, Astro, or custom stacks.
- **Semantic theming** – Treat colors, surfaces, interactions, and data-viz palettes as a coherent design language.
- **Mobile-first and responsive** – Container queries, logical properties, and safe-area awareness from day one.
- **Accessibility by design** – Meet or beat WCAG requirements, expose guardrails, and respect user preferences.
- **Composable recipes** – Provide layout, overlay, and interaction patterns that developers can layer together without fighting the system.

---

## Phase roadmap

We’re building Milkshake in three deliberate phases so each layer is solid before we move on.

1. **Phase 1 – Framework foundation (current focus)**
   - Tokens, theming, responsive utilities, interaction/motion tokens, data-viz palettes
   - Layout and overlay recipes, accessibility scaffolding
   - Advanced density modes, fluid scales, and richer motion systems
2. **Phase 2 – Component layer (next)**
   - Headless primitives (dialog, popover, menu, combobox, command palette, table scaffolds)
   - Form system, validation hooks, and stateful recipes built on Phase 1 tokens
3. **Phase 3 – Experience & ecosystem (later)**
   - Documentation site, live playgrounds, demo gallery, and integration guides
   - Automated quality gates, design-token exports, ecosystem adapters, starter kits

Phase transitions unlock sequentially: Phase 1 must be industry-leading before components begin, and components must stabilize before we invest in docs, automation, and ecosystem polish.

---

## Framework readiness report (Phase 1)

### Snapshot
| Area | Status | Benchmarks |
| --- | --- | --- |
| Theme contract & tokens | ✅ Modern semantic coverage, multiple themes | Tailwind tokens + Chakra semantic slots |
| Responsive/layout system | ✅ Container queries, logical insets, advanced recipes | Tailwind/Skeleton layout primitives |
| Typography system | ✅ Optical controls, clamps, prose presets | Tailwind typography plugin, Radix Typography |
| Interaction & motion tokens | ✅ Transitions, state layers, filters, named layers | Material motion tokens, Atlassian interaction utilities |
| Accessibility scaffolding | ✅ Skip links, forced-color, direction helpers | Radix focus helpers, Polaris foundations |
| Overlay & layout recipes | ✅ Modal/popover/toast, stack/cluster/switcher/cover/frame/reel | Stitches recipes, Shoelace layout helpers |
| Data visualization support | ✅ Palette ramps and semantic hooks | Carbon design tokens, EUI color ramps |

Phase 1 foundations already deliver competitive raw capability; remaining work is targeted depth in density, fluid scales, and interaction recipes.

### Deep dive

#### 1. Theme contract & tokens
**Strengths** – Comprehensive semantic contract covering on-color text, six-step surface scale, overlays, state layers, ring/focus tokens, backdrop colors, and data-viz palettes across light, dark, and high-contrast themes. Mirrors Material 3 and Fluent semantic ladders.

**Gaps** – No compact/comfortable density modes yet; tokens ship only as source (no Style Dictionary/JSON export). Secondary color palette is implemented and functional.

#### 2. Layout, spacing & responsive system
**Strengths** – Breakpoints, container queries (`cq`, `cqMin`, `cqMax`), safe-area utilities, logical spacing/insets, and advanced recipes (`stack`, `cluster`, `switcher`, `cover`, `frame`, `reel`). Scroll margin/padding/behavior utilities bring parity with Tailwind/Stitches.

**Gaps** – Missing clamp-based fluid sizing helpers. Need curated grid macros (dashboards, data tables, holy grail) for instant adoption.

#### 3. Typography system
**Strengths** – Optical sizing, underline control, multi-line clamp, prose presets, and font-variant families rival Tailwind Typography and Radix `Text` primitives.

**Gaps** – Lacks `textIndent`, `fontFeatureSettings`, `textShadow`, and fluid typography scale presets.

#### 4. Interaction, motion & effects
**Strengths** – Transition tokens, interaction sprinkles (cursor, touch, accent-color, caret-color), named layer stack, backdrop filters, mix/background blends, and state-layer opacity tokens.

**Gaps** – No named motion curve library beyond base easings; hover/press/drag recipes still manual.

#### 5. Accessibility & internationalization
**Strengths** – Skip-link recipe, forced-colors overrides, direction toggle, safe-area utilities, and contrast helpers.

**Gaps** – Need density-aware contrast checks and RTL snapshot examples to guide consumers.

#### 6. Utilities & recipes
**Strengths** – Comprehensive sprinkles signature with logical properties and named layer control. Overlay and layout recipes provide drop-in composability.

**Gaps** – Need richer grid macros, motion-infused interaction recipes, and stateful helper presets.

### Priority gaps (P0 → P2)
1. **P0 – Density & sizing modes** – Introduce compact/comfortable token sets for spacing, typography, and radii; ensure all themes deliver values.
2. **P0 – Fluid scales** – Add clamp-based spacing/typography utilities and helper functions for custom ranges.
3. **P1 – Motion & interaction curves** – Define named motion pairs (enter/exit/emphasize) with durations/easings plus hover/press/drag recipes.
4. **P1 – Grid & data layout macros** – Ship dashboard, holy-grail, and data-table grid recipes leveraging existing tokens.
5. **P1 – Stateful utility presets** – Package focus/hover/active/disabled state layers into reusable helpers ready for Phase 2 components.
6. **P2 – Extended data-viz system** – Expand ramps with perceptual schemes, add stroke/fill tokens, and introduce scale utilities.

### Validation notes
- Ensure every new density/motion token is populated for light, dark, and high-contrast themes.
- Add targeted unit tests or stories where math is tricky (e.g., fluid scale interpolation); broad automation arrives in Phase 3.
- Maintain manual smoke tests for overlay/layout recipes until the automation stack lands.

### Phase 2 preview (deferred)
Once Phase 1 gaps land, we’ll introduce headless components (dialog, menu, combobox, tables, form primitives) with accessibility parity to Radix, Polaris, and Material, backed by story-driven documentation and SSR/CSR hydration guarantees.

### Phase 3 preview (later)
After components stabilize, we’ll tackle experience polish—documentation site, live playgrounds, automated quality gates, design-token exports, adapters, and release engineering.

### Takeaway
Milkshake’s core framework is already punching alongside premier utility suites. Nail density modes, fluid scales, motion systems, and richer recipes, and the platform will be unquestionably best-in-class—ready to unlock components, then the broader experience layer.

---

## Status & licensing

- **Version**: 0.0.1 (Alpha 0.1 preview)
- **Stability**: Actively changing—APIs, tokens, and themes will shift without notice while we explore Phase 1
- **Production readiness**: Not production safe yet; evaluate in sandboxes and prototypes only
- **License**: ISC © mannsion

Questions or ideas? Open an issue—we’d love to hear from you.