// 0 - Off
// 1 - Warn
// 2 - Error

module.exports = {
  'plugins': [
    'react'
  ],
  'extends': [
    'airbnb'
  ],
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  'rules': {
    // General JS'
    "linebreak-style": 0,
    'no-empty': 0,
    'no-bitwise': 0,
    'dot-notation': [2, {
      'allowPattern': '^(START|FINISH|INIT|DONE|NOT_MODIFIED|304|FAIL)$',
    }],
    'no-console': 0,
    'arrow-parens': 0,
    'no-extra-semi': 0,
    'global-require': 0,
    'arrow-body-style': 0,
    'no-empty-function': 0,
    'no-confusing-arrow': 0,
    'template-curly-spacing': 0,
    'no-prototype-builtins': 0,
    'no-param-reassign': 0,
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'always-multiline'],
    'no-use-before-define': [2, {
      'functions': false,
    }],
    'no-unused-expressions': [2, {
      allowTaggedTemplates: true,
    }],
    'no-underscore-dangle': 0,
    'max-len': [1, 120],
    'consistent-return': 0,
    'space-before-function-paren': 0,
    'func-names': 0,
    'no-shadow': 0,

    // Import
    'import/first': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-dynamic-require': 0,
    'import/newline-after-import': 0,
    'import/prefer-default-export': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/no-extraneous-dependencies': 0,

    // React
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': [2, {
      'extensions': ['.js', '.jsx'],
    }],
    'react/prefer-stateless-function': 0,
    'react/jsx-boolean-value': 0,
    'react/prop-types': 0,
    'react/jsx-no-bind': 1,
    'react/no-unused-prop-types': 0,
    'react/sort-comp': [2, {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
      ],
    }],

    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/img-has-alt': 0,
    'jsx-a11y/href-no-hash': 0,
  }
}