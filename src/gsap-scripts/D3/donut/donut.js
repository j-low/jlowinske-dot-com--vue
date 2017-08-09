import pTitle from 'anim/D3/donut/donutPrimaryTitle';
import sTitle from 'anim/D3/donut/donutSecondaryTitle';
import chart from 'anim/D3/donut/donutChart';
import links from 'anim/layout/socialLink';

export default {
  beforeRouteEnter: beforeRouteEnter,
  beforeRouteLeave: beforeRouteLeave
}

function beforeRouteEnter(t, f) {
  var mainTl = new TimelineLite({ paused: true });
  var ptTl = pTitle.enterTimeline();
  var stTl = sTitle.enterTimeline();
  var linksTl = links.getSocialLinkTimeline(t, f);

  mainTl
    .add([linksTl])
    .add([ptTl, stTl]);

  mainTl.play();
}

function beforeRouteLeave(f) {
  return new Promise(function(resolve, reject) {
    var mainTl = new TimelineLite({ paused: true, onComplete: function() { resolve(true); } });
    var ptTl = pTitle.leaveTimeline();
    var stTl = sTitle.leaveTimeline();

    mainTl
      .add([ptTl, stTl]);

    mainTl.play();
  });
}
