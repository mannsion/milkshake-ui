import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import tsParser from '@typescript-eslint/parser';

export default [
	prettier,
	...svelte.configs.prettier,
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: tsParser,
			},
		},
	},
];
