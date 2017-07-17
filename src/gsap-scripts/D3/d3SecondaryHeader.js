export default {
  enterTimeline: enterTimeline,
  leaveTimeline: leaveTimeline
}

const durationEnter = 0.5;
const durationLeave = 0.3;

function enterTimeline() {
  const sh = $('.letter-secondary');
  var tl = new TimelineLite();

  var shFadeAndShift = TweenLite.fromTo(sh, durationEnter, { opacity: 0, x: -10 }, { opacity: 1, x: 0 });
  var shKerningTweens = [];
  var shKerningShift = 0;

  _.each(sh, function(letter, i) {
    let tween = TweenLite.fromTo(letter, durationEnter, { x: 0}, { x: shKerningShift });
    shKerningTweens.push(tween);
    shKerningShift += 5;
  });

  tl
    .add([shFadeAndShift, shKerningTweens]);

  return tl;
}

function leaveTimeline() {
  const sh = $('.letter-secondary');
  var tl = new TimelineLite();

  var shFadeAndShift = TweenLite.fromTo(sh, durationLeave, { opacity: 1, x: 0 }, { opacity: 0, x: -10 });
  var shKerningTweens = [];
  var shKerningShift = 0;

  _.each(sh, function(letter, i) {
    let tween = TweenLite.fromTo(letter, durationLeave, { x: shKerningShift}, { x: 0 });
    shKerningTweens.push(tween);
    shKerningShift += 5;
  });

  tl
    .add([shFadeAndShift, shKerningTweens]);

  return tl;
}
