/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 0,
    'vue/setup-compiler-macros': 0,
    'vue/multi-word-component-names': 0,
  },
}
