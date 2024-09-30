import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: globals.browser },
    rules: {
      '@stylistic/js/indent': ['warn', 2],
      '@stylistic/js/quotes': ['warn', 'single'],
      '@stylistic/js/jsx-quotes': ['warn', 'prefer-single'],
      '@stylistic/js/semi': ['warn', 'never'],
      '@stylistic/js/quote-props': ['error', 'as-needed'],
      'react/prop-types': 'off',
    },
  },
]
