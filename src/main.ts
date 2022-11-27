/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import chartsVue from "@carbon/charts-vue";


const app = createApp(App)

registerPlugins()

app
  .use(vuetify)
  .use(router)
  .use(store)
  .use(chartsVue)
  .mount('#app')
