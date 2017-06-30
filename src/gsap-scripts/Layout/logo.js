export default {
  mouseenter: mouseenter,
  mouseleave: mouseleave
}


function mouseenter(e) {
  const topBar = $('.logo-bar-top')[0];
  const bottomBar = $('.logo-bar-bottom')[0];
  const jpl = $('.logo-letter');

  var tl = new TimelineMax({ paused: true });

  tl.add('shift_svg')
    .to(topBar, 0.3, {
      x: 20,
    }, 'shift_svg')
    .to(bottomBar, 0.3, {
      x: -15
    }, 'shift_svg')
    .to(jpl, 0.3, {
      x: 15
    }, 'shift_svg');

  tl.play();
}

function mouseleave(e) {
  const topBar = $('.logo-bar-top')[0];
  const bottomBar = $('.logo-bar-bottom')[0];
  const jpl = $('.logo-letter');

  var tl = new TimelineMax({ paused: true });

  tl.add('shift_svg')
    .to(topBar, 0.2, {
      x: 0
    }, 'shift_svg')
    .to(bottomBar, 0.3, {
      x: 0
    }, 'shift_svg')
    .to(jpl, 0.3, {
      x: 0
    }, 'shift_svg');

  tl.play();
}
