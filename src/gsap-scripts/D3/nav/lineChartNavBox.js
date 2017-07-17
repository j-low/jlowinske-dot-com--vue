export default {
  mouseenter: mouseenter,
  mouseleave: mouseleave
}

const duration = 0.3;

function mouseenter(e) {
  const front = $('#line-chart-nav-box .nav-box-front');
  const line = $('.line-chart-symbol');

  var mainTl = new TimelineLite({ paused: true });

  var shiftFront = TweenLite.to([front, line], duration, { x: 4, y: 4 });
  var drawLine = TweenLite.fromTo(line, duration, { drawSVG: 0 }, { drawSVG: 100 });

  mainTl.add([shiftFront, drawLine]);

  mainTl.play();
}

function mouseleave(e) {
  const front = $('#line-chart-nav-box .nav-box-front');
  const line = $('.line-chart-symbol');

  var mainTl = new TimelineLite({ paused: true });

  var unshift = TweenLite.to([front, line], duration, { x: 0, y: 0 });
  var undrawLine = TweenLite.fromTo(line, duration, { drawSVG: 100 }, { drawSVG: 0 });

  mainTl.add([unshift, undrawLine]);

  mainTl.play();
}
