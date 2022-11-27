<template>
    <v-container id="up-bar" fluid>
        <v-row full-width justify-center>
            <v-col justify-start>
                首页
            </v-col>
            <v-col justify-end style="text-align:right;padding-right: 20px;">
                {{ (user() as any).nickname }}
            </v-col>
        </v-row>
    </v-container>
    <v-row>
        <v-col cols="5">

        </v-col>
        <v-col cols="7">
            <v-row rows="3">

            </v-row>
            <v-row rows="8">
                <v-col>
                    <ccv-pie-chart :data='data' :options='options'></ccv-pie-chart>
                </v-col>
                <v-col>

                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import global_ from '../components/GLOBAL.vue'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import "@carbon/styles/css/styles.css";
import "@carbon/charts/styles.css";

export default defineComponent({
    data: () => ({

        data: [
            {
                "group": "2V2N 9KYPM version 1",
                "value": 20000
            },
            {
                "group": "L22I P66EP L22I P66EP L22I P66EP",
                "value": 65000
            },
            {
                "group": "JQAI 2M4L1",
                "value": 75000
            },
            {
                "group": "J9DZ F37AP",
                "value": 1200
            },
            {
                "group": "YEL48 Q6XK YEL48",
                "value": 10000
            },
            {
                "group": "Misc",
                "value": 25000
            }
        ],
        options: {
            "title": "Pie",
            "resizable": true,
            "height": "400px"
        },
        user: function () {
            return (this as any).$store.getters.user;
        }
    }),
    computed: {
    },
});
</script>
<style scoped>
.no-max-width {
    max-width: none;
}

#up-bar {
    background-color: skyblue;
    color: black;
    font-size: min(5vw, 5vh);
}
</style>