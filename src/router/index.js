/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-08-29 15:21:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-05 15:01:22
 */
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/listview',
    name: 'listview',
    component: () => import('../views/ListView.vue'),
  },
  {
    path: '/searchview',
    name: 'searchview',
    component: () => import('../views/Search.vue'),
  },
  {
    path: '/me',
    name: 'meview',
    beforeEnter: (to, from, next) => {
      console.log(store.state.user);
      if (store.state.user.isLogin) {
        next();
      } else {
        next('/login');
      }
    },
    component: () => import('../views/Me.vue'),
  },
  {
    path: '/login',
    name: 'loginview',
    component: () => import('../views/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
