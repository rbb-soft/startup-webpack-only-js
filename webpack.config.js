const htmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    devServer: {
        watchFiles: ["src/*.html","src/*.css"],
        hot: true,
      },
    entry: './src/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        rules : [
            {
                test : /\.css$/,
                use:  [
                    { loader : 'style-loader'},
                    { loader : 'css-loader'}
                ]
            }
        ]
    },
    plugins: [
        new htmlWebPackPlugin({
            template: './src/index.html'
        })
    ]
}