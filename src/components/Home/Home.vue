<template>
  <section id="home">
    <home-title></home-title>
    <div class="home-nav-container">
      <blog-nav></blog-nav>
      <d3-nav></d3-nav>
      <about-nav></about-nav>
      <contact-nav></contact-nav>
    </div>
  </section>
</template>

<script>
import homeTitle from 'components/Home/homeTitle';
import blogNav from 'components/Home/nav/blogNav';
import d3Nav from 'components/Home/nav/d3Nav';
import aboutNav from 'components/Home/nav/aboutNav';
import contactNav from 'components/Home/nav/contactNav';

import homeAnim from 'anim/Home/Home';
var methods = {};
_.assign(methods, homeAnim);

export default {
  name: 'home',
  components: {
    homeTitle: homeTitle,
    blogNav: blogNav,
    d3Nav: d3Nav,
    aboutNav: aboutNav,
    contactNav: contactNav
  },
  methods: methods,
  beforeRouteEnter: function(t, f, next) {
    next(function() {
      methods.beforeRouteEnter(t, f)
    });
  },
  beforeRouteLeave: function(t, f, next) {
    this.beforeRouteLeave(t)
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

  #home-title {
    position: absolute;
    top: 7%;
    width: 100%;
    height: 150px;

    .letter-name,
    .letter-job-title {
      opacity: 0;
    }
  }

  .home-nav-container {
    position: absolute;
    overflow: hidden;
    height: 65%;
    width: 100%;
    bottom: 0;
  }

  #blog-nav{
    position: absolute;
    top: 0;
    left: 40%;
  }

  #d3-nav {
    position: absolute;
    top: 100px;
    left: 40%;
  }

  #about-nav {
    position: absolute;
    top: 200px;
    left: 40%;
  }

  #contact-nav {
    position: absolute;
    top: 300px;
    left: 40%;
  }
</style>
