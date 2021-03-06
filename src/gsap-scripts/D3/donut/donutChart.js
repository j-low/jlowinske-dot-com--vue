import text from 'anim/D3/donut/donutText';

export default {
  enterTimeline: enterTimeline,
  leaveTimeline: leaveTimeline
}

const durationEnter = 0.5;
const durationLeave = 0.3;

function enterTimeline() {
  const content = $('.content');
  const container = $('.donut-container');
  const chart = $('.donut-container svg');
  var mainTl = new TimelineLite();
  var textTl = text.enterTimeline();

  var contentPadding = TweenLite.fromTo(content, 0.3, { paddingBottom: 10 }, { paddingBottom: 0 });
  var containerFade = TweenLite.fromTo(container, 0.3, { opacity: 0 }, { opacity: 1 });
  var chartFade = TweenLite.fromTo(chart, durationEnter, { opacity: 0 }, { opacity: 1 });

  mainTl
    .add([contentPadding, containerFade, textTl])
    .add([chartFade]);

  return mainTl;
}

function leaveTimeline() {
  const content = $('.content');
  const container = $('.donut-container');
  const chart = $('.donut-container svg');
  var mainTl = new TimelineLite();
  var textTl = text.leaveTimeline();

  var contentPadding = TweenLite.fromTo(content, durationLeave, { paddingBottom: 0 }, { paddingBottom: 10 });
  var containerFade = TweenLite.fromTo(container, durationLeave, { opacity: 1 }, { opacity: 0 });
  var chartFade = TweenLite.fromTo(chart, durationLeave, { opacity: 1 }, { opacity: 0 });

  mainTl
    .add([contentPadding, containerFade, chartFade, textTl]);

  return mainTl;
}
