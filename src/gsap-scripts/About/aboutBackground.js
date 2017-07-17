export default {
  enterTimeline: enterTimeline,
  leaveTimeline: leaveTimeline
}

const durationEnter = 0.4;
const durationLeave = 0.3;

function enterTimeline() {
  const over = $('#about .over');
  const under = $('#about .under');

  var tl = new TimelineLite();
  var overTween = TweenLite.to(over, durationEnter, { top: 30, ease: Power2.easeOut });
  var underTween = TweenLite.to(under, durationEnter, { bottom: 30, ease: Power2.easeOut });

  tl
    .add(overTween)
    .add(underTween);

  return tl;
}

function leaveTimeline() {
  const over = $('#about .over');
  const under = $('#about .under');

  var tl = new TimelineLite();
  var overTween = TweenLite.to(over, durationLeave, { top: '100%', ease: Power2.easeOut });
  var underTween = TweenLite.to(under, durationLeave, { bottom: '100%', ease: Power2.easeOut });

  tl
    .add(underTween)
    .add(overTween);

  return tl;
}
