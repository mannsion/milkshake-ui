import { style, styleVariants, type ComplexStyleRule } from '@vanilla-extract/css';
import { themeContract } from '../theme-contract.css';

const toneNames = ['primary', 'accent', 'neutral', 'info', 'success', 'warning', 'danger'] as const;

type ButtonTone = (typeof toneNames)[number];

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: themeContract.spacing['2'],
  fontFamily: themeContract.typography.fontFamily.sans,
  fontWeight: themeContract.typography.fontWeight.semibold,
  lineHeight: themeContract.typography.lineHeight.snug,
  letterSpacing: themeContract.typography.letterSpacing.normal,
  color: themeContract.semantic.text.primary,
  backgroundColor: 'transparent',
  borderStyle: themeContract.borders.style.solid,
  borderWidth: themeContract.borders.width.thin,
  borderColor: 'transparent',
  borderRadius: themeContract.borders.radius.lg,
  paddingInline: themeContract.spacing['4'],
  paddingBlock: themeContract.spacing['2'],
  minHeight: themeContract.spacing['10'],
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  cursor: 'pointer',
  userSelect: 'none',
  position: 'relative',
  verticalAlign: 'middle',
  transformOrigin: 'center',
  transitionProperty: [
    themeContract.animations.transition.colors,
    themeContract.animations.transition.shadow,
    themeContract.animations.transition.transform,
  ].join(', '),
  transitionTimingFunction: themeContract.animations.easing.out,
  transitionDuration: themeContract.animations.duration.fast,
  selectors: {
    '&:focus': {
      outline: 'none',
    },
    '&:focus-visible': {
      outlineStyle: 'solid',
      outlineWidth: themeContract.focusRing.width.md,
      outlineOffset: themeContract.focusRing.offset.sm,
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: themeContract.semantic.stateLayerOpacity.disabled,
    },
  },
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transitionProperty: 'none',
      transitionDuration: '0.01ms',
    },
  },
});

export const buttonBlock = style({
  width: '100%',
});

export const buttonSize = styleVariants({
  sm: {
    paddingInline: themeContract.spacing['3'],
    paddingBlock: themeContract.spacing['1'],
    minHeight: themeContract.spacing['8'],
    fontSize: themeContract.typography.fontSize.sm,
  },
  md: {
    paddingInline: themeContract.spacing['4'],
    paddingBlock: themeContract.spacing['2'],
    minHeight: themeContract.spacing['10'],
    fontSize: themeContract.typography.fontSize.base,
  },
  lg: {
    paddingInline: themeContract.spacing['5'],
    paddingBlock: themeContract.spacing['3'],
    minHeight: themeContract.spacing['12'],
    fontSize: themeContract.typography.fontSize.lg,
  },
});

type SolidConfig = {
  bg: string;
  hoverBg: string;
  activeBg: string;
  text: string;
  ring: string;
  disabledBg?: string;
  disabledText?: string;
  shadow?: string;
  hoverShadow?: string;
  activeShadow?: string;
};

type SoftConfig = {
  bg: string;
  hoverBg: string;
  activeBg: string;
  text: string;
  ring: string;
  border?: string;
};

type OutlineConfig = {
  text: string;
  border: string;
  hoverBg: string;
  hoverBorder?: string;
  activeBg?: string;
  ring: string;
};

type GhostConfig = {
  text: string;
  hoverBg: string;
  activeBg: string;
  ring: string;
};

type LinkConfig = {
  text: string;
  hoverText: string;
  activeText: string;
};

type ToneConfig = {
  solid: SolidConfig;
  soft: SoftConfig;
  outline: OutlineConfig;
  ghost: GhostConfig;
  link: LinkConfig;
};

const disabledBg = themeContract.semantic.interactive.disabled;
const disabledText = themeContract.semantic.on.inverse;

