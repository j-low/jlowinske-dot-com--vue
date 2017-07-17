export default {
  enterTimeline: enterTimeline,
  leaveTimeline: leaveTimeline
}

const durationEnter = 0.5;
const durationLeave = 0.3;

function enterTimeline() {
  const title = $('#contact-title .letter');
  var tl = new TimelineLite();
  var kerningTweens = [];
  var kerningShift = 0;

  var fadeIn = TweenLite.fromTo(title, durationEnter, { opacity: 0 }, { opacity: 1 });

  _.each(title, function(letter) {
    let tween = TweenLite.to(letter, durationEnter, { x: kerningShift });
    kerningTweens.push(tween);
    kerningShift += 10;
  });

  tl
    .add([fadeIn, kerningTweens]);

  return tl;
}

function leaveTimeline() {
  const title = $('#contact-title .letter');
  var tl = new TimelineLite();
  var kerning = TweenLite.to(title, durationLeave, { x: 0 });
  var fadeOut = TweenLite.to(title, durationLeave, { opacity: 0 });

  tl
    .add([fadeOut, kerning]);

  return tl;
}
