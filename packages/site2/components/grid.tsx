import type { ElementType, ReactElement } from 'react';
import type { SprinklesProps } from '@milkshake-ui/core';
import { Box } from './box';
import type { BoxProps } from './box';
import { forwardRefWithAs } from './utils/forward-ref';
import type { PolymorphicRef } from './utils/polymorphic';

export type GridProps<E extends ElementType = 'div'> = BoxProps<E> & {
	columns?: SprinklesProps['gridTemplateColumns'];
	rows?: SprinklesProps['gridTemplateRows'];
	autoColumns?: SprinklesProps['gridAutoColumns'];
	autoRows?: SprinklesProps['gridAutoRows'];
	flow?: SprinklesProps['gridAutoFlow'];
};

type GridComponent = <E extends ElementType = 'div'>(
	props: GridProps<E> & { ref?: PolymorphicRef<E> },
) => ReactElement | null;

function InnerGrid<E extends ElementType = 'div'>(
	props: GridProps<E>,
	forwardedRef: PolymorphicRef<E>,
): ReactElement | null {
	const { columns, rows, autoColumns, autoRows, flow, ...rest } = props;

	const resolvedProps: Record<string, unknown> = {
		...rest,
		display: 'grid' as const,
	};

	if (columns !== undefined) resolvedProps.gridTemplateColumns = columns;
	if (rows !== undefined) resolvedProps.gridTemplateRows = rows;
	if (autoColumns !== undefined) resolvedProps.gridAutoColumns = autoColumns;
	if (autoRows !== undefined) resolvedProps.gridAutoRows = autoRows;
	if (flow !== undefined) resolvedProps.gridAutoFlow = flow;

	return <Box ref={forwardedRef} {...(resolvedProps as BoxProps<ElementType>)} />;
}

export const Grid = forwardRefWithAs(InnerGrid) as GridComponent;

export type GridItemProps<E extends ElementType = 'div'> = BoxProps<E> & {
	columnSpan?: SprinklesProps['gridColumn'];
	rowSpan?: SprinklesProps['gridRow'];
};

type GridItemComponent = <E extends ElementType = 'div'>(
	props: GridItemProps<E> & { ref?: PolymorphicRef<E> },
) => ReactElement | null;

function InnerGridItem<E extends ElementType = 'div'>(
	props: GridItemProps<E>,
	forwardedRef: PolymorphicRef<E>,
): ReactElement | null {
	const { columnSpan, rowSpan, ...rest } = props;

	const resolvedProps: Record<string, unknown> = {
		...rest,
	};

	if (columnSpan !== undefined) resolvedProps.gridColumn = columnSpan;
	if (rowSpan !== undefined) resolvedProps.gridRow = rowSpan;

	return <Box ref={forwardedRef} {...(resolvedProps as BoxProps<ElementType>)} />;
}

export const GridItem = forwardRefWithAs(InnerGridItem) as GridItemComponent;
