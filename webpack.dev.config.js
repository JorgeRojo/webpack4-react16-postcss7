const path = require('path'); 
const webpack = require('webpack');
const cssModulesClassNaming = require('./scripts/cssModulesClassNaming')();

module.exports = {
    mode: 'development',
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src')
        }  
    },    
    entry: {
        "home": ["@babel/polyfill", path.resolve(__dirname, 'src/entries/home.js')],
        "redux": ["@babel/polyfill", path.resolve(__dirname, 'src/entries/redux.js')],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        sourceMapFilename: "[file].map?[contenthash]"
    },
    devServer: {
        port: 9000,
        contentBase: './web/' ,  
        hot: true,
        open: 'chrome',
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
                            localIdentName: cssModulesClassNaming.localIdentName, 
                            getLocalIdent: cssModulesClassNaming.getLocalIdent
                        }
                    },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } } 
                ]
            } 
        ]
    } 
}