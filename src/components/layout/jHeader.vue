<template>
  <section id="j-header">
    <router-link to="/" class="home-link">
      <img src="../../assets/logo.svg" class="jlowinske-logo"></img>
    </router-link>
    <div class="social-links-container">
      <social-link
        v-for="link in socialLinks"
        :key="link.id"
        :link-label="link.label"
        :icon-class="link.iconClass"
        :linkUrl="link.url"
        :open-new-window="link.openNewWindow">
      </social-link>
    </div>
  </section>
</template>

<script>
import socialLink from 'components/layout/socialLink';

var methods = {};

const socialLinks = [
  {
    id: 0,
    iconClass: 'fa fa-linkedin',
    url: 'https://www.linkedin.com/in/jlowinske/',
    openNewWindow: true
  },
  {
    id: 1,
    iconClass: 'fa fa-github',
    url: 'https://github.com/j-low',
    openNewWindow: true
  },
  {
    id: 2,
    iconClass: 'fa fa-instagram',
    url: 'https://instagram.com/the.real.jlow/',
    openNewWindow: true
  },
  {
    id: 3,
    iconClass: 'fa fa-twitter',
    url: 'https://twitter.com/j_lowinske',
    openNewWindow: true
  },
  {
    id: 4,
    iconClass: 'fa fa-envelope-o',
    url: 'mailto:joe.lowinske@gmail.com',
    openNewWindow: false
  }
];

export default {
  methods: methods,
  components: {
    socialLink: socialLink
  },
  data: function() {
    return {
      socialLinks: socialLinks
    };
  }
}
</script>


<style lang="scss" scoped>
@import '~scss/classes';

#j-header {
  display: flex;
  flex-direction: row;
  width: calc(100% - 60px);
  justify-content: flex-end;
  position: relative;
  height: 75px;
  padding: 20px 30px;
  color: #ffffff;
}

.social-links-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  width: 100%;

  .social-link-anchor {
    margin: 0 30px;
  }
}

.home-link {
  margin-right: auto;
}

.jlowinske-logo {
  height: 75px;
}
</style>
