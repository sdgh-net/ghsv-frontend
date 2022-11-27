import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '../components/LoginView.vue'
import global_ from '../components/GLOBAL.vue'
import RootPath from '@/components/RootPath.vue'
import MainView from '@/components/MainView.vue'
import PasswordResetView from '@/components/PasswordResetView.vue'
import SupervisionView from '@/components/SupervisionView.vue'
import SupervisionDetailsView from '@/components/SupervisionDetailsView.vue'
import UserView from '@/components/UserView.vue'
import AboutView from '@/components/AboutView.vue'
import Sidebar from '@/components/Sidebar.vue'
import LogoutView from '@/components/LogoutView.vue'
import store from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    meta: {
      title: '根目录',
    },
    component: RootPath
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
    },
    component: LoginView
  },
  {
    path: '/main',
    name: 'main',
    meta: {
      title: '首页',
    },
    component: MainView
  },
  {
    path: '/reset_password',
    name: 'reset_password',
    meta: {
      title: '重置密码'
    },
    component: PasswordResetView
  },
  {
    path: '/supervisions',
    name: 'supervisions',
    meta: {
      title: '监督列表',
      needLogin: true,
    },
    component: SupervisionView
  },
  {
    path: '/supervision',
    name: 'supervision',
    meta: {
      title: '监督详情',
      needLogin: true,
    },
    component: SupervisionDetailsView
  },
  {
    path: '/users',
    name: 'users',
    meta: {
      title: '用户管理',
      needLogin: true,
    },
    component: UserView
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于',
    },
    component: AboutView
  },
  {
    path: '/logout',
    name: 'logout',
    meta: {
      title: 'logout',
    },
    component: LogoutView
  },
  {
    path: '/dev_sidebar',
    name: 'dev_sidebar',
    meta: {
      title: 'sidebar',
    },
    component: Sidebar
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
//调整 sidebar 是否显示请去 src/App.vue
router.beforeEach(async (to, from, next) => {
  if (to.meta.needLogin) {
    var valid = await store.dispatch('isLogin')
    if (valid !== true) {
      console.log(valid);
      next("/login");
      return;
    }
  }
  to.meta.title && (document.title = (to.meta.title as string) + " - " + global_.TITLE);//设置页面标题
  next()
});

export default router
