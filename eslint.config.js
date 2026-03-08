import pluginJs from '@eslint/js';
import { defineConfig } from 'eslint/config';
import pluginImport from 'eslint-plugin-import';
import pluginJest from 'eslint-plugin-jest';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import pluginHooks from 'eslint-plugin-react-hooks';
import pluginRefresh from 'eslint-plugin-react-refresh';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tsEsLint from 'typescript-eslint';
import pluginStylistic from '@stylistic/eslint-plugin';
import configPrettier from 'eslint-config-prettier';

const reactConfig = {
  name: 'React Config',
  files: ['src/**/*.{js,ts,jsx,tsx}'],
  languageOptions: {
    ...pluginJsxA11y.flatConfigs.recommended.languageOptions,
  },
  settings: {
    react: { version: 'detect' },
  },
  plugins: {
    react: pluginReact,
    'react-hooks': pluginHooks,
    'react-refresh': pluginRefresh,
    'jsx-a11y': pluginJsxA11y,
  },
  rules: {
    ...pluginReact.configs.flat.recommended.rules,
    ...pluginHooks.configs.recommended.rules,
    ...pluginRefresh.configs.recommended.rules,
    ...pluginJsxA11y.configs.recommended.rules,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};

const importConfig = {
  name: 'Import Config',
  files: ['src/**/*.{js,ts,jsx,tsx}'],
  plugins: {
    import: pluginImport,
    'simple-import-sort': pluginSimpleImportSort,
    'unused-imports': pluginUnusedImports,
  },
  settings: {
    ...pluginImport.configs.react.settings,
    ...pluginImport.configs.typescript.settings,
    'import/resolver': {
      ...pluginImport.configs.typescript.settings['import/resolver'],
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    ...pluginImport.configs.react.rules,
    ...pluginImport.configs.typescript.rules,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // for eslint-plugin-simple-import-sort
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react(-dom)?', '^node:', '^@?\\w', '^@/.*', '^\\.+/(?!assets/)'],
          ['^.+\\.json$', '^.+\\.(svg|png|jpg)$', '^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    // for eslint-plugin-unused-imports
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
};

const stylisticConfig = {
  name: 'Stylistic Config',
  files: ['src/**/*.{js,ts,jsx,tsx}'],
  plugins: { '@stylistic': pluginStylistic },
  rules: {
    '@stylistic/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: ['function', 'class'] },
      { blankLine: 'always', prev: '*', next: ['if', 'switch'] },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'never', prev: 'directive', next: 'directive' },
    ],
  },
};

const testConfig = {
  ...pluginJest.configs['flat/recommended'],
  name: 'Test Config',
  files: [
    'src/**/*.{test,spec}.{js,ts,jsx,tsx}',
    'src/**/*.__tests__/**/*.{js,ts,jsx,tsx}',
  ],
};

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'] },
  {
    ignores: [
      '{dist,build,public,node_modules}/**',
      '**/lib/utils.{js,ts}',
      '**/components/ui/**/*.{js,jsx,tsx}',
      '**/*.config.*',
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2025,
      },
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.*.json'],
      },
    },
  },
  pluginJs.configs.recommended,
  tsEsLint.configs.recommendedTypeChecked,
  tsEsLint.configs.stylistic,
  reactConfig,
  importConfig,
  testConfig,
  stylisticConfig,
  configPrettier,
]);
