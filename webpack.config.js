const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]',
    },

    module: {
        rules: [
            // loader for css files
            {
                test: /\.css$/i, 
                use: ['style-loader', 'css-loader'],
            },

            // loader for scss files
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },

            // babel for javascript and react
            { 
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },

    resolve: {
        extensions: ['.js'],
    }
}
