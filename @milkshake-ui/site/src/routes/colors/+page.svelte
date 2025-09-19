<script lang="ts">
    import { sprinkles } from '@milkshake-ui/core';
    import { colors } from '@milkshake-ui/core';

	const colorShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] as const;
	const palettes = [
		{ name: 'Primary', key: 'primary' as const, description: 'Vibrant berry-inspired colors - like mixed berry milkshakes' },
		{ name: 'Neutral', key: 'neutral' as const, description: 'Modern gray scale for clean, professional designs' },
		{ name: 'Success', key: 'success' as const, description: 'Fresh green colors for success states' },
		{ name: 'Error', key: 'error' as const, description: 'Bold red colors for error states' },
		{ name: 'Warning', key: 'warning' as const, description: 'Warm amber colors for warning states' },
		{ name: 'Info', key: 'info' as const, description: 'Cool blue colors for info states' },
	] as const;
</script>

<svelte:head>
	<title>Colors - Milkshake UI</title>
	<meta name="description" content="Explore the comprehensive color palette of Milkshake UI" />
</svelte:head>

<main class={sprinkles({ backgroundColor: 'neutral-50' })}>
	<!-- Header -->
	<header class={sprinkles({
		backgroundColor: 'white',
		borderBottomWidth: 'thin',
		borderBottomColor: 'neutral-200',
		paddingY: '6',
		paddingX: '6'
	})}>
		<div class={sprinkles({
			maxWidth: '80rem',
			marginLeft: '0',
			marginRight: '0',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between'
		})}>
			<div>
				<h1 class={sprinkles({
					fontSize: '3xl',
					fontWeight: 'bold',
					color: 'neutral-900',
					marginBottom: '1'
				})}>
					Color Palette
				</h1>
				<p class={sprinkles({
					color: 'neutral-600',
					fontSize: 'lg'
				})}>
					Comprehensive color system with semantic meanings
				</p>
			</div>
			<a
				href="/"
				class={sprinkles({
					backgroundColor: 'primary-500',
					color: 'white',
					paddingX: '4',
					paddingY: '2',
					borderRadius: 'md',
					fontWeight: 'medium',
					textDecoration: 'none',
					transitionDuration: 'normal',
					transitionTimingFunction: 'ease-out'
				})}
			>
				← Back to Home
			</a>
		</div>
	</header>

	<!-- Color Palettes -->
	<section class={sprinkles({ paddingY: '12', paddingX: '6' })}>
		<div class={sprinkles({ maxWidth: '80rem', marginLeft: '0', marginRight: '0' })}>
			{#each palettes as palette}
				<div class={sprinkles({ marginBottom: '12' })}>
					<div class={sprinkles({ marginBottom: '6' })}>
						<h2 class={sprinkles({
							fontSize: '2xl',
							fontWeight: 'semibold',
							color: 'neutral-800',
							marginBottom: '2'
						})}>
							{palette.name}
						</h2>
						<p class={sprinkles({
							color: 'neutral-600',
							fontSize: 'sm'
						})}>
							{palette.description}
						</p>
					</div>

					<div class={sprinkles({
						display: 'grid',
						gridTemplateColumns: 'autoFit100',
						gap: '3'
					})}>
						{#each colorShades as shade}
							{@const colorKey = `${palette.key}-${shade}` as keyof typeof colors}
							{@const colorValue = colors[colorKey] as string}
							<div class={sprinkles({
								borderRadius: 'lg',
								overflow: 'hidden',
								borderWidth: 'thin',
								borderColor: 'neutral-200'
							})}>
								<div
									class={sprinkles({
										height: '24',
										backgroundColor: colorKey as any
									})}
								></div>
								<div class={sprinkles({
									padding: '3',
									backgroundColor: 'white'
								})}>
									<div class={sprinkles({
										fontSize: 'xs',
										fontWeight: 'semibold',
										color: 'neutral-900',
										marginBottom: '1'
									})}>
										{shade}
									</div>
									<div class={sprinkles({
										fontSize: 'xs',
										color: 'neutral-500',
										fontFamily: 'mono'
									})}>
										{colorValue}
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Usage Examples -->
	<section class={sprinkles({
		paddingY: '12',
		paddingX: '6',
		backgroundColor: 'neutral-50'
	})}>
		<div class={sprinkles({ maxWidth: '80rem', marginLeft: '0', marginRight: '0' })}>
			<h2 class={sprinkles({
				fontSize: '2xl',
				fontWeight: 'semibold',
				color: 'neutral-800',
				marginBottom: '8',
				textAlign: 'center'
			})}>
				Usage Examples
			</h2>

			<div class={sprinkles({
				display: 'grid',
				gridTemplateColumns: 'autoFit300',
				gap: '8'
			})}>
				<!-- Background Colors -->
				<div class={sprinkles({
					backgroundColor: 'white',
					padding: '6',
					borderRadius: 'lg',
					borderWidth: 'thin',
					borderColor: 'neutral-200'
				})}>
					<h3 class={sprinkles({
						fontSize: 'lg',
						fontWeight: 'semibold',
						color: 'neutral-800',
						marginBottom: '4'
					})}>
						Background Colors
					</h3>
					<div class={sprinkles({ display: 'flex', flexDirection: 'column', gap: '3' })}>
						<div class={sprinkles({
							backgroundColor: 'primary-500',
							color: 'white',
							padding: '4',
							borderRadius: 'md',
							fontSize: 'sm',
							fontWeight: 'medium'
						})}>
							Primary background
						</div>
						<div class={sprinkles({
							backgroundColor: 'success-500',
							color: 'white',
							padding: '4',
							borderRadius: 'md',
							fontSize: 'sm',
							fontWeight: 'medium'
						})}>
							Success background
						</div>
						<div class={sprinkles({
							backgroundColor: 'neutral-100',
							color: 'neutral-900',
							padding: '4',
							borderRadius: 'md',
							fontSize: 'sm',
							fontWeight: 'medium'
						})}>
							Neutral background
						</div>
					</div>
				</div>

				<!-- Text Colors -->
				<div class={sprinkles({
					backgroundColor: 'white',
					padding: '6',
					borderRadius: 'lg',
					borderWidth: 'thin',
					borderColor: 'neutral-200'
				})}>
					<h3 class={sprinkles({
						fontSize: 'lg',
						fontWeight: 'semibold',
						color: 'neutral-800',
						marginBottom: '4'
					})}>
						Text Colors
					</h3>
					<div class={sprinkles({ display: 'flex', flexDirection: 'column', gap: '3' })}>
						<div class={sprinkles({
							backgroundColor: 'neutral-50',
							padding: '4',
							borderRadius: 'md'
						})}>
							<p class={sprinkles({
								color: 'primary-600',
								fontSize: 'sm',
								fontWeight: 'medium'
							})}>
								Primary text color
							</p>
						</div>
						<div class={sprinkles({
							backgroundColor: 'neutral-50',
							padding: '4',
							borderRadius: 'md'
						})}>
							<p class={sprinkles({
								color: 'success-600',
								fontSize: 'sm',
								fontWeight: 'medium'
							})}>
								Success text color
							</p>
						</div>
						<div class={sprinkles({
							backgroundColor: 'neutral-50',
							padding: '4',
							borderRadius: 'md'
						})}>
							<p class={sprinkles({
								color: 'error-600',
								fontSize: 'sm',
								fontWeight: 'medium'
							})}>
								Error text color
							</p>
						</div>
						<div class={sprinkles({
							backgroundColor: 'neutral-50',
							padding: '4',
							borderRadius: 'md'
						})}>
							<p class={sprinkles({
								color: 'neutral-600',
								fontSize: 'sm',
								fontWeight: 'medium'
							})}>
								Neutral text color
							</p>
						</div>
					</div>
				</div>

				<!-- Border Colors -->
				<div class={sprinkles({
					backgroundColor: 'white',
					padding: '6',
					borderRadius: 'lg',
					borderWidth: 'thin',
					borderColor: 'neutral-200'
				})}>
					<h3 class={sprinkles({
						fontSize: 'lg',
						fontWeight: 'semibold',
						color: 'neutral-800',
						marginBottom: '4'
					})}>
						Border Colors
					</h3>
					<div class={sprinkles({ display: 'flex', flexDirection: 'column', gap: '3' })}>
						<div class={sprinkles({
							borderWidth: 'medium',
							borderColor: 'primary-500',
							padding: '4',
							borderRadius: 'md',
							fontSize: 'sm',
							fontWeight: 'medium'
						})}>
							Primary border
						</div>
						<div class={sprinkles({
							borderWidth: 'medium',
							borderColor: 'success-500',
							padding: '4',
							borderRadius: 'md',
							fontSize: 'sm',
							fontWeight: 'medium'
						})}>
							Success border
						</div>
						<div class={sprinkles({
							borderWidth: 'medium',
							borderColor: 'neutral-300',
							padding: '4',
							borderRadius: 'md',
							fontSize: 'sm',
							fontWeight: 'medium'
						})}>
							Neutral border
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>