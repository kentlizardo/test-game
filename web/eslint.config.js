// @ts-check
import globals from 'globals'
import tseslint from 'typescript-eslint'
import base from '@repo/eslint-config/web'

export default tseslint.config([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [base],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.vite.json', './tsconfig.web.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
