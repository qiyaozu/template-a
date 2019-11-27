const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const IS_PROD = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'yufa'
console.log('is production: ', IS_PROD)
module.exports = {
  // eslint-loader 是否在保存的时候检查
  chainWebpack: config => {
        // 自动fix代码
        config.module
            .rule('eslint')
            .use('eslint-loader')
            .loader('eslint-loader')
            .tap(options => {
                options.fix = true
                return options
            })
    },

    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': [
                './src/theme'
                ]
            }
        }
    },

    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: true
        }
    },


    configureWebpack: config => {
        if (IS_PROD) {
            const plugins = []
            plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: productionGzipExtensions,
                    threshold: 10240, // 超过10k再进行压缩
                    minRatio: 0.8, // 压缩率小于0.8再进行压缩
                    // deleteOriginalAssets: true // 是否删除原文件
                })
            )
            config.plugins = [...config.plugins, ...plugins]
        }
    }
}
