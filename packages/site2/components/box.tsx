import type {
	ComponentPropsWithoutRef,
	ElementType,
	ReactElement,
	ReactNode,
} from 'react';
import { getSprinklesClassName, partitionSprinkleProps, type SprinklesProps } from '@milkshake-ui/core';
import { cx } from './utils/cx';
import { forwardRefWithAs } from './utils/forward-ref';
import { type PolymorphicComponentProps, type PolymorphicRef } from './utils/polymorphic';

type BoxOwnProps = {
	className?: string;
	children?: ReactNode;
	style?: ComponentPropsWithoutRef<'div'>['style'];
} & SprinklesProps;

export type BoxProps<E extends ElementType = 'div'> = PolymorphicComponentProps<E, BoxOwnProps>;

type BoxComponent = <E extends ElementType = 'div'>(
	props: BoxProps<E> & { ref?: PolymorphicRef<E> },
) => ReactElement | null;

function InnerBox<E extends ElementType = 'div'>(
	props: BoxProps<E>,
	forwardedRef: PolymorphicRef<E>,
): ReactElement | null {
	const { as, className, children, ...restProps } = props;
	const Component = (as ?? 'div') as ElementType;
	const { sprinkleProps, nativeProps } = partitionSprinkleProps(restProps);
	const sprinkleClassName = getSprinklesClassName(sprinkleProps);

	return (
		<Component
			ref={forwardedRef as PolymorphicRef<ElementType>}
			className={cx(sprinkleClassName, className)}
			{...(nativeProps as ComponentPropsWithoutRef<ElementType>)}
		>
			{children}
		</Component>
	);
}

export const Box = forwardRefWithAs(InnerBox) as BoxComponent;

export { cx };
