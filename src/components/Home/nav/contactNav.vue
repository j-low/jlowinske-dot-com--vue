<template>
  <div id="contact-nav" class="nav-container">
    <nav-box
      box-class="nav-contact"
      box-title="contact"
      box-route="/">
    </nav-box>
    <contact-nav-label></contact-nav-label>
  </div>
</template>

<script>
import navBox from 'components/layout/navBox';
import contactNavLabel from 'components/Home/nav/contactNavLabel';

export default {
  name: 'contactNav',
  components: {
    navBox: navBox,
    contactNavLabel: contactNavLabel
  }
}
</script>

<style lang="scss">
.nav-contact {

  rect {
    fill: #87ff6e;
  }
}
</style>
