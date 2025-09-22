// Spacing scale used across sprinkles and layout utilities
export const spacingPositive = {
  '0': '0px',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
  '72': '18rem',
  '80': '20rem',
  '96': '24rem',
  '112': '28rem',
  '128': '32rem',
} as const;

export const spacingWithNegatives = {
  ...spacingPositive,
  '-1': '-0.25rem',
  '-2': '-0.5rem',
  '-3': '-0.75rem',
  '-4': '-1rem',
  '-5': '-1.25rem',
  '-6': '-1.5rem',
  '-8': '-2rem',
  '-10': '-2.5rem',
  '-12': '-3rem',
  '-16': '-4rem',
  '-20': '-5rem',
  '-24': '-6rem',
  '-32': '-8rem',
} as const;

export const sizeValues = {
  ...spacingPositive,
  full: '100%',
  auto: 'auto',
} as const;

export type SpacingKey = keyof typeof spacingPositive;
