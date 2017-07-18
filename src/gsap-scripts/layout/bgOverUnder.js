import layout from 'util/getLayoutOrientation';

export default {
  enterTimeline: enterTimeline,
  leaveTimeline: leaveTimeline
}

const durationEnter = 0.4;
const durationLeave = 0.3;

function enterTimeline(route) {
  const o = layout.getLayoutOrientation(route);
  const over = $('#' + route.name + ' .over');
  const under = $('#' + route.name + ' .under');
  var tl = new TimelineLite();
  var overTween;
  var underTween;

  if (o === 'h') {
    overTween = TweenLite.to(over, durationEnter, { left: 30, ease: Power2.easeOut });
    underTween = TweenLite.to(under, durationEnter, { right: 30, ease: Power2.easeOut });
  } else if (o === 'v') {
    overTween = TweenLite.to(over, durationEnter, { top: 30, ease: Power2.easeOut });
    underTween = TweenLite.to(under, durationEnter, { bottom: 30, ease: Power2.easeOut });
  }

  tl
    .add(overTween)
    .add(underTween);

  return tl;
}

function leaveTimeline(route) {
  const o = layout.getLayoutOrientation(route);
  const over = $('#' + route.name + ' .over');
  const under = $('#' + route.name + ' .under');
  var tl = new TimelineLite();
  var overTween;
  var underTween;

  if (o === 'h') {
    overTween = TweenLite.to(over, durationLeave, { left: '100%', ease: Power2.easeOut });
    underTween = TweenLite.to(under, durationLeave, { right: '100%', ease: Power2.easeOut });
  } else if (o === 'v') {
    overTween = TweenLite.to(over, durationLeave, { top: '100%', ease: Power2.easeOut });
    underTween = TweenLite.to(under, durationLeave, { bottom: '100%', ease: Power2.easeOut });
  }

  tl
    .add(underTween)
    .add(overTween);

  return tl;
}
