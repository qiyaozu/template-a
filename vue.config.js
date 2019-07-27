const settings = require('./src/settings')
module.exports = {
    configureWebpack: {
        plugins: checkNnvToGenePlugin()
    }
}

function checkNnvToGenePlugin () {
    if (process.env.NODE_ENV === 'development') {
        return []
    } else {
        const SentryCliPlugin = require('@sentry/webpack-plugin')
        return [
            new SentryCliPlugin({
                include: '.',
                release: settings.RELEASE,
                ignore: ['node_modules'],
                configFile: '.sentryclirc'
            })
        ]
    }
}
