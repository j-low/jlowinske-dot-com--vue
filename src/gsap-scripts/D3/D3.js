import pHeader from 'anim/D3/d3primaryHeader';
import sHeader from 'anim/D3/d3SecondaryHeader';
import navs from 'anim/D3/d3Navs';
import sLinks from 'anim/layout/socialLink';

export default {
  beforeRouteEnter: beforeRouteEnter,
  beforeRouteLeave: beforeRouteLeave
}

function beforeRouteEnter(t, f) {
  var mainTl = new TimelineLite({ paused: true });
  var socialLinkTl = sLinks.getSocialLinkTimeline(t, f);

  mainTl.add(socialLinkTl);

  mainTl.play();
}

function beforeRouteLeave() {
  return new Promise(function(resolve, reject) {
    var mainTl = new TimelineLite({ paused: true, onComplete: function() { resolve(true); } });

    mainTl.play();
  });
}
