<template>
  <section id="j-header">
    <logo></logo>
    <social-link
      v-for="link in socialLinks"
      :key="link.id"
      :link-label="link.label"
      :link-class="link.linkClass"
      :linkUrl="link.url"
      :open-new-window="link.openNewWindow">
    </social-link>
  </section>
</template>

<script>
import socialLink from 'components/layout/socialLink';
import logo from 'components/layout/logo';

var methods = {};

const socialLinks = [
  {
    id: 0,
    linkClass: 'linkedin',
    url: 'https://www.linkedin.com/in/jlowinske/',
    openNewWindow: true
  },
  {
    id: 1,
    linkClass: 'github',
    url: 'https://github.com/j-low',
    openNewWindow: true
  },
  {
    id: 2,
    linkClass: 'instagram',
    url: 'https://instagram.com/the.real.jlow/',
    openNewWindow: true
  },
  {
    id: 3,
    linkClass: 'twitter',
    url: 'https://twitter.com/j_lowinske',
    openNewWindow: true
  },
  {
    id: 4,
    linkClass: 'envelope-o',
    url: 'mailto:joe.lowinske@gmail.com',
    openNewWindow: false
  }
];

export default {
  methods: methods,
  components: {
    logo: logo,
    socialLink: socialLink
  },
  data: function() {
    return {
      logo: logo,
      socialLinks: socialLinks
    };
  }
}
</script>


<style lang="scss">
@import '~scss/classes';

#j-header {}

.social-link-anchor {
  position: fixed;
  top: 20px;

  &.linkedin {
    right: 445px;
  }

  &.github {
    right: 350px;
  }

  &.instagram {
    right: 255px;
  }

  &.twitter {
    right: 160px;
  }

  &.envelope-o {
    right: 65px;
  }
}
</style>
