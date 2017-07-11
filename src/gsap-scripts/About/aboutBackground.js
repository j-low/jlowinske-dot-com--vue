export default {
  enterTimeline: enterTimeline,
  leaveTimeline: leaveTimeline
}

function enterTimeline() {
  const over = $('#about .over');
  const under = $('#about .under');

  var tl = new TimelineLite();
  var overTween = TweenLite.to(over, 0.4, { top: 30, ease: Power2.easeOut });
  var underTween = TweenLite.to(under, 0.4, { bottom: 30, ease: Power2.easeOut });

  tl
    .add(overTween)
    .add(underTween);

  return tl;
}

function leaveTimeline() {
  const over = $('#about .over');
  const under = $('#about .under');

  var tl = new TimelineLite();
  var overTween = TweenLite.to(over, 0.35, { top: '100%', ease: Power2.easeOut });
  var underTween = TweenLite.to(under, 0.35, { bottom: '100%', ease: Power2.easeOut });

  tl
    .add(underTween)
    .add(overTween);

  return tl;
}
