<template>
  <section id="j-header">
    <router-link to="/" class="home-link">
      <img src="../../assets/jpl_logo.svg" class="jlowinske-logo"></img>
    </router-link>
    <social-link
      v-for="link in socialLinks"
      :key="link.id"
      :link-label="link.label"
      :icon-class="link.iconClass"
      :linkUrl="link.url"
      :open-new-window="link.openNewWindow">
    </social-link>
  </section>
</template>

<script>
import animSocLink from 'anim/Layout/socialLink';
import socialLink from 'components/layout/socialLink';

var methods = {};
_.assign(methods, animSocLink);

const socialLinks = [
  {
    id: 0,
    label: 'linkedin',
    iconClass: 'fa fa-linkedin',
    url: 'https://www.linkedin.com/in/jlowinske/',
    openNewWindow: true
  },
  {
    id: 1,
    label: 'github',
    iconClass: 'fa fa-github',
    url: 'https://github.com/j-low',
    openNewWindow: true
  },
  {
    id: 2,
    label: 'instagram',
    iconClass: 'fa fa-instagram',
    url: 'https://instagram.com/the.real.jlow/',
    openNewWindow: true
  },
  {
    id: 3,
    label: 'twitter',
    iconClass: 'fa fa-twitter',
    url: 'https://twitter.com/j_lowinske',
    openNewWindow: true
  },
  {
    id: 4,
    label: 'email',
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

.home-link {
  margin-right: auto;
}

.jlowinske-logo {
  height: 75px;
}
</style>
