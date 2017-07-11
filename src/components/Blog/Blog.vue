<template>
  <section id="blog">
    <div class="under"></div>
    <div class="over"></div>
    <blog-title></blog-title>
  </section>
</template>

<script>
import blogTitle from 'components/Blog/blogTitle';

import blogAnim from 'anim/Blog/Blog';
var methods = {};
_.assign(methods, blogAnim);

export default {
  name: 'blog',
  components: {
    blogTitle: blogTitle
  },
  methods: methods,
  beforeRouteEnter: function(t, f, next) {
    next(function() {
      methods.beforeRouteEnter(t, f)
    });
  },
  beforeRouteLeave: function(t, f, next) {
    this.beforeRouteLeave()
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

  .under,
  .over {
    position: fixed;
    background: #06c5ff;
    opacity: 0.4;
  }

  .under {
    top: 0;
    right: 180px;
    bottom: 100%;
    left: 150px;
  }

  .over {
    top: 100%;
    right: 150px;
    bottom: 0;
    left: 180px;
    overflow-y: scroll;
  }
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
