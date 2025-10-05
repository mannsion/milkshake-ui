import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

const typescriptConfigs = tseslint.configs['flat/recommended'].map((config) => {
	const languageOptions = {
		...(config.languageOptions ?? {}),
		parserOptions: {
			...(config.languageOptions?.parserOptions ?? {}),
			ecmaFeatures: {
				...(config.languageOptions?.parserOptions?.ecmaFeatures ?? {}),
				jsx: true,
			},
		},
		globals: {
			...(config.languageOptions?.globals ?? {}),
			...globals.browser,
			...globals.es2021,
		},
	};

	return {
		...config,
		languageOptions,
	};
});

const reactRecommended = reactPlugin.configs.flat.recommended;
const reactHooksRecommended = reactHooksPlugin.configs['flat/recommended'];
const jsxA11yRecommended = jsxA11yPlugin.configs.recommended;

export default [
	{
		ignores: ['build/**', 'public/**', '.react-router/**', 'eslint.config.js'],
	},
	js.configs.recommended,
	...typescriptConfigs,
	{
		files: ['**/*.{ts,tsx,js,jsx}'],
		languageOptions: {
			parserOptions: {
				ecmaFeatures: { jsx: true },
			},
			globals: {
				...globals.browser,
				...globals.es2021,
			},
		},
		plugins: {
			...(reactRecommended.plugins ?? {}),
			...(reactHooksRecommended[0]?.plugins ?? { 'react-hooks': reactHooksPlugin }),
			'jsx-a11y': jsxA11yPlugin,
		},
		rules: {
			...(reactRecommended.rules ?? {}),
			...(reactHooksRecommended[0]?.rules ?? {}),
			...(jsxA11yRecommended.rules ?? {}),
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
			'react/function-component-definition': 'off',
			'@typescript-eslint/no-explicit-any': 'warn',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];
