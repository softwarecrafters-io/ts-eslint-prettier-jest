const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  {
    ignores: ['node_modules/**', 'lib/**', 'coverage/**', 'dist/**'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
    },
    rules: {
      ...tseslint.configs['eslint-recommended']?.rules,
      ...tseslint.configs['recommended']?.rules,
      ...prettierConfig.rules,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      'no-console': 1,
      'prettier/prettier': 1,
    },
  },
];

