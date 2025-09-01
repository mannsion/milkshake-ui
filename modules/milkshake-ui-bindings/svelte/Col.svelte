<script lang="ts">
  import { grid, sprinkles, GRID_COLUMNS } from 'milkshake-ui';

  export let span: number = GRID_COLUMNS; // default full width
  export let tablet: number | undefined = undefined;
  export let desktop: number | undefined = undefined;

  $: classes = sprinkles({
    flexBasis: {
      mobile: span === GRID_COLUMNS ? 'full' : `${span}/${GRID_COLUMNS}` as any,
      ...(tablet && { tablet: `${tablet}/${GRID_COLUMNS}` as any }),
      ...(desktop && { desktop: `${desktop}/${GRID_COLUMNS}` as any }),
    }
  });
</script>

<div class="{grid.col} {classes}">
  <slot />
</div>
