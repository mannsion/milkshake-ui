import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
  ReactNode,
} from 'react';
import {
  buttonGroupClassMap,
  type ButtonGroupLayout,
  type ButtonSizeKey,
  type ButtonToneKey,
  type ButtonVariantKey,
  getSprinklesClassName,
  partitionSprinkleProps,
  type SprinklesProps,
} from '@milkshake-ui/core';
import { cx } from './utils/cx';
import { forwardRefWithAs } from './utils/forward-ref';
import { type PolymorphicComponentProps, type PolymorphicRef } from './utils/polymorphic';
import { ButtonGroupProvider } from './button-group-context';

const DEFAULT_LAYOUT: ButtonGroupLayout = 'horizontal';

type ButtonGroupOwnProps = {
  className?: string;
  children?: ReactNode;
  layout?: ButtonGroupLayout;
  variant?: ButtonVariantKey;
  tone?: ButtonToneKey;
  size?: ButtonSizeKey;
  block?: boolean;
} & SprinklesProps;

export type ButtonGroupProps<E extends ElementType = 'div'> = PolymorphicComponentProps<E, ButtonGroupOwnProps>;

type MutableElementProps<E extends ElementType> = ComponentPropsWithoutRef<E> & {
  ['data-layout']?: string;
};

type ButtonGroupComponent = <E extends ElementType = 'div'>(
  props: ButtonGroupProps<E> & { ref?: PolymorphicRef<E> },
) => ReactElement | null;

function InnerButtonGroup<E extends ElementType = 'div'>(
  props: ButtonGroupProps<E>,
  forwardedRef: PolymorphicRef<E>,
): ReactElement | null {
  const {
    as,
    className,
    children,
    layout: layoutProp,
    variant,
    tone,
    size,
    block,
    ...rest
  } = props;

  const layout = layoutProp ?? DEFAULT_LAYOUT;
  const componentBlock = (block ?? (layout === 'vertical' || layout === 'justified')) as boolean;

  const Component = (as ?? 'div') as ElementType;
  const { sprinkleProps, nativeProps } = partitionSprinkleProps(rest as Record<string, unknown>);
  const sprinkleClassName = getSprinklesClassName(sprinkleProps);

  const elementProps = {
    ...(nativeProps as ComponentPropsWithoutRef<ElementType>),
  } as MutableElementProps<ElementType>;

  elementProps['data-layout'] = layout;

  const rootClassName = cx(buttonGroupClassMap[layout], sprinkleClassName, className);

  return (
    <ButtonGroupProvider value={{ variant, tone, size, block: componentBlock }}>
      <Component
        {...(elementProps as ComponentPropsWithoutRef<ElementType>)}
        ref={forwardedRef as PolymorphicRef<ElementType>}
        className={rootClassName}
      >
        {children}
      </Component>
    </ButtonGroupProvider>
  );
}

export const ButtonGroup = forwardRefWithAs(InnerButtonGroup) as ButtonGroupComponent;
