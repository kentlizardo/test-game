// @ts-check
import tseslint from 'typescript-eslint'
import base from '@repo/eslint-config/base'

export default tseslint.config([
  ...base,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
