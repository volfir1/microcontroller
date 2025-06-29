import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import boundaries from 'eslint-plugin-boundaries';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['src/**/*.{js,jsx}'],
    plugins: {
      boundaries,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'boundaries/element-types': [
        2,
        {
          default: 'disallow',
          rules: [
            {
              from: ['features'],
              allow: ['shared'],
              message: 'Features can only import from the shared directory.'
            },
            {
              from: ['app'],
              allow: ['features', 'shared']
            },
            {
              from: ['shared'],
              allow: []
            }
          ],
        },
      ],
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      'boundaries/elements': [
        {
          type: 'app',
          pattern: 'src/app/**/*',
        },
        {
          type: 'features',
          pattern: 'src/features/**/*',
        },
        {
          type: 'shared',
          pattern: 'src/shared/**/*',
        },
      ],
    },
  },
]);

