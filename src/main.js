import Vue from 'vue'
import App from './App.vue'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
import settings from './settings'

Vue.config.productionTip = false

process.env.NODE_ENV !== 'development' && Raven
  .config('http://f4a7081fa0ea4e5cb22ef6c106d9d5a4@127.0.0.1:9000/2', {
    release: settings.RELEASE
  })
  .addPlugin(RavenVue, Vue)
  .install()

new Vue({
  render: h => h(App),
}).$mount('#app')


