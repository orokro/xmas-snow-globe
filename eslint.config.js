import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
	{
		name: 'app/files-to-lint',
		files: ['**/*.{js,mjs,jsx,vue}'],
	},

	{
		name: 'app/files-to-ignore',
		ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
	},


	js.configs.recommended,
	...pluginVue.configs['flat/essential'],


	{
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
	}
]
