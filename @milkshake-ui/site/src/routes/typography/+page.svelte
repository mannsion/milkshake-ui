<script lang="ts">
  import { typography } from '@milkshake-ui/core';

  const H = typography.text.heading;
  const P = typography.text.paragraph;
  const L = typography.text.label;
  const link = typography.text.link;
  const code = typography.text.code;

  const themeClass = typography.typographyThemeClass;
</script>

<div class={themeClass}>
  <section>
    <h1 class={H.h1}>Heading 1 - The quick brown fox jumps over the lazy dog</h1>
    <h2 class={H.h2}>Heading 2 - The quick brown fox jumps over the lazy dog</h2>
    <h3 class={H.h3}>Heading 3 - The quick brown fox jumps over the lazy dog</h3>
    <h4 class={H.h4}>Heading 4 - The quick brown fox jumps over the lazy dog</h4>
    <h5 class={H.h5}>Heading 5 - The quick brown fox jumps over the lazy dog</h5>
    <h6 class={H.h6}>Heading 6 - The quick brown fox jumps over the lazy dog</h6>
  </section>

  <section>
    <p class={P.sm}>Paragraph small — The quick brown fox jumps over the lazy dog.</p>
    <p class={P.md}>Paragraph default — The quick brown fox jumps over the lazy dog.</p>
    <p class={P.lg}>Paragraph large — The quick brown fox jumps over the lazy dog.</p>
  </section>

  <section>
    <div class={L.normal}>Label normal</div>
    <div class={L.subtle}>Label subtle</div>
  </section>

  <section>
    <a class={link} href="#">This is a link</a>
    <p class={P.md}>Inline <code class={code}>code()</code> example.</p>
  </section>
</div>