const toneConfig: Record<ButtonTone, ToneConfig> = {
  primary: {
    solid: {
      bg: themeContract.colors.primary[500],
      hoverBg: themeContract.colors.primary[600],
      activeBg: themeContract.colors.primary[700],
      text: themeContract.semantic.on.primary,
      ring: themeContract.semantic.ring.primary,
      shadow: themeContract.shadows.boxShadow.sm,
      hoverShadow: themeContract.shadows.boxShadow.md,
    },
    soft: {
      bg: themeContract.colors.primary[50],
      hoverBg: themeContract.colors.primary[100],
      activeBg: themeContract.colors.primary[200],
      text: themeContract.colors.primary[700],
      ring: themeContract.semantic.ring.primary,
      border: themeContract.colors.primary[200],
    },
    outline: {
      text: themeContract.colors.primary[600],
      border: themeContract.colors.primary[300],
      hoverBg: themeContract.colors.primary[50],
      ring: themeContract.semantic.ring.primary,
    },
    ghost: {
      text: themeContract.colors.primary[600],
      hoverBg: themeContract.colors.primary[50],
      activeBg: themeContract.colors.primary[100],
      ring: themeContract.semantic.ring.primary,
    },
    link: {
      text: themeContract.colors.primary[600],
      hoverText: themeContract.colors.primary[700],
      activeText: themeContract.colors.primary[800],
    },
  },
  accent: {
    solid: {
      bg: themeContract.semantic.accent.strong,
      hoverBg: themeContract.colors.secondary[600],
      activeBg: themeContract.colors.secondary[700],
      text: themeContract.semantic.on.secondary,
      ring: themeContract.semantic.ring.info,
      shadow: themeContract.shadows.boxShadow.sm,
      hoverShadow: themeContract.shadows.boxShadow.lg,
    },
    soft: {
      bg: themeContract.semantic.accent.soft,
      hoverBg: themeContract.semantic.accent.surface,
      activeBg: themeContract.colors.secondary[200],
      text: themeContract.semantic.accent.text,
      ring: themeContract.semantic.ring.info,
      border: themeContract.semantic.accent.border,
    },
    outline: {
      text: themeContract.semantic.accent.text,
      border: themeContract.semantic.accent.border,
      hoverBg: themeContract.semantic.accent.soft,
      ring: themeContract.semantic.ring.info,
    },
    ghost: {
      text: themeContract.semantic.accent.text,
      hoverBg: themeContract.semantic.accent.soft,
      activeBg: themeContract.semantic.accent.surface,
      ring: themeContract.semantic.ring.info,
    },
    link: {
      text: themeContract.semantic.accent.text,
      hoverText: themeContract.colors.secondary[700],
      activeText: themeContract.colors.secondary[800],
    },
  },
  neutral: {
    solid: {
      bg: themeContract.semantic.surface.level2,
      hoverBg: themeContract.semantic.surface.level3,
      activeBg: themeContract.semantic.surface.level4,
      text: themeContract.semantic.text.primary,
      ring: themeContract.semantic.ring.focus,
      shadow: themeContract.shadows.boxShadow.sm,
      hoverShadow: themeContract.shadows.boxShadow.md,
    },
    soft: {
      bg: themeContract.semantic.surface.level1,
      hoverBg: themeContract.semantic.surface.level2,
      activeBg: themeContract.semantic.surface.level3,
      text: themeContract.semantic.text.primary,
      ring: themeContract.semantic.ring.focus,
      border: themeContract.semantic.border.light,
    },
    outline: {
      text: themeContract.semantic.text.primary,
      border: themeContract.semantic.border.light,
      hoverBg: themeContract.semantic.surface.level1,
      ring: themeContract.semantic.ring.focus,
    },
    ghost: {
      text: themeContract.semantic.text.primary,
      hoverBg: themeContract.semantic.surface.level1,
      activeBg: themeContract.semantic.surface.level2,
      ring: themeContract.semantic.ring.focus,
    },
    link: {
      text: themeContract.semantic.text.secondary,
      hoverText: themeContract.semantic.text.primary,
      activeText: themeContract.semantic.text.primary,
    },
  },
  info: {
    solid: {
      bg: themeContract.colors.info[500],
      hoverBg: themeContract.colors.info[600],
      activeBg: themeContract.colors.info[700],
      text: themeContract.semantic.on.info,
      ring: themeContract.semantic.ring.info,
      shadow: themeContract.shadows.boxShadow.sm,
      hoverShadow: themeContract.shadows.boxShadow.md,
    },
    soft: {
      bg: themeContract.colors.info[50],
      hoverBg: themeContract.colors.info[100],
      activeBg: themeContract.colors.info[200],
      text: themeContract.colors.info[800],
      ring: themeContract.semantic.ring.info,
      border: themeContract.colors.info[200],
    },
    outline: {
      text: themeContract.colors.info[700],
      border: themeContract.colors.info[300],
      hoverBg: themeContract.colors.info[50],
      ring: themeContract.semantic.ring.info,
    },
    ghost: {
      text: themeContract.colors.info[700],
      hoverBg: themeContract.colors.info[50],
      activeBg: themeContract.colors.info[100],
      ring: themeContract.semantic.ring.info,
    },
    link: {
      text: themeContract.colors.info[600],
      hoverText: themeContract.colors.info[700],
      activeText: themeContract.colors.info[800],
    },
  },
  success: {
    solid: {
      bg: themeContract.colors.success[500],
      hoverBg: themeContract.colors.success[600],
      activeBg: themeContract.colors.success[700],
      text: themeContract.semantic.on.success,
      ring: themeContract.semantic.ring.success,
      shadow: themeContract.shadows.boxShadow.sm,
      hoverShadow: themeContract.shadows.boxShadow.md,
    },
    soft: {
      bg: themeContract.colors.success[50],
      hoverBg: themeContract.colors.success[100],
      activeBg: themeContract.colors.success[200],
      text: themeContract.colors.success[800],
      ring: themeContract.semantic.ring.success,
      border: themeContract.colors.success[200],
    },
    outline: {
      text: themeContract.colors.success[700],
      border: themeContract.colors.success[300],
      hoverBg: themeContract.colors.success[50],
      ring: themeContract.semantic.ring.success,
    },
    ghost: {
      text: themeContract.colors.success[700],
      hoverBg: themeContract.colors.success[50],
      activeBg: themeContract.colors.success[100],
      ring: themeContract.semantic.ring.success,
    },
    link: {
      text: themeContract.colors.success[600],
      hoverText: themeContract.colors.success[700],
      activeText: themeContract.colors.success[800],
    },
  },
  warning: {
    solid: {
      bg: themeContract.colors.warning[500],
      hoverBg: themeContract.colors.warning[600],
      activeBg: themeContract.colors.warning[700],
      text: themeContract.semantic.on.warning,
      ring: themeContract.semantic.ring.warning,
      shadow: themeContract.shadows.boxShadow.sm,
      hoverShadow: themeContract.shadows.boxShadow.md,
    },
    soft: {
      bg: themeContract.colors.warning[50],
      hoverBg: themeContract.colors.warning[100],
      activeBg: themeContract.colors.warning[200],
      text: themeContract.colors.warning[800],
      ring: themeContract.semantic.ring.warning,
      border: themeContract.colors.warning[200],
    },
    outline: {
      text: themeContract.colors.warning[700],
      border: themeContract.colors.warning[300],
      hoverBg: themeContract.colors.warning[50],
      ring: themeContract.semantic.ring.warning,
    },
    ghost: {
      text: themeContract.colors.warning[700],
      hoverBg: themeContract.colors.warning[50],
      activeBg: themeContract.colors.warning[100],
      ring: themeContract.semantic.ring.warning,
    },
    link: {
      text: themeContract.colors.warning[600],
      hoverText: themeContract.colors.warning[700],
      activeText: themeContract.colors.warning[800],
    },
  },
  danger: {
    solid: {
      bg: themeContract.colors.error[500],
      hoverBg: themeContract.colors.error[600],
      activeBg: themeContract.colors.error[700],
      text: themeContract.semantic.on.error,
      ring: themeContract.semantic.ring.error,
      shadow: themeContract.shadows.boxShadow.sm,
      hoverShadow: themeContract.shadows.boxShadow.md,
    },
    soft: {
      bg: themeContract.colors.error[50],
      hoverBg: themeContract.colors.error[100],
      activeBg: themeContract.colors.error[200],
      text: themeContract.colors.error[800],
      ring: themeContract.semantic.ring.error,
      border: themeContract.colors.error[200],
    },
    outline: {
      text: themeContract.colors.error[600],
      border: themeContract.colors.error[300],
      hoverBg: themeContract.colors.error[50],
      ring: themeContract.semantic.ring.error,
    },
    ghost: {
      text: themeContract.colors.error[600],
      hoverBg: themeContract.colors.error[50],
      activeBg: themeContract.colors.error[100],
      ring: themeContract.semantic.ring.error,
    },
    link: {
      text: themeContract.colors.error[600],
      hoverText: themeContract.colors.error[700],
      activeText: themeContract.colors.error[800],
    },
  },
};

