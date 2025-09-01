export type DocumentDirection = 'ltr' | 'rtl';

const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Returns the current document direction, defaulting to `ltr` when running outside the browser.
 */
export const getDocumentDirection = (): DocumentDirection => {
  if (!isBrowser) return 'ltr';
  const dir = document.documentElement.getAttribute('dir');
  return (dir === 'rtl' ? 'rtl' : 'ltr');
};

/**
 * Sets the document direction in a safe, environment-aware manner.
 */
export const setDocumentDirection = (direction: DocumentDirection): void => {
  if (!isBrowser) return;
  document.documentElement.setAttribute('dir', direction);
};

/**
 * Toggles between `ltr` and `rtl`, returning the applied direction for callers to inspect.
 */
export const toggleDocumentDirection = (): DocumentDirection => {
  const next = getDocumentDirection() === 'ltr' ? 'rtl' : 'ltr';
  setDocumentDirection(next);
  return next;
};

/**
 * Applies the provided direction on mount and restores the previous value when the disposer is called.
 * Useful for storybook/docs toggles.
 */
export const withDocumentDirection = (direction: DocumentDirection): (() => void) => {
  if (!isBrowser) return () => {};
  const previous = getDocumentDirection();
  setDocumentDirection(direction);
  return () => setDocumentDirection(previous);
};
