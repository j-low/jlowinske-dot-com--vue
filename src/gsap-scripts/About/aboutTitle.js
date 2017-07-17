export default {
  enterTimeline: enterTimeline,
  leaveTimeline: leaveTimeline
}

const durationEnter = 0.5;
const durationLeave = 0.3;

function enterTimeline() {
  const title = $('#about-title .letter');

  var tl = new TimelineLite();
  var titleFade = TweenLite.fromTo(title, durationEnter, { opacity: 0 }, { opacity: 1 });
  var titleKerningTweensUp = [];
  var titleKerningTweensDown = [];
  var titleKerningShift = 20;
  var upIndex = 1;
  var downIndex = 3;

  for(var l = upIndex, r = downIndex; l >= -1, r < title.length; l--, r++) {
    let upLetter = title[l];
    let upTween = TweenLite.fromTo(upLetter, durationEnter, { y: -(titleKerningShift) }, { y: 0, ease: Power2.easeInOut  });

    let downLetter = title[r];
    let downTween = TweenLite.fromTo(downLetter, durationEnter, { y: titleKerningShift }, { y: 0, ease: Power2.easeInOut });

    titleKerningTweensUp.push(upTween);
    titleKerningTweensDown.push(downTween);

    titleKerningShift += 20;
  }

  tl
    .add([titleFade, titleKerningTweensUp, titleKerningTweensDown]);

  return tl;
}

function leaveTimeline() {
  const title = $('#about-title .letter');

  var tl = new TimelineLite();
  var titleFade = TweenLite.fromTo(title, durationLeave, { opacity: 1 }, { opacity: 0 });
  var titleKerningTweensUp = [];
  var titleKerningTweensDown = [];
  var titleKerningShift = 20;
  var upIndex = 1;
  var downIndex = 3;

  for(var l = upIndex, r = downIndex; l >= -1, r < title.length; l--, r++) {
    let upLetter = title[l];
    let upTween = TweenLite.fromTo(upLetter, durationLeave, { y: 0 }, { y: -(titleKerningShift), ease: Power2.easeInOut  });

    let downLetter = title[r];
    let downTween = TweenLite.fromTo(downLetter, durationLeave, { y: 0 }, { y: titleKerningShift, ease: Power2.easeInOut });

    titleKerningTweensUp.push(upTween);
    titleKerningTweensDown.push(downTween);

    titleKerningShift += 20;
  }

  tl
    .add([titleFade, titleKerningTweensUp, titleKerningTweensDown]);

  return tl;
}
