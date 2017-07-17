export default {
  mouseenter: mouseenter,
  mouseleave: mouseleave
}

const duration = 0.3;

function mouseenter(e) {
  const front = $('#donut-nav-box .nav-box-front');
  const circleMain = $('.donut-symbol-main');
  const circleSlice = $('.donut-symbol-slice');

  var mainTl = new TimelineLite({ paused: true });

  var drawCircle = new TimelineLite();
  var drawSlice = TweenLite.to(circleSlice, 0.02, { drawSVG: 100 });
  var drawMain = TweenLite.to(circleMain, 0.18, { drawSVG: 100 });
  var shiftSlice = TweenLite.to(circleSlice, 0.1, { x: 7, y: 1 });
  drawCircle
    .add(drawSlice)
    .add(drawMain)

  var shiftFront = TweenLite.to([front, circleMain, circleSlice], duration, { x: 4, y: 4 });

  mainTl
    .add([shiftFront, drawCircle])
    .add(shiftSlice);

  mainTl.play();
}

function mouseleave(e) {
  const front = $('#donut-nav-box .nav-box-front');
  const circleMain = $('.donut-symbol-main');
  const circleSlice = $('.donut-symbol-slice');

  var mainTl = new TimelineLite({ paused: true });

  var undrawCircle = new TimelineLite();
  var undrawSlice = TweenLite.to(circleSlice, 0.02, { drawSVG: 0 });
  var undrawMain = TweenLite.to(circleMain, 0.18, { drawSVG: 0 });
  var unshiftSlice = TweenLite.to(circleSlice, 0.1, { x: 4, y: 4 });
  undrawCircle
    .add([undrawMain, unshiftSlice])
    .add(undrawSlice);

  var unshift = TweenLite.to([front, circleMain, circleSlice], duration, { x: 0, y: 0 });

  mainTl
    .add(undrawCircle)
    .add(unshift);

  mainTl.play();
}