const toneKeys: ButtonTone[] = [...toneNames];

const mixColor = (base: string, mixWith: string, weight: number) =>
  `color-mix(in srgb, ${base} ${100 - weight}%, ${mixWith} ${weight}%)`;

const solidSurfaceState = (color: string, state: 'rest' | 'hover' | 'active') => {
  if (state === 'hover') {
    return {
      backgroundImage: `linear-gradient(180deg, ${mixColor(color, 'white', 18)} 0%, ${mixColor(color, 'black', 12)} 45%, ${mixColor(color, 'black', 28)} 100%)`,
      boxShadow: [
        `inset 0 2px 0 ${mixColor(color, 'white', 42)}`,
        `inset 0 -3px 0 ${mixColor(color, 'black', 30)}`,
        `inset 0 0 0 1px ${mixColor(color, 'black', 20)}`,
      ].join(', '),
    };
  }

  if (state === 'active') {
    return {
      backgroundImage: `linear-gradient(180deg, ${mixColor(color, 'black', 12)} 0%, ${mixColor(color, 'black', 20)} 30%, ${mixColor(color, 'black', 36)} 100%)`,
      boxShadow: [
        `inset 0 2px 1px ${mixColor(color, 'black', 34)}`,
        `inset 0 -1px 0 ${mixColor(color, 'black', 40)}`,
        `inset 0 0 0 1px ${mixColor(color, 'black', 28)}`,
      ].join(', '),
    };
  }

  return {
    backgroundImage: `linear-gradient(180deg, ${mixColor(color, 'white', 14)} 0%, ${mixColor(color, 'black', 10)} 45%, ${mixColor(color, 'black', 24)} 100%)`,
    boxShadow: [
      `inset 0 1px 0 ${mixColor(color, 'white', 36)}`,
      `inset 0 -2px 0 ${mixColor(color, 'black', 24)}`,
      `inset 0 0 0 1px ${mixColor(color, 'black', 18)}`,
    ].join(', '),
  };
};

