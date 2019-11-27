// toast.js
import ToastComponent from '../components/Toast.vue'

let $vm
const defaultShowTime = 2000

export default {
    install(Vue) {
        if (!$vm) {
            const ToastPlugin = Vue.extend(ToastComponent)

            $vm = new ToastPlugin({
                el: document.createElement('div')
            })

            document.body.appendChild($vm.$el)
        }

        $vm.show = false

        const toast = {
            show(obj) {
                $vm.show = true

                $vm.text = obj.text

                if (obj.time) {
                    setTimeout(() => {
                        $vm.show = false
                    }, obj.time)
                } else {
                    setTimeout(() => {
                        $vm.show = false
                    }, defaultShowTime)
                }
            },
            hide() {
                $vm.show = false
            }
        }

        if (!Vue.$toast) {
            Vue.$toast = toast
        }

        // Vue.prototype.$toast = Vue.$toast;

        Vue.mixin({
            created() {
                this.$toast = Vue.$toast
            }
        })
    }
}
