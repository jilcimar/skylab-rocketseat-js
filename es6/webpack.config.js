module.exports = {
    entry: './src/main.js',
    output: {
        path:__dirname + '/public',
        filename:'bundle.js',
    },
    devSerber: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modles/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    }
};