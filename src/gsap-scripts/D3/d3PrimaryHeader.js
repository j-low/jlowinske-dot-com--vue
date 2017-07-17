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
  var phKerningLeft = TweenLite.fromTo(ph[0], durationEnter, { x: -15 }, { x: 0 });
  var phKerningRight = TweenLite.fromTo(ph[1], durationEnter, { x: 15 }, { x: 0 });

  tl
    .add([phFade, phKerningLeft, phKerningRight]);

  return tl;
}

function leaveTimeline() {
  const ph = $('.letter-primary');
  var tl = new TimelineLite();

  var phFade = TweenLite.fromTo(ph, durationLeave, { opacity: 1 }, { opacity: 0 });
  var phKerningLeft = TweenLite.fromTo(ph[0], durationLeave, { x: 0 }, { x: -15 });
  var phKerningRight = TweenLite.fromTo(ph[1], durationLeave, { x: 0 }, { x: 15 });

  tl
    .add([phFade, phKerningLeft, phKerningRight]);

  return tl;
}
