const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: 'node',
    entry: './src/index.ts',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ]
}