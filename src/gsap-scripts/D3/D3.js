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
  var phTl = pHeader.enterTimeline();
  var shTl = sHeader.enterTimeline();
  var navsTl = navs.enterTimeline();
  var socialLinkTl = sLinks.getSocialLinkTimeline(t, f);

  mainTl
    .add([phTl, shTl, navsTl, socialLinkTl]);

  mainTl.play();
}

function beforeRouteLeave(to) {
  return new Promise(function(resolve, reject) {
    var mainTl = new TimelineLite({ paused: true, onComplete: function() { resolve(true); } });
    var phTl = pHeader.leaveTimeline();
    var shTl = sHeader.leaveTimeline();
    var navsTl = navs.leaveTimeline(to);

    mainTl
      .add(navsTl)
      .add([phTl, shTl]);

    mainTl.play();
  });
}
