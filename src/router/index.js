import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: /* Home */ () => import('../views/Home.vue'),
  },
  {
    path: '/:slug',
    name: 'Book',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: /* Book */ () => import('../views/Book.vue'),
  },
  {
    path: '*',
    name: 'Not Found',
    component: /* Not found */ () => import('../views/404.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/books',
  routes,
});

export default router;
