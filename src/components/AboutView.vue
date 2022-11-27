<template>
    <BackgroundView />
    <div class="index">
        <v-cols col="1"></v-cols>
        <v-cols col="10">
            <v-container>
                <h2 id='关于'>关于</h2>
                <p>监督系统！仍在开发中。</p>
                <p>源码：<a href='https://github.com/sdgh-net/ghsv-backend'>后端</a>与<a
                        href='https://github.com/sdgh-net/ghsv-frontend'>前端</a></p>
            </v-container>
        </v-cols>
        <v-cols col="1"></v-cols>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import global_ from '../components/GLOBAL.vue'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import BackgroundView from './BackgroundView.vue';
export default defineComponent({
    components: {
        BackgroundView,
    },
    data: () => ({
    }),
    methods: {
    },
});
</script>
<style scoped>
.index {
    height: 100%;
    width: 100%;
    z-index: 0;
    background-color: aliceblue;
    padding: 5vmin;
    margin: 0;
}
</style>