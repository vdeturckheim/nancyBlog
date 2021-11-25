
// TODO: also check .d.ts files
module.exports = {
    ignorePatterns: ['applications/*'],
    env: {
        commonjs: true,
        es2021: true,
        node: true,
        browser: true
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        'max-len': [2, 120]
    }
};
