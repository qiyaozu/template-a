const settings = require('./src/settings')
module.exports = {
  configureWebpack: {
    plugins: check_env_to_gene_plugin()
  }
}

function check_env_to_gene_plugin() {
  if (process.env.NODE_ENV === 'development') {
    return []
  } else {
    const SentryCliPlugin = require("@sentry/webpack-plugin");
    return [
      new SentryCliPlugin({
        include: ".",
        release: settings.RELEASE,
        ignore: ['node_modules'],
        configFile: ".sentryclirc"
      })
    ]
  }
}