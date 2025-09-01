import { style, globalStyle } from '@vanilla-extract/css';

// Single-line truncate utility: ellipsis and prevent wrapping.
export const truncate = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  minWidth: 0,
});

// Multi-line clamp utility: relies on -webkit- properties; falls back gracefully.
// Usage: combine with a class per desired lines (e.g., lineClamp3).
const makeLineClamp = (lines: number) =>
  style({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical' as any,
    WebkitLineClamp: String(lines) as any,
    overflow: 'hidden',
  });

export const lineClamp2 = makeLineClamp(2);
export const lineClamp3 = makeLineClamp(3);
export const lineClamp4 = makeLineClamp(4);
export const lineClamp5 = makeLineClamp(5);

// Prose defaults useful for longform content.
export const prose = style({
  lineHeight: '1.625',
});

// Nested element defaults for prose content
globalStyle(`${prose} :where(p)`, { marginTop: '0.75em', marginBottom: '0.75em' });
globalStyle(`${prose} :where(h1,h2,h3,h4,h5,h6)`, { fontWeight: '600', lineHeight: '1.25' });
globalStyle(`${prose} :where(h1)`, { fontSize: '2.25rem', marginTop: '1.5em', marginBottom: '0.5em' });
globalStyle(`${prose} :where(h2)`, { fontSize: '1.875rem', marginTop: '1.2em', marginBottom: '0.4em' });
globalStyle(`${prose} :where(h3)`, { fontSize: '1.5rem', marginTop: '1em', marginBottom: '0.4em' });
globalStyle(`${prose} :where(ul,ol)`, { paddingLeft: '1.25em', marginTop: '0.75em', marginBottom: '0.75em' });
globalStyle(`${prose} :where(li)`, { marginTop: '0.25em', marginBottom: '0.25em' });
globalStyle(`${prose} :where(blockquote)`, {
  paddingLeft: '1em',
  borderLeft: '4px solid currentColor',
  opacity: 0.8,
  marginTop: '1em',
  marginBottom: '1em',
});
globalStyle(`${prose} :where(code)`, {
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
});
globalStyle(`${prose} :where(img, video)`, { maxWidth: '100%', height: 'auto' });
