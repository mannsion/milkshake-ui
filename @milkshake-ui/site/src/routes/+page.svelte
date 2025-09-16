<script lang="ts">
  import { typography } from '@milkshake-ui/core';
  const H = typography.text.heading;
  const P = typography.text.paragraph;
  const L = typography.text.label;
  const link = typography.text.link;
  const themeClass = typography.typographyThemeClass;
</script>

<div class={themeClass} style="padding: 2rem; display: grid; gap: 2rem;">
  <header style="display:grid; gap:.25rem;">
    <h1 class={H.h2}>Milkshake UI</h1>
    <p class={P.md}>A vanilla-extract + sprinkles UI toolkit focused on elegant, compact typography and a simple grid.</p>
  </header>

  <section style="display:grid; gap:.5rem;">
    <h2 class={L.normal} style="text-transform: uppercase;">Typography preview</h2>
    <div style="display: grid; gap: 0.5rem;">
      <h1 class={H.h1}>Heading 1</h1>
      <h2 class={H.h2}>Heading 2</h2>
      <h3 class={H.h3}>Heading 3</h3>
      <h4 class={H.h4}>Heading 4</h4>
      <h5 class={H.h5}>Heading 5</h5>
      <h6 class={H.h6}>Heading 6</h6>
      <p class={P.md}>Body copy — The quick brown fox jumps over the lazy dog.</p>
      <p class={P.sm}>Inline <code class={typography.text.code}>code()</code> and <a class={link} href="/typography">full demo →</a></p>
    </div>
  </section>

  <section style="display:grid; gap:.5rem;">
    <h2 class={L.normal} style="text-transform: uppercase;">Scale</h2>
    <p class={P.sm}>xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl</p>
    <div style="display:grid; gap:.25rem;">
      <div class={P.sm}>Small paragraph</div>
      <div class={P.md}>Default paragraph</div>
      <div class={P.lg}>Large paragraph</div>
    </div>
  </section>

  <footer>
    <p class={P.sm}>Explore components and tokens soon.</p>
  </footer>
</div>