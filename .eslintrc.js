module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb'
    ],
    rules: {
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'semi': 'off',
        'comma-dangle': 'off',
        'indent': ['error', 4],
        'class-methods-use-this': 'off',
        'func-names': 'off',
        'consistent-return': 'off',
        'no-param-reassign': 'off',
        "no-restricted-syntax": 0,
        'max-len': 'off',
        'prefer-destructuring': 'off',
        'import/named': 'off',
        'import/prefer-default-export': 'off',
        'global-require': 'off',
        'no-unused-expressions': 'off',
        'no-restricted-globals': 'off',
        'no-new': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
