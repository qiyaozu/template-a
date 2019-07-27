<template>
    <div>
       index page<br />
       <button @click="goLogin">go login page</button>
    </div>
</template>

<script>
export default {
    methods: {
        goLogin () {
            this.$router.push('/login')
        }
    }
}
</script>