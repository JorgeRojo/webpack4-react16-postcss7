const path = require('path'); 

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/js/main.js'), 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
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
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react', 
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-proposal-class-properties'
                        ],
                        sourceMap: true,
                    }
                }
            },
            { // scss
                test: /\.scss$/, 
                use: [  
                    { 
                        loader: 'style-loader' , 
                        options: {
                            sourceMap: true,
                        } 
                    },
                    { 
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: true,
                            sourceMap: true,
                        }
                    },
                    { 
                        loader: 'sass-loader',
                        options: { 
                            sourceMap: true,
                        }
                    },
                    { 
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [ 
                                //require('cssnano')({preset: 'default'}),
                                //require('postcss-nested')(),
                            ],
                            sourceMap: true,
                        }
                    } 
                ]
            } 
        ]
    } 
}