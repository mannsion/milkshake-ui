# Milkshake UI Framework

A pure CSS utility framework built with vanilla-extract and sprinkles, providing comprehensive design tokens and responsive utility classes.

## Distribution

**⚠️ IMPORTANT**: This framework is distributed as **TypeScript source code only**. No compiled JavaScript or declaration files are included. Consumers must use TypeScript and have vanilla-extract configured in their build pipeline.

## Overview

Milkshake UI is a framework-agnostic CSS utility framework that provides:

- **Design Tokens**: Comprehensive color palette, spacing, typography, borders, shadows, animations, and breakpoints
- **Sprinkles System**: Responsive utility classes for layout, spacing, typography, colors, and more
- **Layout Utilities**: Additional flexbox, grid, and positioning utilities
- **Zero Runtime**: All styles are generated at build time using vanilla-extract
- **TypeScript Support**: Full type safety and IntelliSense support

## Installation

```bash
npm install @milkshake-ui/core @vanilla-extract/css @vanilla-extract/sprinkles
```

## Quick Start

### Basic Usage

```typescript
import { sprinkles, colors, spacing } from '@milkshake-ui/core';

// Use sprinkles for utility classes
const buttonClass = sprinkles({
  paddingX: 4,
  paddingY: 2,
  backgroundColor: 'primary-500',
  color: 'white',
  borderRadius: 'md',
  fontSize: 'sm',
  fontWeight: 'medium',
});

// Access design tokens directly
const customStyle = {
  backgroundColor: colors.primary[500],
  margin: spacing[4],
};
```

### CSS-in-JS Usage

```typescript
import { style } from '@vanilla-extract/css';
import { colors, spacing, typography } from '@milkshake-ui/core';

export const card = style({
  backgroundColor: colors.white,
  padding: spacing[6],
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  fontFamily: typography.fontFamily.sans,
});
```

## Design Tokens

### Colors

Milkshake UI provides a comprehensive color system with vanilla-inspired primary colors and semantic color palettes.

```typescript
import { colors } from '@milkshake-ui/core';

// Primary colors (vanilla-inspired)
colors.primary[50]   // Lightest
colors.primary[500]  // Base
colors.primary[900]  // Darkest

// Semantic colors
colors.success[500]  // Green
colors.error[500]    // Red
colors.warning[500]  // Yellow
colors.info[500]     // Blue

// Neutral grays
colors.neutral[100]  // Light gray
colors.neutral[500]  // Medium gray
colors.neutral[900]  // Dark gray

// Basic colors
colors.white
colors.black
colors.transparent
```

### Spacing

Consistent spacing scale based on a 4px grid system.

```typescript
import { spacing } from '@milkshake-ui/core';

spacing[0]   // 0px
spacing[1]   // 0.25rem (4px)
spacing[2]   // 0.5rem (8px)
spacing[4]   // 1rem (16px)
spacing[8]   // 2rem (32px)
spacing[16]  // 4rem (64px)
spacing[32]  // 8rem (128px)
spacing[64]  // 16rem (256px)
spacing[128] // 32rem (512px)
```

### Typography

Comprehensive typography system with multiple font families and sizes.

```typescript
import { typography } from '@milkshake-ui/core';

// Font families
typography.fontFamily.sans    // System sans-serif
typography.fontFamily.serif   // System serif
typography.fontFamily.mono    // Monospace

// Font sizes
typography.fontSize.xs        // 0.75rem
typography.fontSize.sm        // 0.875rem
typography.fontSize.base      // 1rem
typography.fontSize.lg        // 1.125rem
typography.fontSize.xl        // 1.25rem
typography.fontSize['2xl']    // 1.5rem
typography.fontSize['9xl']    // 8rem

// Font weights
typography.fontWeight.thin    // 100
typography.fontWeight.normal  // 400
typography.fontWeight.bold    // 700
typography.fontWeight.black   // 900

// Line heights and letter spacing
typography.lineHeight.tight   // 1.25
typography.lineHeight.normal  // 1.5
typography.lineHeight.relaxed // 1.625
```

### Borders

Border radius, width, and style utilities.

```typescript
import { borders } from '@milkshake-ui/core';

// Border radius
borders.radius.none   // 0px
borders.radius.sm     // 0.125rem
borders.radius.md     // 0.25rem
borders.radius.lg     // 0.375rem
borders.radius.xl     // 0.5rem
borders.radius.full   // 9999px

// Border width
borders.width.thin    // 1px
borders.width.medium  // 2px
borders.width.thick   // 4px
borders.width.heavy   // 8px

// Border style
borders.style.solid
borders.style.dashed
borders.style.dotted
```

