export default {
  mouseenter: mouseenter,
  mouseleave: mouseleave
}

const duration = 0.3;

function mouseenter(e) {
  const topBar = $('.logo-bar-top')[0];
  const bottomBar = $('.logo-bar-bottom')[0];
  const jpl = $('.logo-letter');

  var tl = new TimelineMax({ paused: true });
  var shiftTopBar = TweenLite.to(topBar, duration, { x: 20 });
  var shiftBottomBar = TweenLite.to(bottomBar, duration, { x: -15 });
  var shiftLetters = TweenLite.to(jpl, duration, { x: 15 });
  tl.add([shiftTopBar, shiftBottomBar, shiftLetters]);

  tl.play();
}

function mouseleave(e) {
  const topBar = $('.logo-bar-top')[0];
  const bottomBar = $('.logo-bar-bottom')[0];
  const jpl = $('.logo-letter');

  var tl = new TimelineMax({ paused: true });
  var unshiftTopBar = TweenLite.to(topBar, duration, { x: 0 });
  var unshiftBottomBar = TweenLite.to(bottomBar, duration, { x: 0 });
  var unshiftLetters = TweenLite.to(jpl, duration, { x: 0 });
  tl.add([unshiftTopBar, unshiftBottomBar, unshiftLetters]);

  tl.play();
}
