import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import { defineConfig, GLOB_TS_SRC } from 'eslint-config-hyoban'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});



export default defineConfig(
  {
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
    formatting: false,
    lessOpinionated: true,
    preferESM: false,
    projectService: {
      defaultProject: 'tsconfig.json',
    },
    typeChecked: 'essential',
    tailwindCSS: {
      order: true,
    },
  },
  {
    files: GLOB_TS_SRC,
    rules: {
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/await-thenable': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
    },
  },
  {
    settings: {
      tailwindcss: {
      },
    },
    rules: {
      '@eslint-react/no-clone-element': 0,
      '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': 0,
      // NOTE: Disable this temporarily
        quotes: ['error', 'single'],
      'react-compiler/react-compiler': 0,
      'no-restricted-syntax': 0,
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      '@stylistic/jsx-self-closing-comp': 'error',
    },
  },
)
