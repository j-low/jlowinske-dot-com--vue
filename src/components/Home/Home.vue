<template>
  <section id="home">
    <!-- <home-title></home-title> -->
    <nav-box
      v-for="box in navBoxes"
      :key="box.id"
      :box-class="box.class"
      :box-title="box.title"
      :box-route="box.route"
      >
    </nav-box>
  </section>
</template>

<script>
import navBox from 'components/layout/navBox';

import homeAnim from 'anim/Home/Home';
var methods = {};
_.assign(methods, homeAnim);

const navBoxes = [
  {
    id: 0,
    title: 'blog',
    class: 'nav-blog',
    route: '/blog'
  },
  {
    id: 1,
    title: 'd3',
    class: 'nav-d3',
    route: '/d3'
  },
  {
    id: 2,
    title: 'about',
    class: 'nav-about',
    route: '/about'
  },
  {
    id: 3,
    title: 'contact',
    class: 'nav-contact',
    route: '/contact'
  }
];

export default {
  name: 'home',
  components: {
    navBox: navBox
  },
  data: function() {
    return {
      navBoxes: navBoxes
    };
  },
  methods: methods,
  beforeRouteEnter: function(t, f, next) {
    next(function() {
      methods.beforeRouteEnter()
    });
  },
  beforeRouteLeave: function(t, f, next) {
    this.beforeRouteLeave()
      .then(function(then) {
        next();
      });
  }
};
</script>

<style lang="scss">
  #home {
    position: absolute;
    top: 120px;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
