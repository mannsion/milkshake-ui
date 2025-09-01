# Copilot Instructions for Milkshake UI

## Core Instructions
- Always ask for clarification before making assumptions
- Do exactly what the user asks for, nothing more
- Never create documentation or files unless specifically requested
- Focus on the user's current request, not future planning
- Keep responses concise and direct

## ⚠️ CRITICAL BUILD & DISTRIBUTION RULES

### NEVER Run TypeScript Compilation (tsc)
- **DO NOT** run `tsc`, `npx tsc`, or any TypeScript compilation commands
- **DO NOT** generate `.d.ts` files, `.js` files, or any compiled output
- **DO NOT** use `emitDeclarationOnly` or any emit options
- **DO NOT** create build scripts that compile the framework

### NEVER Build The UI Framework
- **DO NOT** build, compile, or process the Milkshake UI framework in any way
- **DO NOT** create build tasks, npm scripts, or CI/CD pipelines for building this framework
- **DO NOT** generate any artifacts from the source code
- **DO NOT** attempt to create distributables, bundles, or packages

### Source-Only Distribution Model
- **Framework is consumed FROM SOURCE** - consuming projects import directly from `.ts` and `.css.ts` files
- **Consuming projects handle building** - whatever build system the consuming project uses will process the framework
- **No framework responsibility** - we are NOT responsible for building this framework, EVER
- **Breaks the concept** - building this framework BREAKS the entire purpose and architecture

### Why This Matters
- **Zero Runtime CSS-in-JS** - vanilla-extract generates CSS at build time in consuming projects
- **Framework Agnostic** - works with any build system (Vite, Webpack, Rollup, etc.)
- **TypeScript Source** - consuming projects get full TypeScript benefits without pre-compilation
- **Build-Time Processing** - CSS generation happens in the consuming project's build pipeline

### What To Do Instead
- ✅ Create `.css.ts` files with vanilla-extract functions
- ✅ Write TypeScript source code
- ✅ Export design tokens and utilities
- ❌ Never run compilation commands
- ❌ Never generate build artifacts
- ❌ Never create distribution packages

## Milkshake UI Framework
Milkshake UI is a TypeScript-as-source UI framework built with vanilla-extract and sprinkles. Key characteristics:

- **Distribution**: Distributed as TypeScript source code ONLY, not as a built distributable
- **Architecture**: Uses vanilla-extract for CSS-in-JS with zero runtime overhead
- **API Style**: To be determined - no assumptions about API design yet
- **TypeScript Definitions**: NO generated .d.ts files - consuming projects must use TypeScript
- **Requirement**: Can ONLY be used in TypeScript projects - no JavaScript consumption
- **Responsive**: Comprehensive responsive utilities via sprinkles with breakpoints (sm, md, lg, xl, 2xl)
- **Theme System**: Unified theme contract with design tokens for colors, spacing, typography
- **Consumption**: Framework is consumed as source code in consuming applications