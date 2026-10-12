import js from '@eslint/js'
import prettier from 'eslint-config-prettier/flat'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['.next/', 'node_modules/', 'public/'],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  prettier
)
