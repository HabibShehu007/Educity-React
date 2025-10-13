import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: ['dist/**', 'tailwind.config.js', 'postcss.config.js', 'vite.config.js'],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
    plugins: {
      react,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // ✅ Optional for React 17+
      'react/prop-types': 'off',         // ✅ Optional if using TypeScript or skipping PropTypes
    },
  },
]);
