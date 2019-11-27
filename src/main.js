import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from '@/plugins/toast'

process.env.NODE_ENV === 'mock' && require('./mock')

Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
