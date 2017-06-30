import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';

Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new Router({
  routes: routes
});

export default router;
