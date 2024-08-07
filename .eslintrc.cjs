module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	extends: ['@unocss', '@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
	plugins: [],
	rules: {
		'@unocss/order': 'off',
		'no-unused-expressions': 'off',
		'vue/no-multiple-template-root': 'off',
		'vue/multi-word-component-names': 'off',
		'vue/no-v-html': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		semi: 'off',
		'no-console': ['error', {allow: ['error']}],
	},
}
