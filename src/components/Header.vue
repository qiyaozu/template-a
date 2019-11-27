<template>
    <div class='common-header' :style='{color: textColor}'>
        <div class="back" :style="{borderColor: textColor}"
        v-if='showBack' @click="goBack" ></div>
        <span v-else></span>
        <div class="title" v-text="title" :style="{color: textColor}"></div>
        <div>
            <slot name='header-right'></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'default title'
        },
        showBack: {
            type: Boolean,
            default: true
        },
        textColor: {
            type: String,
            default: '#fff'
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    },
}
</script>

<style lang="less">
@import url('../assets/css/components/Header.less');
</style>
