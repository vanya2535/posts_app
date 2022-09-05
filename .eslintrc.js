module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: ['prettier'],
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  rules: {
    'vue/attribute-hyphenation': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-multiple-template-root': 0,
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false
      }
    ],
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': 0,
    'no-prototype-builtins': 0
  }
}
