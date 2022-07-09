module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                '@middlewares': './src/middlewares',
                '@repositories': './src/repositories',
                '@use-cases': './src/use-cases'
            }
        }]
    ],
    ignore: [
        '**/*.spec.ts'
    ]
}