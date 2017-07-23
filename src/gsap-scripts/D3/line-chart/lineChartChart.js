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
  const nodes = $('.data-node');
  const line = $('.line');
  var mainTl = new TimelineLite();
  var nodesTl = new TimelineLite();
  var nodeTweens = [];
  var textTl = text.enterTimeline();

  var contentPadding = TweenLite.fromTo(content, 0.3, { paddingBottom: 10 }, { paddingBottom: 0 });
  var containerFade = TweenLite.fromTo(container, 0.3, { opacity: 0 }, { opacity: 1 });
  var chartFade = TweenLite.fromTo(chart, durationEnter, { opacity: 0 }, { opacity: 1 });

  _.each(nodes, function(n) {
    let posNeg = Math.random() < 0.5 ? -1 : 1;
    let shift = posNeg * Math.floor(Math.random() * 10);
    let fadeAndShift = TweenLite.fromTo(n, 0.3, { opacity: 0, y: shift }, { opacity: 1, y: 0 });
    nodeTweens.push(fadeAndShift);
  });

  nodesTl.add(nodeTweens);

  var drawLine = TweenLite.fromTo(line, 1.25, { drawSVG: '0%' }, { drawSVG: '100%' });

  mainTl
    .add([contentPadding, containerFade, textTl])
    .add([chartFade])
    .add([nodesTl, drawLine]);

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
