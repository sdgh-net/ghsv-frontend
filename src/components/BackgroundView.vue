<template>
    <div id="background-img">
        <div id="background-image-wrap-mask"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data: () => ({
    }),
    methods: {
    },
    created: function () {
    }
})
</script>


<style scoped>
#background-img {
    /*图片右上对齐*/
    background-image: url("https://d2ph5fj80uercy.cloudfront.net/04/cat4575.jpg");
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    box-sizing: border-box;
    bottom: 0px;
    top: 0px;
    margin: 0;
    padding: 0;
    right: 0;
}

#background-image-wrap-mask {
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, .3);
}
</style>