import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import Blog from '@/components/Blog/Blog';
import D3 from '@/components/D3/D3';
import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';

Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/d3',
    name: 'd3',
    component: D3
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
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
