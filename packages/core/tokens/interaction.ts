export const cursorValues = [
  'auto',
  'default',
  'pointer',
  'text',
  'move',
  'copy',
  'grab',
  'grabbing',
  'not-allowed',
  'col-resize',
  'row-resize',
  'n-resize',
  's-resize',
  'e-resize',
  'w-resize',
  'ne-resize',
  'nw-resize',
  'se-resize',
  'sw-resize',
  'ew-resize',
  'ns-resize',
  'nesw-resize',
  'nwse-resize',
  'zoom-in',
  'zoom-out',
  'progress',
  'wait',
  'help',
  'crosshair',
] as const;
export type CursorKey = typeof cursorValues[number];

export const pointerEventsValues = [
  'auto',
  'none',
  'all',
  'visible',
  'visiblePainted',
  'visibleFill',
  'visibleStroke',
  'painted',
  'fill',
  'stroke',
] as const;
export type PointerEventsKey = typeof pointerEventsValues[number];

export const userSelectValues = ['auto', 'text', 'none', 'contain', 'all'] as const;
export type UserSelectKey = typeof userSelectValues[number];

export const touchActionValues = [
  'auto',
  'none',
  'pan-x',
  'pan-left',
  'pan-right',
  'pan-y',
  'pan-up',
  'pan-down',
  'pinch-zoom',
  'manipulation',
] as const;
export type TouchActionKey = typeof touchActionValues[number];
