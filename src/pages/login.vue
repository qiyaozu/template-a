<template>
    <div>
        <button @click='login'>login</button>
    </div>
</template>

<script>
import { fetchGet } from '@/api'
export default {
    methods: {
        login () {
            fetchGet('/1/user').then((res) => {
                console.log(res)
            })
        }
    }
}
</script>