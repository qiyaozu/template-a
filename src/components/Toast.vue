<template>
  <div class="yaozu-toast">
    <p v-text="text" :class="show?'show':''"></p>
  </div>
</template>

<script>
export default {
    props: {
        show: Boolean,
        text: {
            type: String,
            default: 'toast'
        }
    }
}
</script>

<style lang="less">
.yaozu-toast{
  position: relative;
  z-index: 100000000000;
  p{
    position: fixed;
    top: 100vh;
    left: 50%;
    padding: 2vw 5vw;
    border-radius: 1vw;
    background: #fff;
    line-height: 4.4vw;
    border: 1px solid #ccc;
    font-size: 3.8vw;
    transform: translate(-50%, 100%);
    transition: all .2s linear;
    &.show {
      top: 75%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
