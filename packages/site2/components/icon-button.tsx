import type { ElementType, ReactElement, ReactNode } from 'react';
import { forwardRefWithAs } from './utils/forward-ref';
import type { ButtonProps } from './button';
import { Button } from './button';
import type { ButtonSizeKey, ButtonToneKey, ButtonVariantKey } from '@milkshake-ui/core';
import type { PolymorphicRef } from './utils/polymorphic';

type IconButtonComponent = <E extends ElementType = 'button'>(
  props: IconButtonProps<E> & { ref?: PolymorphicRef<E> },
) => ReactElement | null;

export type IconButtonProps<E extends ElementType = 'button'> = Omit<
  ButtonProps<E>,
  'children' | 'leadingIcon' | 'trailingIcon'
> & {
  icon: ReactNode;
  label: string;
};

function InnerIconButton<E extends ElementType = 'button'>(
  props: IconButtonProps<E>,
  forwardedRef: PolymorphicRef<E>,
): ReactElement | null {
  const { icon, label, variant, tone, size, block, ...rest } = props;

  const resolvedVariant = (variant ?? 'ghost') as ButtonVariantKey;
  const resolvedTone = (tone ?? 'neutral') as ButtonToneKey;
  const resolvedSize = (size ?? 'md') as ButtonSizeKey;
  const resolvedBlock = block ?? false;

  const ariaLabel = (rest as Record<string, unknown>)['aria-label'] as string | undefined;
  const title = (rest as Record<string, unknown>)['title'] as string | undefined;

  return (
    <Button
      {...(rest as ButtonProps<E>)}
      ref={forwardedRef}
      variant={resolvedVariant}
      tone={resolvedTone}
      size={resolvedSize}
      block={resolvedBlock}
      leadingIcon={icon}
      aria-label={ariaLabel ?? label}
      title={title ?? label}
    />
  );
}

export const IconButton = forwardRefWithAs(InnerIconButton) as IconButtonComponent;
