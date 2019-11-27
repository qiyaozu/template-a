<template>
    <transition name="scale">
        <div class="scale-wrapper" v-show="showScaleBox">
            <p class='mask' @click='hideBox'></p>
            <div class="scale-box">
                <slot name='content'></slot>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        showScaleBox: {
            type: Boolean,
            default: false
        },
        maskClick: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        hideBox() {
            if (this.maskClick) {
                this.$emit('update:showScaleBox', false)
            }
        }
    },
}
</script>

<style lang="less">
.scale-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: 50% 50%;
    transform: scale(1);
    z-index: 99;
    &.scale-enter-active,
    &.scale-leave-active {
        transition: all .3s ease;
    }
    &.scale-enter,
    &.scale-leave-active {
        transform: scale(0);
    }
    .scale-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 101;
    }
    .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, .5);
        z-index: 100;
    }
}
</style>
