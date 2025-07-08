import tseslint from 'typescript-eslint'
import base from '@repo/eslint-config'

export default tseslint.config([
  ...base,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
])
