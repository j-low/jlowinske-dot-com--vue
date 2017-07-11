import socialLinkAnim from 'anim/layout/socialLink';

export default {
  beforeRouteEnter: beforeRouteEnter,
  beforeRouteLeave: beforeRouteLeave
}

function beforeRouteEnter(t, f) {
  var mainTl = new TimelineLite({ paused: true });
  var socialLinkTl = socialLinkAnim.getSocialLinkTimeline(t, f);

  mainTl.add(socialLinkTl);

  mainTl.play();
}

function beforeRouteLeave() {
  return new Promise(function(resolve, reject) {
    resolve(true);
  });
}
