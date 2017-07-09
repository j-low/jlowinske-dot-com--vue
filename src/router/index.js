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
    name: 'Home',
    component: Home,
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
    path: '/contact',
    name: 'Contact',
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
