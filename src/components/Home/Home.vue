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
    <blog-nav-label></blog-nav-label>
    <d3-nav-label></d3-nav-label>
    <about-nav-label></about-nav-label>
    <contact-nav-label></contact-nav-label>
  </section>
</template>

<script>
import navBox from 'components/layout/navBox';
import blogNavLabel from 'components/Home/blogNavLabel';
import d3NavLabel from 'components/Home/d3NavLabel';
import aboutNavLabel from 'components/Home/aboutNavLabel';
import contactNavLabel from 'components/Home/contactNavLabel';

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
    navBox: navBox,
    blogNavLabel: blogNavLabel,
    d3NavLabel: d3NavLabel,
    aboutNavLabel: aboutNavLabel,
    contactNavLabel: contactNavLabel

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

  #blog-nav-label {
    top: calc(40% + 15px);
    left: calc(35% + 100px);
  }

  #d3-nav-label {
    top: calc(40% + 115px);
    left: calc(35% + 100px);
  }

  #about-nav-label {
    top: calc(40% + 215px);
    left: calc(35% + 100px);
  }

  #contact-nav-label {
    top: calc(40% + 315px);
    left: calc(35% + 100px);
  }
</style>
