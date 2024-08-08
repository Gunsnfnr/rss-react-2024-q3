module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react-compiler'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'react-compiler/react-compiler': 'error',
    'react-refresh/only-export-components': ['off', { allowConstantExport: true }],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.app.json', './tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['next.config.mjs'],
};