### Shadows

Box shadow utilities for depth and elevation.

```typescript
import { shadows } from '@milkshake-ui/core';

// Box shadows
shadows.boxShadow.sm     // Small shadow
shadows.boxShadow.md     // Medium shadow
shadows.boxShadow.lg     // Large shadow
shadows.boxShadow.xl     // Extra large shadow
shadows.boxShadow.inner  // Inner shadow
shadows.boxShadow.none   // No shadow
```

### Animations

Animation durations, easing functions, and keyframe definitions.

```typescript
import { animations } from '@milkshake-ui/core';

// Durations
animations.duration.fastest  // 75ms
animations.duration.fast     // 150ms
animations.duration.normal   // 300ms
animations.duration.slow     // 500ms

// Easing
animations.easing.linear
animations.easing.easeIn
animations.easing.easeOut
animations.easing.easeInOut

// Transitions
animations.transition.all
animations.transition.colors
animations.transition.opacity
animations.transition.transform
```

### Breakpoints

Responsive breakpoints for mobile-first design.

```typescript
import { breakpoints } from '@milkshake-ui/core';

breakpoints.mobile  // 0px (default)
breakpoints.sm      // 640px
breakpoints.md      // 768px
breakpoints.lg      // 1024px
breakpoints.xl      // 1280px
breakpoints['2xl']  // 1536px
```

## Sprinkles Usage

### Responsive Utilities

Sprinkles provides responsive utility classes that automatically adapt to different screen sizes.

```typescript
import { sprinkles } from '@milkshake-ui/core';

const responsiveCard = sprinkles({
  // Mobile-first: applies to all screens
  padding: 4,
  fontSize: 'base',

  // Tablet and up
  md: {
    padding: 6,
    fontSize: 'lg',
  },

  // Desktop and up
  lg: {
    padding: 8,
    fontSize: 'xl',
  },
});
```

### Layout Utilities

```typescript
const flexContainer = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 4,
});

const gridContainer = sprinkles({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: 6,
});
```

### Spacing Utilities

```typescript
const spacedElement = sprinkles({
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 6,
  paddingRight: 6,
  marginTop: 2,
  marginBottom: 2,
});

// Shorthand for equal padding
const paddedElement = sprinkles({
  padding: 4,  // Applies to all sides
});
```

### Color Utilities

```typescript
const coloredElement = sprinkles({
  backgroundColor: 'primary-500',
  color: 'white',
  borderColor: 'neutral-200',
});
```

### Typography Utilities

```typescript
const textElement = sprinkles({
  fontSize: 'lg',
  fontWeight: 'bold',
  lineHeight: 'relaxed',
  textAlign: 'center',
  color: 'neutral-900',
});
```

### Border Utilities

```typescript
const borderedElement = sprinkles({
  borderRadius: 'md',
  borderWidth: 'medium',
  borderStyle: 'solid',
  borderColor: 'neutral-300',
});
```

### Shadow Utilities

```typescript
const elevatedElement = sprinkles({
  boxShadow: 'lg',
});
```

### Animation Utilities

```typescript
const animatedElement = sprinkles({
  transitionDuration: 'normal',
  transitionTimingFunction: 'easeOut',
  transitionProperty: 'all',
});
```

## Layout Utilities

Additional layout utilities beyond sprinkles.

```typescript
import { flexUtils, gridUtils, displayUtils } from '@milkshake-ui/core';

// Flexbox utilities
const flexRow = flexUtils.flexRow;
const justifyCenter = flexUtils.justifyCenter;

// Grid utilities
const threeColumns = gridUtils.gridCols3;
const spanTwoColumns = gridUtils.colSpan2;

// Display utilities
const hidden = displayUtils.hidden;
const flex = displayUtils.flex;
```

## Advanced Usage

### Custom Styles with Design Tokens

```typescript
import { style } from '@vanilla-extract/css';
import { colors, spacing, typography, shadows } from '@milkshake-ui/core';

export const customCard = style({
  backgroundColor: colors.white,
  padding: spacing[6],
  borderRadius: '0.5rem',
  boxShadow: shadows.boxShadow.md,
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.base,
  lineHeight: typography.lineHeight.normal,
  color: colors.neutral[900],

  ':hover': {
    boxShadow: shadows.boxShadow.lg,
    transform: 'translateY(-2px)',
    transition: `all ${animations.duration.normal} ${animations.easing.easeOut}`,
  },
});
```

