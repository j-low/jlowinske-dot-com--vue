export default {
  mouseenter: mouseenter,
  mouseleave: mouseleave
}

const duration = 0.3;

function mouseenter(e) {
  const navBox = $(e.target);
  const front = $('.' + e.target.classList[0] + ' .nav-box-front');
  const topBar = $('.' + e.target.classList[0] + ' .nav-box-bar-top');
  const bottomBar = $('.' + e.target.classList[0] + ' .nav-box-bar-bottom');

  var mainTl = new TimelineLite({ paused: true });

  var shiftFront = TweenLite.to(front, duration, { x: 4, y: 4 });

  var draw = new TimelineLite();
  var drawTopBar = TweenLite.to(topBar, duration, { attr: { x2: 50 } });
  var drawBottomBar = TweenLite.to(bottomBar, duration, { attr: { x1: 0 } });
  draw.add([drawTopBar, drawBottomBar]);

  var shiftBars = new TimelineLite();
  var shiftTopBar = TweenLite.to(topBar, duration, { x: 11, y: 4 });
  var shiftBottomBar = TweenLite.to(bottomBar, duration, { x: -1, y: 4 })
  shiftBars.add([shiftTopBar, shiftBottomBar]);


  mainTl.add([ shiftFront, shiftBars, draw ]);

  mainTl.play();
}

function mouseleave(e) {
  const navBox = $(e.target);
  const front = $('.' + e.target.classList[0] + ' .nav-box-front');
  const topBar = $('.' + e.target.classList[0] + ' .nav-box-bar-top');
  const bottomBar = $('.' + e.target.classList[0] + ' .nav-box-bar-bottom');

  var mainTl = new TimelineLite({ paused: true });

  var unshift = TweenLite.to([front, topBar, bottomBar], duration, { x: 0, y: 0 });

  var undraw = new TimelineLite();
  var undrawTopBar = TweenLite.to(topBar, duration, { attr: { x2: 0 } });
  var undrawBottomBar = TweenLite.to(bottomBar, duration, { attr: { x1: 50 } });
  undraw.add([undrawTopBar, undrawBottomBar]);

  mainTl.add([ unshift, undraw ]);

  mainTl.play();
}
