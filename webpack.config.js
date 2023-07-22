// плагин для правильного задания пути
const path = require('path');
// плагин для сборки финального html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// плагин для сss
const MiniCSSExtreactPlugin = require('mini-css-extract-plugin');

module.exports = {
    // если нужен конкретный путь выгрузки
    // output: {
    //     path: path.resolve(__dirname, 'result'),
    //     filename: 'main.js'
    // },
    module: {
        rules: [
            // загрузчик для файлов txt
            {
                test: /\.txt$/,
                loader: 'raw-loader'
            },
            // загрузчик для файлов css
            {
                test: /\.css$/,
                // Загрузчики указываем в обратном порядке работы
                use: [
                    MiniCSSExtreactPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    // devServer: {
    //     static: {
    //       directory: path.join(__dirname, 'dist'),
    //     },
    //     compress: true,
    //     port: 8080,
    //   },
    // Плагин для финальной сборки html
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // filename: 'main.html'
        }),
        // Плагин для загрузчика css
        new MiniCSSExtreactPlugin()
    ]
}