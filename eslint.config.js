import { defineConfig, globalIgnores } from 'eslint/config'
import kalortechConfig from '@kalortech/eslint-config'

export default defineConfig([
  globalIgnores(['dist', 'scripts']),
  ...kalortechConfig,
  {
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',
        },
      },
    },
    rules: {
      // Allow default exports for App.tsx and page index files (router convention)
      'import/no-default-export': 'off',
    },
  },
])
