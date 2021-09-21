const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';


module.exports = {
    target: 'node',
    entry: './app/src/client/index.js',
    mode: isDevelopment ? 'development' : 'production',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'app/'),
        },
        hot: true,
        compress: true,
        port: 9000
    },
    module: {
        "rules": [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean)
                        }
                    }
                ]
            },
            {
                "test": /\.css$/,
                "use": [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './app/public/index.html'),
            filename: 'index.html'
        }),
        isDevelopment && new ReactRefreshWebpackPlugin()
    ].filter(Boolean)
}