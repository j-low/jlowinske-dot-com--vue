export default {
  mouseenter: mouseenter,
  mouseleave: mouseleave
}

function mouseenter(e) {
  const navBox = $(e.target);
  const front = $('.' + e.target.classList[0] + ' .nav-box-front');
  const topBar = $('.' + e.target.classList[0] + ' .nav-box-bar-top');
  const bottomBar = $('.' + e.target.classList[0] + ' .nav-box-bar-bottom');

  var mainTl = new TimelineLite({ paused: true });

  var shift = TweenLite.to([front, topBar, bottomBar], 0.2, { x: 4, y: 4 });

  var draw = new TimelineLite();
  var drawTopBar = TweenLite.to(topBar, 0.2, { attr: { x2: 57 } });
  var drawBottomBar = TweenLite.to(bottomBar, 0.2, { attr: { x1: -5 } });
  draw.add([drawTopBar, drawBottomBar]);

  mainTl.add([ shift, draw ]);

  mainTl.play();
}

function mouseleave(e) {
  const navBox = $(e.target);
  const front = $('.' + e.target.classList[0] + ' .nav-box-front');
  const topBar = $('.' + e.target.classList[0] + ' .nav-box-bar-top');
  const bottomBar = $('.' + e.target.classList[0] + ' .nav-box-bar-bottom');

  var mainTl = new TimelineLite({ paused: true });

  var unshift = TweenLite.to([front, topBar, bottomBar], 0.2, { x: 0, y: 0 });

  var undraw = new TimelineLite();
  var undrawTopBar = TweenLite.to(topBar, 0.2, { attr: { x2: 7 } });
  var undrawBottomBar = TweenLite.to(bottomBar, 0.2, { attr: { x1: 45 } });
  undraw.add([undrawTopBar, undrawBottomBar]);

  mainTl.add([ unshift, undraw ]);

  mainTl.play();
}
