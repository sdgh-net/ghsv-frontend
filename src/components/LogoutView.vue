<template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import global_ from '@/components/GLOBAL.vue'
export default defineComponent({
    data: () => ({
    }),
    created: function () {
        (this as any).$store.dispatch("logout").then(() => {
            this.$router.push('/login')
        })
    }
})
</script>
<style scoped>

</style>