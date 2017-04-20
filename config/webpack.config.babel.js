import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                loader: 'url-loader?limit=100000&name=[name].[ext]'
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html', favicon: './public/favicon.ico'})
    ]
};
