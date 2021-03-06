// loading.js
import LoadingComponent from '../components/Loading.vue'

let $vm

export default {
    install(Vue) {
        if (!$vm) {
            const LoadingPlugin = Vue.extend(LoadingComponent)

            $vm = new LoadingPlugin({
                el: document.createElement('div')
            })

            document.body.appendChild($vm.$el)
        }

        $vm.show = false

        const loading = {
            show(text) {
                $vm.show = true

                $vm.text = '加载中...' || text
            },
            hide() {
                $vm.show = false
            }
        }

        if (!Vue.$loading) {
            Vue.$loading = loading
        }

        // Vue.prototype.$loading = Vue.$loading;

        Vue.mixin({
            created() {
                this.$loading = Vue.$loading
            }
        })
    }
}
