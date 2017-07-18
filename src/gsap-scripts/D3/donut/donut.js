import pTitle from 'anim/D3/donut/donutPrimaryTitle';
import sTitle from 'anim/D3/donut/donutSecondaryTitle';
import chart from 'anim/D3/donut/donutChart';
import bg from 'anim/layout/bgOverUnder';
import links from 'anim/layout/socialLink';

export default {
  beforeRouteEnter: beforeRouteEnter,
  beforeRouteLeave: beforeRouteLeave
}

function beforeRouteEnter(t, f) {
  var mainTl = new TimelineLite({ paused: true });
  var ptTl = pTitle.enterTimeline();
  var stTl = sTitle.enterTimeline();
  var chartTl = chart.enterTimeline();
  var bgTl = bg.enterTimeline(t);
  var linksTl = links.getSocialLinkTimeline(t, f);

  mainTl
    .add([bgTl, linksTl])
    .add([ptTl, stTl, chartTl]);

  mainTl.play();
}

function beforeRouteLeave(f) {
  return new Promise(function(resolve, reject) {
    var mainTl = new TimelineLite({ paused: true, onComplete: function() { resolve(true); } });
    var ptTl = pTitle.leaveTimeline();
    var stTl = sTitle.leaveTimeline();
    var chartTl = chart.leaveTimeline();
    var bgTl = bg.leaveTimeline(f);

    mainTl
      .add([ptTl, stTl, bgTl, chartTl]);

    mainTl.play();
  });
}
