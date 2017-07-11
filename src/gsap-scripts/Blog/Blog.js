import blogTitle from 'anim/Blog/blogTitle';
import blogBackground from 'anim/Blog/blogBackground';
import socialLinkAnim from 'anim/layout/socialLink';

export default {
  beforeRouteEnter: beforeRouteEnter,
  beforeRouteLeave: beforeRouteLeave
}

function beforeRouteEnter(t, f) {
  var mainTl = new TimelineLite({ paused: true });
  var titleTl = blogTitle.enterTimeline();
  var backgroundTl = blogBackground.enterTimeline();
  var socialLinkTl = socialLinkAnim.getSocialLinkTimeline(t, f);

  mainTl.add([titleTl, backgroundTl, socialLinkTl]);

  mainTl.play();
}

function beforeRouteLeave() {
  return new Promise(function(resolve, reject) {
    var mainTl = new TimelineLite({ paused: true, onComplete: function() { resolve(true); } });
    var titleTl = blogTitle.leaveTimeline();
    var backgroundTl = blogBackground.leaveTimeline();

    mainTl.add([titleTl, backgroundTl]);

    mainTl.play();
  });
}
