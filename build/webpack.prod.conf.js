var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var env = process.env.NODE_ENV === 'testing'
<<<<<<< e571f61597bbb7acec70957e965fb31cfceabe3d
<<<<<<< 6d311138268c7dd40ceb995ca9974a0f1c96cb8b
? require('../config/test.env')
: config.build.env
=======
    ? require('../config/test.env')
    : config.build.env
>>>>>>> init commit
=======
? require('../config/test.env')
: config.build.env
>>>>>>> update structure

var webpackConfig = merge(baseWebpackConfig, {
    module: {
        loaders: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },
    vue: {
        loaders: utils.cssLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new webpack.ProvidePlugin({
            Promise: 'bluebird'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        // extract css into its own file
        new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash].css')),
        // generate dist index.html with correct asset hash for caching.
        // you can customize output by editing /index.html
        // see https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: process.env.NODE_ENV === 'testing'
            ? 'index.html'
            : config.build.index,
<<<<<<< e571f61597bbb7acec70957e965fb31cfceabe3d
<<<<<<< 6d311138268c7dd40ceb995ca9974a0f1c96cb8b
=======
>>>>>>> update structure
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
<<<<<<< e571f61597bbb7acec70957e965fb31cfceabe3d
=======
        template: 'index.html',
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
        },
>>>>>>> init commit
=======
>>>>>>> update structure
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        // split vendor js into its own file
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
<<<<<<< e571f61597bbb7acec70957e965fb31cfceabe3d
<<<<<<< 6d311138268c7dd40ceb995ca9974a0f1c96cb8b
=======
>>>>>>> update structure
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
<<<<<<< e571f61597bbb7acec70957e965fb31cfceabe3d
=======
                        /\.js$/.test(module.resource) &&
                        module.resource.indexOf(
                            path.join(__dirname, '../node_modules')
                        ) === 0
>>>>>>> init commit
=======
>>>>>>> update structure
                )
            }
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        })
    ]
})

if (config.build.productionGzip) {
    var CompressionWebpackPlugin = require('compression-webpack-plugin')

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
<<<<<<< e571f61597bbb7acec70957e965fb31cfceabe3d
<<<<<<< 6d311138268c7dd40ceb995ca9974a0f1c96cb8b
                config.build.productionGzipExtensions.join('|') +
                ')$'
=======
                    config.build.productionGzipExtensions.join('|') +
                    ')$'
>>>>>>> init commit
=======
                config.build.productionGzipExtensions.join('|') +
                ')$'
>>>>>>> update structure
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    )
}

module.exports = webpackConfig
