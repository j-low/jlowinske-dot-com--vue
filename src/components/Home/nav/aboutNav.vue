<template>
  <div id="about-nav" class="nav-container">
    <nav-box
      box-class="nav-about"
      box-title="about"
      box-route="/about">
    </nav-box>
    <about-nav-label></about-nav-label>
  </div>
</template>

<script>
import navBox from 'components/layout/navBox';
import aboutNavLabel from 'components/Home/nav/aboutNavLabel';

export default {
  name: 'aboutNav',
  components: {
    navBox: navBox,
    aboutNavLabel: aboutNavLabel
  }
}
</script>

<style lang="scss">
.nav-about {

  rect {
    fill: #ffff15;
  }
}
</style>
