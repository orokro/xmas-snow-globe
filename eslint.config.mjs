import vue from 'eslint-plugin-vue';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default [...compat.extends('eslint:recommended', 'plugin:vue/vue3-essential'), {
	plugins: {
		vue,
	},

	languageOptions: {
		globals: {
			...globals.node,
			electronAPI: 'readonly',
			electronClipboard: 'readonly',
		},

		ecmaVersion: 'latest',
		sourceType: 'module',
	},

	rules: {
		'vue/no-use-v-if-with-v-for': 'off',
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-unused-vars': 'off',
		'no-async-promise-executor': 'off',
		'no-fallthrough': 'off',
		'no-constant-condition': 'off',
		'vue/no-mutating-props': 'off',
		'no-case-declarations': 'off',
		'no-inner-declarations': 'off',
	},
}];
