export default {
  enterTimeline: enterTimeline,
  leaveTimeline: leaveTimeline
}

function enterTimeline() {
  const title = $('#about-title .letter');

  var tl = new TimelineLite();
  var titleFade = TweenLite.fromTo(title, 0.5, { opacity: 0 }, { opacity: 1 });
  var titleKerningTweensUp = [];
  var titleKerningTweensDown = [];
  var titleKerningShift = 20;
  var upIndex = 1;
  var downIndex = 3;

  for(var l = upIndex, r = downIndex; l >= -1, r < title.length; l--, r++) {
    let upLetter = title[l];
    let upTween = TweenLite.fromTo(upLetter, 0.5, { y: -(titleKerningShift) }, { y: 0, ease: Power2.easeInOut  });

    let downLetter = title[r];
    let downTween = TweenLite.fromTo(downLetter, 0.5, { y: titleKerningShift }, { y: 0, ease: Power2.easeInOut });

    titleKerningTweensUp.push(upTween);
    titleKerningTweensDown.push(downTween);

    titleKerningShift += 20;
  }

  tl.add([titleFade, titleKerningTweensUp, titleKerningTweensDown]);

  return tl;
}

function leaveTimeline() {
  const title = $('#about-title .letter');

  var tl = new TimelineLite();
  var titleFade = TweenLite.fromTo(title, 0.2, { opacity: 1 }, { opacity: 0 });
  var titleKerningTweensUp = [];
  var titleKerningTweensDown = [];
  var titleKerningShift = 20;
  var upIndex = 1;
  var downIndex = 3;

  for(var l = upIndex, r = downIndex; l >= -1, r < title.length; l--, r++) {
    let upLetter = title[l];
    let upTween = TweenLite.fromTo(upLetter, 0.2, { y: 0 }, { y: -(titleKerningShift), ease: Power2.easeInOut  });

    let downLetter = title[r];
    let downTween = TweenLite.fromTo(downLetter, 0.2, { y: 0 }, { y: titleKerningShift, ease: Power2.easeInOut });

    titleKerningTweensUp.push(upTween);
    titleKerningTweensDown.push(downTween);

    titleKerningShift += 20;
  }

  tl.add([titleFade, titleKerningTweensUp, titleKerningTweensDown]);

  return tl;
}
