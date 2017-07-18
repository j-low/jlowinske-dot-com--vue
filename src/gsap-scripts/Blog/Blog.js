import title from 'anim/Blog/blogTitle';
import bg from 'anim/layout/bgOverUnder';
import links from 'anim/layout/socialLink';

export default {
  beforeRouteEnter: beforeRouteEnter,
  beforeRouteLeave: beforeRouteLeave
}

function beforeRouteEnter(t, f) {
  console.log('TO: ', t);
  var mainTl = new TimelineLite({ paused: true });
  var titleTl = title.enterTimeline();
  var bgTl = bg.enterTimeline(t);
  var linksTl = links.getSocialLinkTimeline(t, f);

  mainTl
    .add([titleTl, bgTl, linksTl]);

  mainTl.play();
}

function beforeRouteLeave(f) {
  return new Promise(function(resolve, reject) {
    var mainTl = new TimelineLite({ paused: true, onComplete: function() { resolve(true); } });
    var titleTl = title.leaveTimeline();
    var bgTl = bg.leaveTimeline(f);

    mainTl
      .add([titleTl, bgTl]);

    mainTl.play();
  });
}
