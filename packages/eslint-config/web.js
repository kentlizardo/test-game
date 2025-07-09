// @ts-check
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import base from './base.js'

export default tseslint.config([
  base,
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,
])
