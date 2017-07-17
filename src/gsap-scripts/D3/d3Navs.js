import sns from 'anim/D3/d3sns';

export default {
  enterTimeline: enterTimeline,
  leaveTimeline: leaveTimeline
}

function enterTimeline() {
  const navs = ['#donut-nav', '#line-chart-nav'];
  const symbols = $('.donut-symbol-main, .donut-symbol-slice, .line-chart-symbol');
  var tl = new TimelineLite();
  var navsTl = new TimelineLite();

  var undrawSymbols = TweenLite.to(symbols, 0, { drawSVG: 0 });
  _.each(navs, function(n) {
    let navBox = $(n + ' .nav-box');
    let navLabel = $(n + ' .nav-label');
    var boxTween = TweenLite.fromTo(navBox, 0.15, { left: -100, opacity: 0 }, { left: 0, opacity: 1, ease: Power1.easeIn });
    var labelTween = TweenLite.fromTo(navLabel, 0.15, { left: 200, opacity: 0 }, { left: 100, opacity: 1, ease: Power1.easeIn });
    navsTl.add([boxTween, labelTween]);
  });

  tl
    .add([undrawSymbols]);

  return tl;
}

function leaveTimeline(to) {
  const navs = ['#donut-nav', '#line-chart-nav'];
  const symbols = $('.donut-symbol-main, .donut-symbol-slice, .line-chart-symbol');
  var tl = new TimelineLite();
  var snsTl = sns.snsTimeline(to);

  tl
    .add(snsTl);

  return tl;
}
