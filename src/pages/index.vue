<template>
    <div id="index">
        亲  开始愉快的写页面吧
        <!-- 测试mockjs生成的图片 -->
        <!-- <div v-for='(item, index) in lists' :key="index">
          <img :src="item.img" alt="">
        </div> -->
    </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      lists: []
    }
  },
  async created() {
    let res = await api.getcode()
    console.log(res)
    this.lists = [...res]
  }
}
</script>