### Creating Custom Sprinkles

```typescript
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { colors, spacing } from '@milkshake-ui/core';

const customProperties = defineProperties({
  properties: {
    backgroundColor: colors,
    padding: spacing,
  },
});

export const customSprinkles = createSprinkles(customProperties);
```

### TypeScript Integration

```typescript
import type { Sprinkles } from '@milkshake-ui/core';

// Type-safe usage
type ButtonVariants = 'primary' | 'secondary' | 'outline';

const getButtonStyles = (variant: ButtonVariants): Sprinkles => {
  switch (variant) {
    case 'primary':
      return {
        backgroundColor: 'primary-500',
        color: 'white',
      };
    case 'secondary':
      return {
        backgroundColor: 'neutral-100',
        color: 'neutral-900',
      };
    case 'outline':
      return {
        backgroundColor: 'transparent',
        color: 'primary-500',
        borderColor: 'primary-500',
        borderWidth: 'medium',
      };
  }
};
```

## Build Configuration

**No compilation required** - this framework is consumed from source. However, consumers need to configure vanilla-extract in their build pipeline:

### Vite

```typescript
// vite.config.ts
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default {
  plugins: [vanillaExtractPlugin()],
};
```

### Webpack

```javascript
// webpack.config.js
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  plugins: [new VanillaExtractPlugin()],
};
```

## Framework Integration

Milkshake UI is framework-agnostic and works with any JavaScript framework:

### React

```tsx
import { sprinkles } from '@milkshake-ui/core';

function Button({ children, variant = 'primary' }) {
  return (
    <button
      className={sprinkles({
        paddingX: 4,
        paddingY: 2,
        borderRadius: 'md',
        fontWeight: 'medium',
        backgroundColor: variant === 'primary' ? 'primary-500' : 'neutral-100',
        color: variant === 'primary' ? 'white' : 'neutral-900',
      })}
    >
      {children}
    </button>
  );
}
```

### Vue

```vue
<template>
  <button :class="buttonClasses">
    <slot />
  </button>
</template>

<script setup>
import { sprinkles } from '@milkshake-ui/core';

const buttonClasses = sprinkles({
  paddingX: 4,
  paddingY: 2,
  borderRadius: 'md',
  fontWeight: 'medium',
  backgroundColor: 'primary-500',
  color: 'white',
});
</script>
```

### Svelte

```svelte
<script>
  import { sprinkles } from '@milkshake-ui/core';

  const buttonClasses = sprinkles({
    paddingX: 4,
    paddingY: 2,
    borderRadius: 'md',
    fontWeight: 'medium',
    backgroundColor: 'primary-500',
    color: 'white',
  });
</script>

<button class={buttonClasses}>
  <slot />
</button>
```

## Best Practices

### 1. Use Design Tokens

Always use design tokens instead of hardcoded values for consistency.

```typescript
// ✅ Good
const styles = sprinkles({
  color: 'primary-500',
  padding: 4,
});

// ❌ Avoid
const styles = style({
  color: '#8B5CF6',
  padding: '1rem',
});
```

### 2. Leverage Responsive Design

Use responsive utilities for mobile-first design.

```typescript
const responsiveStyles = sprinkles({
  fontSize: 'sm',  // Mobile
  md: {
    fontSize: 'base',  // Tablet+
  },
  lg: {
    fontSize: 'lg',  // Desktop+
  },
});
```

### 3. Combine Sprinkles with Custom Styles

Use sprinkles for utilities and custom styles for complex layouts.

```typescript
const card = style([
  sprinkles({
    padding: 6,
    borderRadius: 'lg',
    backgroundColor: 'white',
  }),
  {
    // Custom styles
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    transition: 'box-shadow 0.2s ease-in-out',
  },
]);
```

### 4. Type Safety

Take advantage of TypeScript for better development experience.

```typescript
type ButtonSize = 'sm' | 'md' | 'lg';

const getButtonPadding = (size: ButtonSize): Sprinkles['padding'] => {
  switch (size) {
    case 'sm': return 2;
    case 'md': return 4;
    case 'lg': return 6;
  }
};
```

## Contributing

Milkshake UI is designed to be extensible. To add new design tokens or utilities:

1. Add new tokens to the appropriate `.css.ts` file
2. Update the sprinkles configuration if needed
3. Export from `index.ts`
4. Update this documentation

## License

ISC License