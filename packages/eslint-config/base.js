// @ts-check
import js from '@eslint/js'
import { globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import perfectionist from 'eslint-plugin-perfectionist'

export default tseslint.config(
  globalIgnores(['lib'], 'Ignore Built Typescript'),
  globalIgnores(['eslint.config.js']),
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  perfectionist.configs['recommended-natural'],
  prettier
)
