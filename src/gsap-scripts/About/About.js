import title from 'anim/About/aboutTitle';
import bg from 'anim/About/aboutBackground';
import sLinks from 'anim/layout/socialLink';

export default {
  beforeRouteEnter: beforeRouteEnter,
  beforeRouteLeave: beforeRouteLeave
}

function beforeRouteEnter(t, f) {
  var mainTl = new TimelineLite({ paused: true });
  var titleTl = title.enterTimeline();
  var backgroundTl = bg.enterTimeline();
  var socialLinkTl = sLinks.getSocialLinkTimeline(t, f);

  mainTl.add([titleTl, backgroundTl, socialLinkTl]);

  mainTl.play();
}

function beforeRouteLeave() {
  return new Promise(function(resolve, reject) {
    var mainTl = new TimelineLite({ paused: true, onComplete: function() { resolve(true); } });
    var titleTl = title.leaveTimeline();
    var backgroundTl = bg.leaveTimeline();

    mainTl.add([titleTl, backgroundTl]);

    mainTl.play();
  });
}
