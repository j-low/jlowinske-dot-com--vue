export default {
  enterTimeline: enterTimeline,
  leaveTimeline: leaveTimeline
}

const durationEnter = 0.5;
const durationLeave = 0.3;

function enterTimeline() {
  const ph = $('.letter-primary');
  var tl = new TimelineLite();

  var phFade = TweenLite.fromTo(ph, durationEnter, { opacity: 0 }, { opacity: 1 });
  var phKerning = TweenLite.fromTo(ph[1], durationEnter, { x: -2 }, { x: 2 });

  tl
    .add([phFade, phKerning]);

  return tl;
}

function leaveTimeline() {
  const ph = $('.letter-primary');
  var tl = new TimelineLite();

  var phFade = TweenLite.fromTo(ph, durationLeave, { opacity: 1 }, { opacity: 0 });
  var phKerning = TweenLite.fromTo(ph[1], durationEnter, { x: 2 }, { x: -2 });

  tl
    .add([phFade, phKerning]);

  return tl;
}
