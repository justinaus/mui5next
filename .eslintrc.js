module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['next', 'plugin:prettier/recommended', 'eslint:recommended'],
  plugins: ['unused-imports', 'simple-import-sort'],
  rules: {
    'unused-imports/no-unused-imports': 'warn',
    'no-unused-vars': 'warn',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
  },
};
