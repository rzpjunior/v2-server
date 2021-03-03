const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: './src/client.js',
    output: {
        path: __dirname+ './dist',
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    // Here you should change 'env' to '@babel/preset-env'
                    presets: ['@babel/preset-env'],
                },
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        // Requires sass-loader@^7.0.0

                        // Requires sass-loader@^8.0.0
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                fiber: require('fibers'),
                            },
                        },
                    },
                ],
                },
            
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                enforce: "pre", // preload the jshint loader
                use: [{
                    loader: "url-loader",
                    options: {
                        query: { limit: 100000 }
                    }
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                enforce: "pre", // preload the jshint loader
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                use: [{
                    loader: "url-loader",
                    options: {
                        query: { limit: 100000 }
                    }
                }]
            }
        ]
        // rules: [
        //     {
        //         test: /\.s(c|a)ss$/,
        //         use: [
        //             'vue-style-loader',
        //             'css-loader',
        //             {
        //                 loader: 'sass-loader',
        //                 options: {
        //                     implementation: require('sass'),
        //                     indentedSyntax: true // optional
        //                 }
        //             }
        //         ]
        //     },
        //     {
        //         test: /\.js|\.jsx$/,
        //         use: [
        //             'vue-style-loader',
        //             'css-loader',
        //             {
        //                 loader: 'sass-loader',
        //                 options: {
        //                     implementation: require('sass'),
        //                     indentedSyntax: true // optional
        //                 }
        //             }
        //         ]
        //     },
        //
        // ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // new UglifyJsPlugin({
        //         "uglifyOptions":
        //             {
        //                 compress: {
        //                     warnings: false
        //                 },
        //                 sourceMap: true
        //             }
        //     }
        // ),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}