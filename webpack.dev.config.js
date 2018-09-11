const path = require('path'); 
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: ["@babel/polyfill", path.resolve(__dirname, 'src/components/main.js')], 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        sourceMapFilename: "[file].map?[contenthash]"
    },
    devServer: {
        port: 9000,
        contentBase: './' ,  
        hot: true,
    },
    plugins: [  
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'eval-source-map',
    module: {
        rules: [  
            { //fonts
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'css/fonts/'
                    }
                } 
            },
            { //images
                test: /\.(png|jpg|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: { 
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                } 
            },
            { // js
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {  
                        sourceMap: true,
                    }
                }
            },
            { // scss
                test: /\.scss$/, 
                use: [     
                    { loader: 'style-loader', options: { sourceMap: true } },
                    { 
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: true,
                            sourceMap: true,  
                            localIdentName: '[name]-[local]-[hash:base64:5]',
                        }
                    },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } } 
                ]
            } 
        ]
    } 
}