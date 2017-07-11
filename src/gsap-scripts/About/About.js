import aboutTitle from 'anim/About/aboutTitle';
import aboutBackground from 'anim/About/aboutBackground';
import socialLinkAnim from 'anim/layout/socialLink';

export default {
  beforeRouteEnter: beforeRouteEnter,
  beforeRouteLeave: beforeRouteLeave
}

function beforeRouteEnter(t, f) {
  var mainTl = new TimelineLite({ paused: true });
  var titleTl = aboutTitle.enterTimeline();
  var backgroundTl = aboutBackground.enterTimeline();
  var socialLinkTl = socialLinkAnim.getSocialLinkTimeline(t, f);

  mainTl.add([titleTl, backgroundTl, socialLinkTl]);

  mainTl.play();
}

function beforeRouteLeave() {
  return new Promise(function(resolve, reject) {
    var mainTl = new TimelineLite({ paused: true, onComplete: function() { resolve(true); } });
    var titleTl = aboutTitle.leaveTimeline();
    var backgroundTl = aboutBackground.leaveTimeline();

    mainTl.add([titleTl, backgroundTl]);

    mainTl.play();
  });
}
