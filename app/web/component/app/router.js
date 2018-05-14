import Vue from 'vue';

import VueRouter from 'vue-router';

import ListView from './list';
import Home from './home';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/list',
      component: ListView
    },
    {
      path: '/detail/:id',
      component: () => import('./detail')
    }
  ]
});

export default router;
