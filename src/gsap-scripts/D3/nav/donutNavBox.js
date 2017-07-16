export default {
  mouseenter: mouseenter,
  mouseleave: mouseleave
}

const duration = 0.3;

function mouseenter(e) {
  const navBox = $(e.target);
  const front = $('.' + e.target.classList[0] + ' .nav-box-front');
  const circleMain = $('.donut-main');
  const circleSlice = $('.donut-slice');

  var mainTl = new TimelineLite({ paused: true });

  var shiftFront = TweenLite.to([front, circleMain, circleSlice], duration, { x: 4, y: 4 });

  mainTl.add(shiftFront);

  mainTl.play();
}

function mouseleave(e) {
  const navBox = $(e.target);
  const front = $('.' + e.target.classList[0] + ' .nav-box-front');
  const circleMain = $('.donut-main');
  const circleSlice = $('.donut-slice');


  var mainTl = new TimelineLite({ paused: true });

  var unshift = TweenLite.to([front, circleMain, circleSlice], duration, { x: 0, y: 0 });

  mainTl.add(unshift);

  mainTl.play();
}
