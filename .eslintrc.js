module.exports = {
  "globals":{
    "__WebpackModuleApi":"writable"
  },
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "@typescript-eslint/explicit-module-boundary-types": "off"

  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
        "*.ts", "*.tsx"
      ],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": ["error"]
      },
      env: {
        jest: true
      }
    }
  ]
}
