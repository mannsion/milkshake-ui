import { sprinkles } from '../sprinkles.css';

export type SprinklesProps = Parameters<typeof sprinkles>[0];

const sprinklesPropKeys = Array.from(sprinkles.properties) as Array<keyof SprinklesProps & string>;

export const sprinklesPropertySet = new Set(sprinklesPropKeys);

export const isSprinklesProp = (key: string): key is keyof SprinklesProps =>
	sprinklesPropertySet.has(key as keyof SprinklesProps & string);

export type PartitionedSprinklesProps = {
	sprinkleProps: Partial<SprinklesProps>;
	nativeProps: Record<string, unknown>;
};

export function partitionSprinkleProps<Props extends Record<string, unknown>>(
	props: Props,
): PartitionedSprinklesProps {
	const sprinkleProps: Record<string, unknown> = {};
	const nativeProps: Record<string, unknown> = {};

	for (const [key, value] of Object.entries(props)) {
		if (value === undefined) {
			continue;
		}

		if (isSprinklesProp(key)) {
			sprinkleProps[key] = value;
		} else {
			nativeProps[key] = value;
		}
	}

	return {
		sprinkleProps: sprinkleProps as Partial<SprinklesProps>,
		nativeProps,
	};
}

export function getSprinklesClassName(props: Partial<SprinklesProps>): string {
	return Object.keys(props).length > 0 ? sprinkles(props as SprinklesProps) : '';
}
