// toast.js
import ToastComponent from '@/components/Toast.vue'

let $vm
let defaultShowTime = 2000

export default {
  install (Vue, options) {
    if (!$vm) {
      const ToastPlugin = Vue.extend(ToastComponent)

      $vm = new ToastPlugin({
        el: document.createElement('div')
      })

      document.body.appendChild($vm.$el)
    }

    $vm.show = false

    let toast = {
      show (obj) {
        $vm.show = true

        $vm.text = obj.text

        if (obj.time) {
          setTimeout(function () {
            $vm.show = false
          }, obj.time)
        } else {
          setTimeout(function () {
            $vm.show = false
          }, defaultShowTime)
        }
      },
      hide () {
        $vm.show = false
      }
    }

    if (!Vue.$toast) {
      Vue.$toast = toast
    }

    // Vue.prototype.$toast = Vue.$toast;

    Vue.mixin({
      created () {
        this.$toast = Vue.$toast
      }
    })
  }
}
