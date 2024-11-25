const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true, // Clean output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
    ],
};
