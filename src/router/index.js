import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import Blog from '@/components/Blog';
import D3 from '@/components/D3/D3';
import About from '@/components/About';

Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/d3',
    name: 'D3.js',
    component: D3
  },
  {
    path: '/about',
    name: 'About',
    component: About
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
