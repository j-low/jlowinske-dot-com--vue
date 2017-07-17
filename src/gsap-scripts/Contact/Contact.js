import title from 'anim/Contact/contactTitle';
import bg from 'anim/Contact/contactBackground';
import slinks from 'anim/layout/socialLink';

export default {
  beforeRouteEnter: beforeRouteEnter,
  beforeRouteLeave: beforeRouteLeave
}

function beforeRouteEnter(t, f) {
  var mainTl = new TimelineLite({ paused: true });
  var titleTl = title.enterTimeline();
  var bgTl = bg.enterTimeline();
  var socialLinkTl = slinks.getSocialLinkTimeline(t, f);

  mainTl
    .add([bgTl, socialLinkTl])
    .add(titleTl);

  mainTl.play();
}

function beforeRouteLeave() {
  return new Promise(function(resolve, reject) {
    var mainTl = new TimelineLite({ paused: true, onComplete: function() { resolve(true); } });
    var titleTl = title.leaveTimeline();
    var bgTl = bg.leaveTimeline();

    mainTl
      .add([titleTl, bgTl]);

    mainTl.play();
  });
}
