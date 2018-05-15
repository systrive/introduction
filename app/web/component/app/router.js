import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: home */'./home')
    },
    {
      path: '/list',
      component: () => import('./list')
    },
    {
      path: '/detail',
      component: () => import('./detail')
    }
  ]
});

export default router;
