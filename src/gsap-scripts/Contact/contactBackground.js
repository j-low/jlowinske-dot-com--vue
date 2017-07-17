export default {
  enterTimeline: enterTimeline,
  leaveTimeline: leaveTimeline
}

const durationEnter = 0.4;
const durationLeave = 0.3;

function enterTimeline() {
  const over = $('#contact .over');
  const under = $('#contact .under');

  var tl = new TimelineLite();
  var overTween = TweenLite.to(over, durationEnter, { left: 30, ease: Power2.easeOut });
  var underTween = TweenLite.to(under, durationEnter, { right: 30, ease: Power2.easeOut });

  tl
    .add(overTween)
    .add(underTween);

  return tl;
}

function leaveTimeline() {
  const over = $('#contact .over');
  const under = $('#contact .under');

  var tl = new TimelineLite();
  var overTween = TweenLite.to(over, durationLeave, { left: '100%', ease: Power2.easeOut });
  var underTween = TweenLite.to(under, durationLeave, { right: '100%', ease: Power2.easeOut });

  tl
    .add(underTween)
    .add(overTween);

  return tl;
}
