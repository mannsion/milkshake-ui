import type { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType } from 'react';

type AsProp<E extends ElementType> = {
  as?: E;
};

type PropsToOmit<E extends ElementType, P> = keyof (AsProp<E> & P);

export type PolymorphicComponentProps<E extends ElementType, P> = P &
  AsProp<E> &
  Omit<ComponentPropsWithoutRef<E>, PropsToOmit<E, P>>;

export type PolymorphicRef<E extends ElementType> = ComponentPropsWithRef<E>['ref'];