const disabledSolidSurface = (color: string) => ({
  backgroundImage: `linear-gradient(180deg, ${mixColor(color, 'white', 8)} 0%, ${mixColor(color, 'black', 10)} 100%)`,
  boxShadow: [
    `inset 0 1px 0 ${mixColor(color, 'white', 18)}`,
    `inset 0 -1px 0 ${mixColor(color, 'black', 14)}`,
    `inset 0 0 0 1px ${mixColor(color, 'black', 10)}`,
  ].join(', '),
});

type ButtonVariantMap = Record<ButtonTone, ComplexStyleRule>;

const solidVariants: ButtonVariantMap = toneKeys.reduce((acc, tone) => {
  const config = toneConfig[tone].solid;
  const restSurface = solidSurfaceState(config.bg, 'rest');
  const hoverSurface = solidSurfaceState(config.hoverBg, 'hover');
  const activeSurface = solidSurfaceState(config.activeBg, 'active');
  const disabledSurface = disabledSolidSurface(config.disabledBg ?? disabledBg);
  const restBorder = mixColor(config.bg, 'black', 26);
  const hoverBorder = mixColor(config.hoverBg, 'black', 30);
  const activeBorder = mixColor(config.activeBg, 'black', 34);
  const disabledBorder = mixColor(config.disabledBg ?? disabledBg, 'black', 18);

  acc[tone] = {
    backgroundColor: config.bg,
    backgroundImage: restSurface.backgroundImage,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    color: config.text,
    borderColor: restBorder,
    boxShadow: restSurface.boxShadow,
    selectors: {
      '&:not(:disabled):hover': {
        backgroundColor: config.hoverBg,
        backgroundImage: hoverSurface.backgroundImage,
        boxShadow: hoverSurface.boxShadow,
        borderColor: hoverBorder,
      },
      '&:not(:disabled):active': {
        backgroundColor: config.activeBg,
        backgroundImage: activeSurface.backgroundImage,
        boxShadow: activeSurface.boxShadow,
        borderColor: activeBorder,
      },
      '&:focus-visible': {
        outlineColor: config.ring,
        backgroundImage: hoverSurface.backgroundImage,
        boxShadow: [
          hoverSurface.boxShadow,
          '0 0 0 ' + themeContract.focusRing.width.md + ' ' + config.ring,
        ].join(', '),
        borderColor: hoverBorder,
      },
      '&:disabled': {
        backgroundColor: config.disabledBg ?? disabledBg,
        color: config.disabledText ?? disabledText,
        backgroundImage: disabledSurface.backgroundImage,
        boxShadow: disabledSurface.boxShadow,
        borderColor: disabledBorder,
      },
    },
  };
  return acc;
}, {} as ButtonVariantMap);

