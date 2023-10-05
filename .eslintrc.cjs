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
	extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
	plugins: [],
	rules: {
		'no-console': ['error', {allow: ['error']}],
		'no-unused-expressions': 'off',
		'vue/no-multiple-template-root': 'off',
		'vue/no-v-html': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
				semi: false,
			},
		],
		semi: 'off',
	},
}
