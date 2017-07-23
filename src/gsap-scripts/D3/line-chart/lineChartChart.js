import text from 'anim/D3/line-chart/lineChartText';

export default {
  enterTimeline: enterTimeline,
  leaveTimeline: leaveTimeline
}

const durationEnter = 0.5;
const durationLeave = 0.3;

function enterTimeline() {
  const content = $('.content');
  const container = $('.line-chart-container');
  const chart = $('.line-chart-container svg');
  const line = $('.line');
  var mainTl = new TimelineLite();
  var textTl = text.enterTimeline();

  var contentPadding = TweenLite.fromTo(content, 0.3, { paddingBottom: 10 }, { paddingBottom: 0 });
  var containerFade = TweenLite.fromTo(container, 0.3, { opacity: 0 }, { opacity: 1 });
  var chartFade = TweenLite.fromTo(chart, durationEnter, { opacity: 0 }, { opacity: 1 });
  var drawLine = TweenLite.fromTo(line, 1.25, { drawSVG: '0%' }, { drawSVG: '100%' });

  mainTl
    .add([contentPadding, containerFade, textTl])
    .add([chartFade])
    .add(drawLine);

  return mainTl;
}

function leaveTimeline() {
  const content = $('.content');
  const container = $('.line-chart-container');
  const chart = $('.line-chart-container svg');
  var mainTl = new TimelineLite();
  var textTl = text.leaveTimeline();

  var contentPadding = TweenLite.fromTo(content, durationLeave, { paddingBottom: 0 }, { paddingBottom: 10 });
  var containerFade = TweenLite.fromTo(container, durationLeave, { opacity: 1 }, { opacity: 0 });
  var chartFade = TweenLite.fromTo(chart, durationLeave, { opacity: 1 }, { opacity: 0 });

  mainTl
    .add([contentPadding, containerFade, chartFade, textTl]);

  return mainTl;
}