const softVariants: ButtonVariantMap = toneKeys.reduce((acc, tone) => {
  const config = toneConfig[tone].soft;
  acc[tone] = {
    backgroundColor: config.bg,
    color: config.text,
    borderColor: config.border ?? themeContract.semantic.border.light,
    boxShadow: themeContract.shadows.boxShadow.none,
    selectors: {
      '&:not(:disabled):hover': {
        backgroundColor: config.hoverBg,
      },
      '&:not(:disabled):active': {
        backgroundColor: config.activeBg,
      },
      '&:focus-visible': {
        outlineColor: config.ring,
        boxShadow: '0 0 0 ' + themeContract.focusRing.width.md + ' ' + config.ring,
      },
      '&:disabled': {
        backgroundColor: disabledBg,
        color: disabledText,
        borderColor: themeContract.semantic.border.light,
      },
    },
  };
  return acc;
}, {} as ButtonVariantMap);

const outlineVariants: ButtonVariantMap = toneKeys.reduce((acc, tone) => {
  const config = toneConfig[tone].outline;
  acc[tone] = {
    backgroundColor: 'transparent',
    color: config.text,
    borderColor: config.border,
    boxShadow: themeContract.shadows.boxShadow.none,
    selectors: {
      '&:not(:disabled):hover': {
        backgroundColor: config.hoverBg,
        borderColor: config.hoverBorder ?? config.border,
      },
      '&:not(:disabled):active': {
        backgroundColor: config.activeBg ?? config.hoverBg,
      },
      '&:focus-visible': {
        outlineColor: config.ring,
        boxShadow: '0 0 0 ' + themeContract.focusRing.width.md + ' ' + config.ring,
      },
      '&:disabled': {
        backgroundColor: 'transparent',
        color: disabledText,
        borderColor: themeContract.semantic.border.light,
      },
    },
  };
  return acc;
}, {} as ButtonVariantMap);

const ghostVariants: ButtonVariantMap = toneKeys.reduce((acc, tone) => {
  const config = toneConfig[tone].ghost;
  acc[tone] = {
    backgroundColor: 'transparent',
    color: config.text,
    borderColor: 'transparent',
    boxShadow: themeContract.shadows.boxShadow.none,
    selectors: {
      '&:not(:disabled):hover': {
        backgroundColor: config.hoverBg,
      },
      '&:not(:disabled):active': {
        backgroundColor: config.activeBg,
      },
      '&:focus-visible': {
        outlineColor: config.ring,
        boxShadow: '0 0 0 ' + themeContract.focusRing.width.md + ' ' + config.ring,
      },
      '&:disabled': {
        color: disabledText,
      },
    },
  };
  return acc;
}, {} as ButtonVariantMap);

const linkVariants: ButtonVariantMap = toneKeys.reduce((acc, tone) => {
  const config = toneConfig[tone].link;
  acc[tone] = {
    backgroundColor: 'transparent',
    color: config.text,
    borderColor: 'transparent',
    paddingInline: 0,
    paddingBlock: 0,
    minHeight: 'auto',
    gap: themeContract.spacing['1'],
    textDecoration: 'underline',
    fontWeight: themeContract.typography.fontWeight.medium,
    boxShadow: themeContract.shadows.boxShadow.none,
    selectors: {
      '&:hover': {
        color: config.hoverText,
        textDecoration: 'underline',
      },
      '&:active': {
        color: config.activeText,
        textDecoration: 'underline',
      },
      '&:focus-visible': {
        outlineColor: config.hoverText,
        textDecoration: 'underline',
      },
      '&:disabled': {
        color: disabledText,
        textDecoration: 'none',
      },
    },
  };
  return acc;
}, {} as ButtonVariantMap);

export const buttonSolid = styleVariants(solidVariants);
export const buttonSoft = styleVariants(softVariants);
export const buttonOutline = styleVariants(outlineVariants);
export const buttonGhost = styleVariants(ghostVariants);
export const buttonLink = styleVariants(linkVariants);


