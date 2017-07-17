export default {
  enterTimeline: enterTimeline,
  leaveTimeline: leaveTimeline
}

function enterTimeline() {
  const over = $('#contact .over');
  const under = $('#contact .under');

  var tl = new TimelineLite();
  var overTween = TweenLite.to(over, 0.4, { left: 30, ease: Power2.easeOut });
  var underTween = TweenLite.to(under, 0.4, { right: 30, ease: Power2.easeOut });

  tl
    .add(overTween)
    .add(underTween);

  return tl;
}

function leaveTimeline() {
  const over = $('#contact .over');
  const under = $('#contact .under');

  var tl = new TimelineLite();
  var overTween = TweenLite.to(over, 0.35, { left: '100%', ease: Power2.easeOut });
  var underTween = TweenLite.to(under, 0.35, { right: '100%', ease: Power2.easeOut });

  tl
    .add(underTween)
    .add(overTween);

  return tl;
}
