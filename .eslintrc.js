// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'vuefix'
    ],
    // add your custom rules here
    rules: {
        // requires one or more spaces inside of the curly brace pair.
        // "template-curly-spacing": ["error", "always"],
        // allow paren-less arrow functions
        'vuefix/vuefix': [2, { auto: true }],
        indent: ['error', 4],
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // 'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        camelcase: [2, { properties: 'never' }],
        'no-irregular-whitespace': 0
    }
}
