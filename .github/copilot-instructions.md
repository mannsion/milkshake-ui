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
- ✅ Document usage patterns
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

## Framework Design Specification

### Responsive Breakpoints
**Breakpoint Values:**
- `mobile`: 0px (default, no media query)
- `sm`: 640px (small tablets, large phones)
- `md`: 768px (tablets, small laptops)
- `lg`: 1024px (laptops, small desktops)
- `xl`: 1280px (desktops)
- `2xl`: 1536px (large desktops, ultrawide)

**Responsive Utilities:**
- All spacing, typography, and layout utilities automatically respond
- Mobile-first approach (base styles apply to mobile, media queries enhance)
- Consistent naming: `sm:`, `md:`, `lg:`, `xl:`, `2xl:` prefixes

### Border System
**Border Radius:**
- `radius.none`: 0px
- `radius.sm`: 0.125rem (2px)
- `radius.md`: 0.25rem (4px)
- `radius.lg`: 0.375rem (6px)
- `radius.xl`: 0.5rem (8px)
- `radius.2xl`: 0.75rem (12px)
- `radius.3xl`: 1rem (16px)
- `radius.full`: 9999px (fully rounded)

**Border Width:**
- `border.none`: 0px
- `border.thin`: 1px
- `border.medium`: 2px
- `border.thick`: 4px
- `border.heavy`: 8px

**Border Style:**
- `border.solid`: solid
- `border.dashed`: dashed
- `border.dotted`: dotted
- `border.double`: double

### Shadow System
**Box Shadows:**
- `shadow.none`: no shadow
- `shadow.sm`: subtle shadow for cards
- `shadow.md`: medium shadow for elevated elements
- `shadow.lg`: large shadow for modals/popovers
- `shadow.xl`: extra large shadow for tooltips
- `shadow.inner`: inner shadow for inset effects
- `shadow.outline`: focus ring shadow

**Shadow Values:**
- `shadow.sm`: 0 1px 2px 0 rgb(0 0 0 / 0.05)
- `shadow.md`: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
- `shadow.lg`: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
- `shadow.xl`: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)

### Animation & Transition System
**Transition Durations:**
- `duration.fastest`: 75ms
- `duration.fast`: 150ms
- `duration.normal`: 300ms
- `duration.slow`: 500ms
- `duration.slowest`: 700ms

**Transition Easing:**
- `ease.linear`: linear
- `ease.in`: ease-in
- `ease.out`: ease-out
- `ease.inOut`: ease-in-out
- `ease.bounce`: bounce effect

**Transition Properties:**
- `transition.all`: all properties
- `transition.colors`: color, background-color, border-color
- `transition.opacity`: opacity
- `transition.transform`: transform
- `transition.shadow`: box-shadow

### Accessibility Features
**Color Contrast:**
- All text combinations meet WCAG AA standards (4.5:1 ratio)
- Interactive elements meet WCAG AAA standards (7:1 ratio)
- Automatic contrast checking in development

**Focus Management:**
- Visible focus indicators for all interactive elements
- Logical tab order
- Focus trapping in modals/overlays
- Keyboard navigation for all components

**ARIA Support:**
- Automatic ARIA attributes for components
- Screen reader announcements for state changes
- Semantic HTML structure
- Landmark roles for navigation

**Motion Preferences:**
- Respects `prefers-reduced-motion` setting
- Optional animation disabling
- Reduced motion alternatives

### Internationalization (i18n)
**RTL Support:**
- Automatic RTL detection
- Flipped layouts and spacing
- RTL-specific component variants
- Bidirectional text support

**Locale Considerations:**
- Date/time formatting utilities
- Number formatting utilities
- Currency display utilities
- Text direction utilities

### Performance Considerations
**Bundle Optimization:**
- Tree-shakable exports
- Lazy loading for heavy components
- Minimal runtime overhead
- Efficient CSS generation

**Runtime Performance:**
- Zero runtime CSS-in-JS overhead
- Optimized class name generation
- Minimal DOM manipulation
- Efficient re-renders

**Development Performance:**
- Fast TypeScript compilation
- Hot module replacement
- Incremental builds
- Source map generation

### Developer Experience
**TypeScript Support:**
- Full type inference
- IntelliSense for all utilities
- Compile-time error checking
- Auto-completion for theme values

**Documentation:**
- Inline JSDoc comments
- Usage examples for all utilities
- Component API documentation
- Migration guides

**Error Handling:**
- Clear error messages
- Helpful suggestions for fixes
- Validation of theme values
- Development-time warnings

### Testing Strategy
**Unit Tests:**
- Utility function testing
- Component rendering tests
- Theme value validation
- TypeScript type checking

**Integration Tests:**
- Component interaction testing
- Theme application testing
- Responsive behavior testing
- Accessibility testing

**Visual Regression:**
- Screenshot comparison testing
- Cross-browser visual testing
- Component variant testing
- Theme consistency testing

**End-to-End Tests:**
- User journey testing
- Form submission testing
- Navigation testing
- Error state testing

