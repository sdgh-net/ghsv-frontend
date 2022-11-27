<template>
  <v-app>
    <v-main>
          <Sidebar />
          <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from '@/components/Sidebar.vue';
export default defineComponent({
  components: {
    Sidebar
  },
  data: function () {
    return {
      hideSidebarRoutes: ['login', 'root', 'reset_password'],
    }
  },
  methods: {
    shouldHideSidebar: function () {
      console.log((this.$route.name as any) in this.hideSidebarRoutes)
      return (this.$route.name as any) in this.hideSidebarRoutes;
    },
  }
})
</script>

<style>
html {
  overflow: -moz-hidden-unscrollable;
  height: 100%;
}

body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none;
  height: 100%;
  width: calc(100vw + 18px);
  overflow: auto;
}
</style>
