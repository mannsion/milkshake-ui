import { forwardRef } from 'react';
import type { ElementType, ReactElement } from 'react';
import type { PolymorphicComponentProps, PolymorphicRef } from './polymorphic';

type ForwardRefWithAs = <DefaultElement extends ElementType, OwnProps>(
  render: (props: PolymorphicComponentProps<DefaultElement, OwnProps>, ref: PolymorphicRef<DefaultElement>) => ReactElement | null,
) => <E extends ElementType = DefaultElement>(
  props: PolymorphicComponentProps<E, OwnProps> & { ref?: PolymorphicRef<E> },
) => ReactElement | null;

export const forwardRefWithAs = forwardRef as unknown as ForwardRefWithAs;
