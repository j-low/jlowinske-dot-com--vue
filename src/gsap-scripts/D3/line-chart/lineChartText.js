import winWidth from 'util/getWindowWidth';

export default {
  enterTimeline: enterTimeline,
  enterOnResize: enterOnResize,
  leaveTimeline: leaveTimeline,
  leaveOnResize: leaveOnResize
}

const durationEnter = 0.5;
const durationLeave = 0.3;

function enterTimeline() {
  const textContainer = $('.line-chart-text');
  const infoBlurbs = $('.line-chart-text li')
  const enterWidth = winWidth.getWindowWidth();
  var tl = new TimelineLite();


  if (enterWidth >= 1030) {
    let fadeInContainer = TweenLite.fromTo(textContainer, durationEnter, { opacity: 0 }, { opacity: 1 });
    let blurbsTl = new TimelineLite();

    _.forEach(infoBlurbs, function(blurb, i) {
      let bTween = TweenLite.fromTo(blurb, 0.1, { opacity: 0 }, { opacity: 1 });
      blurbsTl.add(bTween);
    });

    tl
      .add([fadeInContainer, blurbsTl])
  }

  return tl;
}

function enterOnResize() {
  const textContainer = $('.line-chart-text');
  const infoBlurbs = $('.line-chart-text li')
  const enterWidth = winWidth.getWindowWidth();
  var tl = new TimelineLite();


  if (enterWidth >= 1030) {
    let fadeInContainer = TweenLite.fromTo(textContainer, durationEnter, { opacity: 0 }, { opacity: 1 });
    let blurbs = [];

    _.forEach(infoBlurbs, function(blurb, i) {
      let bTween = TweenLite.fromTo(blurb, 0.1, { opacity: 0 }, { opacity: 1 });
      blurbs.push(bTween);
    });

    tl
      .add([fadeInContainer, blurbs])
  }

  return tl;
}

function leaveTimeline() {
  const leaveWidth = winWidth.getWindowWidth();
  var tl = new TimelineLite();

  if (leaveWidth > 1030) {
    var tweens = getLeaveTweens();
    tl.add([tweens.fadeOutContainer, tweens.blurbs]);
  }

  return tl;
}

function leaveOnResize() {
  const leaveWidth = winWidth.getWindowWidth();
  var tl = new TimelineLite();

  if (leaveWidth < 1030) {
    var tweens = getLeaveTweens();
    tl.add([tweens.fadeOutContainer, tweens.blurbs]);
  }

  return tl;
}

function getLeaveTweens() {
  var tweens = {};
  const textContainer = $('.line-chart-text');
  const infoBlurbs = $('.line-chart-text li');
  let fadeOutContainer = TweenLite.fromTo(textContainer, durationLeave, { opacity: 1 }, { opacity: 0 });
  let blurbs = [];

  _.forEach(infoBlurbs, function(blurb) {
    let bTween = TweenLite.fromTo(blurb, 0.1, { opacity: 1 }, { opacity: 0 });
    blurbs.push(bTween);
  });

  tweens.fadeOutContainer = fadeOutContainer;
  tweens.blurbs = blurbs;

  return tweens;
}
