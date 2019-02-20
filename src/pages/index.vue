<template>
    <div id="index">
        亲  开始愉快的写页面吧
    </div>
</template>

<script>
export default {
  created () {
    console.log(process.env.NODE_ENV)
  }
}
</script>
