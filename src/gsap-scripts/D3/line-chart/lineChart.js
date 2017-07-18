import pTitle from 'anim/D3/line-chart/lineChartPrimaryTitle';
import sTitle from 'anim/D3/line-chart/lineChartSecondaryTitle';
import bg from 'anim/D3/line-chart/lineChartBackground';
import links from 'anim/layout/socialLink';

export default {
  beforeRouteEnter: beforeRouteEnter,
  beforeRouteLeave: beforeRouteLeave
}

function beforeRouteEnter(t, f) {
  var mainTl = new TimelineLite({ paused: true });
  var ptTl = pTitle.enterTimeline();
  var stTl = sTitle.enterTimeline();
  var bgTl = bg.enterTimeline();
  var linksTl = links.getSocialLinkTimeline(t, f);

  mainTl
    .add([ptTl, stTl, bgTl, linksTl]);

  mainTl.play();
}

function beforeRouteLeave() {
  return new Promise(function(resolve, reject) {
    var mainTl = new TimelineLite({ paused: true, onComplete: function() { resolve(true); } });
    var ptTl = pTitle.leaveTimeline();
    var stTl = sTitle.leaveTimeline();
    var bgTl = bg.leaveTimeline();

    mainTl
      .add([ptTl, stTl, bgTl]);

    mainTl.play();
  });
}
