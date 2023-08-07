import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView";
import AdminView from "@/views/AdminView";
import store from "@/store";
import AdminChangePasswordView from "@/views/AdminChangePasswordView";

Vue.use(VueRouter)

store.dispatch('autologin');

const authGuard = (to, from, next) => {
  if (store.getters.isAuth) {
    console.log("authGuard " + store.getters.isAuth)
    next();
  }else {
    console.log("authGuard " + store.getters.isAuth)
    next({name: 'login-to-admin-panel'})
  }
}

const notAuthGuard = (to, from, next) => {
  if (!store.getters.isAuth) {
    console.log("notAuthGuard " + store.state.isAuth)
    next();
  }else {
    console.log("notAuthGuard " + store.state.isAuth)
    next({name: 'admin-panel'})
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login-to-admin-panel',
    component: LoginView,
    beforeEnter: notAuthGuard,
  },
  {
    path: '/admin',
    name: 'admin-panel',
    component: AdminView,
    beforeEnter: authGuard,
  },
  {
    path: '/admin-change-password',
    name: 'admin-change-password',
    component: AdminChangePasswordView,
    beforeEnter: authGuard,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
