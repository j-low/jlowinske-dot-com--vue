<template>
  <section id="home" class="j-primary-view">
    <con-head-top v-bind:heading="heading"></con-head-top>
    <con-head-bottom></con-head-bottom>
    <div id="main-content" class="home">
      <div class="nav-container">
        <nav-box label="blog"></nav-box>
        <nav-box label="d3"></nav-box>
        <nav-box label="about"></nav-box>
      </div>
    </div>
  </section>
</template>

<script>
import conHeadTop from 'components/layout/contentHeadingTop';
import conHeadBottom from 'components/layout/contentHeadingBottom';
import navBox from 'components/Home/navBox';
var methods = {};

export default {
  name: 'home',
  components: {
    conHeadTop: conHeadTop,
    conHeadBottom: conHeadBottom,
    navBox: navBox
  },
  data: function() {
    return {
      heading: 'grüss dich'
    }
  },
  methods: methods,
  mounted: mounted
};

function mounted() {}
</script>


<style lang="scss">
@import "~scss/classes";
@import "~scss/colors";
@import "~scss/mixins";

#home {
  height: calc(100% - 130px);
  color: $white;
}

.home {
  @extend .flex-center-hv;
}
</style>
