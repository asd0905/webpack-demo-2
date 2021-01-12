const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /(node_modules)/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                }
            },
            /*{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },*/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
    },
    target: ['web', 'es5'],
    optimization: {
        minimize: false
    }
}
