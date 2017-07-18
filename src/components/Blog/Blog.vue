<template>
  <section id="blog">
    <bg></bg>
    <blog-title></blog-title>
  </section>
</template>

<script>
import bg from 'components/layout/bgOverUnder';
import blogTitle from 'components/Blog/blogTitle';

import blogAnim from 'anim/Blog/Blog';
var methods = {};
_.assign(methods, blogAnim);

export default {
  name: 'blog',
  methods: methods,
  components: {
    bg: bg,
    blogTitle: blogTitle
  },
  beforeRouteEnter: function(t, f, next) {
    next(function() {
      methods.beforeRouteEnter(t, f)
    });
  },
  beforeRouteLeave: function(t, f, next) {
    this.beforeRouteLeave(f)
      .then(function(then) {
        next();
      });
  }
}
</script>


<style lang="scss">
#blog {
  position: absolute;
  top: 120px;
  right: 0;
  bottom: 0;
  left: 0;
}

#blog-title {
  position: absolute;
  height: 500px;
  width: 31px;
  top: 7%;
  left: 53px;

  .letter {
    opacity: 0;
  }
}
</style>