### Build System
**Development Build:**
- TypeScript compilation
- CSS generation
- Source maps
- Hot reload support

**Production Build:**
- Optimized TypeScript compilation
- Minified CSS output
- Tree shaking
- Bundle analysis

**Distribution:**
- NPM package structure
- TypeScript source files
- CSS files (if needed)
- Documentation

### Browser Support
**Supported Browsers:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari 14+
- Samsung Internet 15+

**Progressive Enhancement:**
- Graceful degradation for older browsers
- Feature detection
- Polyfill recommendations

### Component Variants & States
**Button Variants:**
- Primary, secondary, outline, ghost, link
- Small, medium, large sizes
- Loading, disabled, active states
- Icon support (left, right, only)

**Input Variants:**
- Text, email, password, search, tel, url, number
- Small, medium, large sizes
- Error, success, warning states
- With/without labels, hints, icons

**Card Variants:**
- Default, elevated, outlined, filled
- With/without headers, footers
- Hover effects
- Loading states

### Form System
**Form Components:**
- TextInput, Textarea, Select, Checkbox, Radio
- FormField wrapper with labels and validation
- FormGroup for related fields
- FormSection for logical grouping

**Validation:**
- Required field validation
- Type validation (email, url, etc.)
- Custom validation rules
- Real-time validation
- Server-side validation support

**Form States:**
- Pristine, dirty, touched, untouched
- Valid, invalid
- Submitting, submitted
- Error display modes

### Data Display Components
**Table Components:**
- Basic table with sorting
- Data table with pagination
- Responsive table variants
- Empty states
- Loading states

**List Components:**
- Ordered/unordered lists
- Description lists
- Navigation lists
- Action lists

**Data Grid:**
- Sortable columns
- Filterable data
- Pagination
- Row selection
- Column resizing

### Navigation Components
**Navigation Patterns:**
- Top navigation bar
- Sidebar navigation
- Breadcrumb navigation
- Tab navigation
- Pagination controls

**Navigation States:**
- Active, inactive, disabled
- Expanded, collapsed
- Loading states
- Error states

### Feedback Components
**Status Indicators:**
- Loading spinners (various sizes)
- Progress bars (linear, circular)
- Skeleton loaders
- Status badges

**Notification System:**
- Toast notifications
- Alert banners
- Modal dialogs
- Confirmation dialogs

**Progress Indicators:**
- Linear progress bars
- Circular progress indicators
- Step indicators
- File upload progress

### Overlay Components
**Modal System:**
- Basic modal
- Confirmation modal
- Form modal
- Full-screen modal
- Modal stacking support

**Dropdowns & Popovers:**
- Basic dropdown
- Multi-select dropdown
- Popover with custom content
- Tooltip system
- Context menus

**Overlay Features:**
- Backdrop blur/overlay
- Focus trapping
- Escape key handling
- Click outside to close
- Position anchoring

### Utility Classes
**Visibility Utilities:**
- `hidden`: display: none
- `invisible`: visibility: hidden
- `sr-only`: screen reader only

**Position Utilities:**
- `relative`, `absolute`, `fixed`, `sticky`
- `top-*`, `right-*`, `bottom-*`, `left-*`
- `z-*` (z-index values)

**Display Utilities:**
- `block`, `inline`, `inline-block`
- `flex`, `inline-flex`, `grid`, `inline-grid`
- `hidden`, `visible`

**Flex Utilities:**
- `flex-row`, `flex-col`
- `justify-start/center/end/between/around/evenly`
- `items-start/center/end/baseline/stretch`

### Dark Mode System
**Theme Variants:**
- Light theme (default)
- Dark theme
- Auto theme (system preference)
- High contrast theme

**Dark Mode Implementation:**
- CSS custom properties for theme switching
- Automatic theme detection
- Manual theme override
- Smooth theme transitions

**Dark Color Palette:**
- Primary: Darker vanilla tones
- Accents: Adjusted sprinkle colors
- Neutrals: Dark gray scale
- Semantic: Adjusted for dark backgrounds

### Print Styles
**Print Optimizations:**
- Hide non-essential elements
- Optimize typography for print
- Adjust colors for print
- Page break controls
- Print-specific layouts

### High Contrast Mode
**Accessibility Enhancements:**
- Increased color contrast
- Thicker borders and outlines
- Larger focus indicators
- Simplified color schemes
- Enhanced text readability

### Error Boundaries & Resilience
**Error Handling:**
- Component-level error boundaries
- Graceful degradation
- Error reporting
- Recovery mechanisms
- Fallback UI states

### Loading States
**Loading Patterns:**
- Skeleton screens
- Spinner variations
- Progressive loading
- Placeholder content
- Loading transitions

### Migration & Upgrade Path
**Version Compatibility:**
- Semantic versioning
- Deprecation warnings
- Migration guides
- Breaking change documentation
- Upgrade utilities

**Backward Compatibility:**
- Legacy API support
- Gradual migration path
- Compatibility layers
- Version detection

This comprehensive design specification covers all aspects of a professional, production-ready UI framework with attention to detail, accessibility, performance, and developer experience.
