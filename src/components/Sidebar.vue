<template>
    <v-navigation-drawer class="nav-sidebar-ly" expand-on-hover rail>
        <!--移动端侧滑呼出-->
        <v-list nav class="nav-sidebar-ly2">
            <v-list-item v-for="item in items" :prepend-icon="item.icon" :title="item.title"
                @click="$router.push(item.href)" href="javascript:void(0)">
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
export default {
    data() {
        return {
            items: [
                { title: '首页', icon: 'mdi-view-dashboard', href: "main" },
                { title: '监督管理', icon: 'mdi-calendar-text', href: "supervisions" },
                { title: '用户管理', icon: 'mdi-account-box-multiple', href: "users" },
                { title: '关于', icon: 'mdi-help-box', href: "about" },
                { title: '退出', icon: 'mdi-logout', href: "logout" },
            ],
        }
    },
    methods: {
        clickItem(item: any) {
            console.log(item);
        }
    }
}
</script>
<style scoped>
.nav-sidebar-ly {
    overflow: hidden;
    z-index: 10000;
    width: 1px;
}
</style>