module.exports = {
    printWidth: 100,
    tabWidth: 2,
    singleQuote: true,
    semi: true,
    trailingComma: 'all',
    arrowParens: "always",
    overrides: [
        {
            files: '*.js',
            options: {
                trailingComma: 'es5',
            },
        },
        {
            files: '*.{js,ts,jsx,tsx,scss,json,html,mdx}',
            options: {
                tabWidth: 4,
            },
        },
    ],
};
