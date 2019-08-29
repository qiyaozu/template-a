import Vue from 'vue'
import App from './App.vue'
import { fetchPost, fetchGet } from './api'
import router from './router/router'

Vue.config.productionTip = false
process.env.NODE_ENV === 'development' && require('./mock')
Vue.prototype.fetchGet = fetchGet
Vue.prototype.fetchPost = fetchPost

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')
