<template>
  <div id="blog-nav" class="nav-container">
    <nav-box
      box-class="nav-blog"
      box-title="blog"
      box-route="/blog">
    </nav-box>
    <blog-nav-label></blog-nav-label>
  </div>
</template>

<script>
import navBox from 'components/layout/navBox';
import blogNavLabel from 'components/Home/nav/blogNavLabel';

export default {
  name: 'blogNav',
  components: {
    navBox: navBox,
    blogNavLabel: blogNavLabel
  }
}
</script>

<style lang="scss">
.nav-blog {
  left: 0;

  rect {
    fill: #f145ff;
  }
}
</style>
