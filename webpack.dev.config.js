const path = require('path'); 

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/js/main.js'), 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 9000,
        contentBase: './' ,  
    },
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
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            { // scss
                test: /\.scss$/, 
                use: [  
                    { 
                        loader: 'style-loader'   
                    },
                    { 
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            importLoaders: true,
                        }
                    }, 
                    { 
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                ]
            } 
        ]
    } 
}