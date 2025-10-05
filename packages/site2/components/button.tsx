import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
  ReactNode,
} from 'react';
import {
  button,
  buttonBlock,
  buttonContent,
  buttonGhost,
  buttonIconSlot,
  buttonLink,
  buttonLoadingIndicator,
  buttonOutline,
  buttonSize,
  buttonSolid,
  buttonSoft,
  buttonSpinner,
  getSprinklesClassName,
  partitionSprinkleProps,
  visuallyHidden,
  type ButtonSizeKey,
  type ButtonToneKey,
  type ButtonVariantKey,
  type ButtonVariantMap,
  type SprinklesProps,
} from '@milkshake-ui/core';
import { cx } from './utils/cx';
import { forwardRefWithAs } from './utils/forward-ref';
import { type PolymorphicComponentProps, type PolymorphicRef } from './utils/polymorphic';
import { useButtonGroupContext } from './button-group-context';

const variantClassMap: ButtonVariantMap = {
  solid: buttonSolid,
  soft: buttonSoft,
  outline: buttonOutline,
  ghost: buttonGhost,
  link: buttonLink,
};

type ButtonComponent = <E extends ElementType = 'button'>(
  props: ButtonProps<E> & { ref?: PolymorphicRef<E> },
) => ReactElement | null;

type ButtonOwnProps = {
  className?: string;
  children?: ReactNode;
  variant?: ButtonVariantKey;
  tone?: ButtonToneKey;
  size?: ButtonSizeKey;
  block?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  loading?: boolean;
  loadingLabel?: string;
  loadingIcon?: ReactNode;
} & SprinklesProps;

export type ButtonProps<E extends ElementType = 'button'> = PolymorphicComponentProps<E, ButtonOwnProps>;

type MutableElementProps<E extends ElementType> = ComponentPropsWithoutRef<E> & {
  disabled?: boolean;
  type?: string;
  ['aria-busy']?: boolean;
};

function InnerButton<E extends ElementType = 'button'>(
  props: ButtonProps<E>,
  forwardedRef: PolymorphicRef<E>,
): ReactElement | null {
  const {
    as,
    className,
    children,
    variant: variantProp,
    tone: toneProp,
    size: sizeProp,
    block: blockProp,
    leadingIcon,
    trailingIcon,
    loading = false,
    loadingLabel,
    loadingIcon,
    ...rest
  } = props;

  const groupContext = useButtonGroupContext();
  const variant = (variantProp ?? groupContext?.variant ?? 'solid') as ButtonVariantKey;
  const tone = (toneProp ?? groupContext?.tone ?? 'primary') as ButtonToneKey;
  const size = (sizeProp ?? groupContext?.size ?? 'md') as ButtonSizeKey;
  const block = (blockProp ?? groupContext?.block ?? false) as boolean;

  const Component = (as ?? 'button') as ElementType;
  const { sprinkleProps, nativeProps } = partitionSprinkleProps(rest as Record<string, unknown>);
  const sprinkleClassName = getSprinklesClassName(sprinkleProps);

  const elementProps = {
    ...(nativeProps as ComponentPropsWithoutRef<ElementType>),
  } as MutableElementProps<ElementType>;

  if (typeof Component === 'string' && Component === 'button') {
    elementProps.type = elementProps.type ?? 'button';
  }

  if (loading) {
    elementProps['aria-busy'] = elementProps['aria-busy'] ?? true;
    if (typeof Component === 'string' && Component === 'button' && elementProps.disabled === undefined) {
      elementProps.disabled = true;
    }
  }

  const sizeClass = variant === 'link' ? undefined : buttonSize[size];
  const variantClass = variantClassMap[variant][tone];
  const rootClassName = cx(
    button,
    sizeClass,
    variantClass,
    block ? buttonBlock : null,
    sprinkleClassName,
    className,
  );

  const spinnerNode = loadingIcon ?? <span className={buttonSpinner} aria-hidden="true" />;

  return (
    <Component
      {...elementProps}
      ref={forwardedRef as PolymorphicRef<ElementType>}
      className={rootClassName}
      data-loading={loading ? 'true' : undefined}
    >
      {loading ? (
        <span className={buttonLoadingIndicator} role="status" aria-live="polite">
          {spinnerNode}
          <span className={visuallyHidden}>{loadingLabel ?? 'Loading'}</span>
        </span>
      ) : null}
      <span className={buttonContent} data-slot="content">
        {leadingIcon ? (
          <span className={buttonIconSlot} data-slot="icon-leading">
            {leadingIcon}
          </span>
        ) : null}
        {children}
        {trailingIcon ? (
          <span className={buttonIconSlot} data-slot="icon-trailing">
            {trailingIcon}
          </span>
        ) : null}
      </span>
    </Component>
  );
}

export const Button = forwardRefWithAs(InnerButton) as ButtonComponent;
