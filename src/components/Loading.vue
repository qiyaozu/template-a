<!-- loading.vue组件 -->
<template>
    <div class="yz-loading-box" v-show="show">
        <div class="loading-mask"></div>
        <img src="/static/images/loading.svg" alt="">
        <div class="text" v-text="text"></div>
    </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    text: {
      type: String,
      default: '正在加载中...'
    }
  }
}
</script>

<style lang='less'>
@keyframes rotate{
  100% {
    transform: rotateZ(360deg);
  }
}
.yz-loading-box {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 10000000;
  .loading-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: -1;
  }
  & > img {
    display: block;
    width: 10vw;
    height: auto;
    animation: rotate 2s linear infinite;
  }
  .text {
    flex:  0 0 100%;
    margin-top: 3vw;
    text-align: center;
    font-size: 2.4vw;
    color: #fff;
  }
}
</style>

