const SentryCliPlugin = require("@sentry/webpack-plugin");
const settings = require('./src/settings')
module.exports = {
    configureWebpack: {
      plugins: [
        new SentryCliPlugin({
            include: ".",
            release: settings.RELEASE,
            ignore: ['node_modules'],
            configFile: ".sentryclirc"
        })
      ]
    }
}