import getLayoutOrientation from 'util/getLayoutOrientation';

export default {
  mouseenter: mouseenter,
  mouseleave: mouseleave,
  getSocialLinkTimeline: getSocialLinkTimeline
}

const start = 0;
const end = start + 0.2;
const ease = Power2.easeInOut;

function mouseenter(e) {
  const link = $(e.target);
  const parent = link[0].parentNode;

  $('<div class="pulse-anchor"></div>').appendTo(link);

  const pulse = $('.pulse-anchor')[0];

  TweenMax.to(link, 0.3, {
      backgroundColor: '#06c5ff',
      ease: ease
    }, start);

    TweenMax.fromTo(pulse, 0.5, {
      height: 35,
      width: 35,
      top: -2,
      left: -2,
      opacity: 1
    }, {
      height: 60,
      width: 60,
      top: -14.5,
      left: -14.5,
      opacity: 0,
      ease: ease,
      repeat: -1,
      repeatDelay: 0.75
    });
}

function mouseleave(e) {
  const link = $(e.target);
  const pulse = $('.pulse-anchor');

  pulse.remove();

  var tl = new TimelineMax();

  tl.to(link, 0.3, {
      backgroundColor: '#ffffff',
      borderColor: '#333333',
      ease: ease
    }, start);
}

function getSocialLinkTimeline(to, from) {
  const oTo = getLayoutOrientation.getLayoutOrientation(to);
  const oFrom = getLayoutOrientation.getLayoutOrientation(from);
  var tl;

  if (oFrom === 'v' && oTo === 'h') {
    tl = verticalToHorizontalTimeline();
  } else if (oFrom === 'h' && oTo === 'v') {
    tl = horizontalToVerticalTimeline();
  } else {
    tl = emptyTimeline();
  }

  return tl;
}

function horizontalToVerticalTimeline() {
  const links = $('.social-link-anchor.linkedin, .social-link-anchor.github, .social-link-anchor.instagram, .social-link-anchor.twitter, .social-link-anchor.envelope-o').toArray();
  const linksCount = links.length;
  var tl = new TimelineLite();

  for (var i = 0; i < linksCount; i++) {
    let drop = links.pop();
    let dropTween = TweenLite.to(drop, 0.1, { top: 410 - (95 * i), right: 65 });
    let shiftTween = TweenLite.to(links, 0.1, { right: '-=95' });
    let tweens = [dropTween, shiftTween];
    tl.add(tweens);
  }

  return tl;
}

function verticalToHorizontalTimeline() {
  const links = $('.social-link-anchor.linkedin, .social-link-anchor.github, .social-link-anchor.instagram, .social-link-anchor.twitter, .social-link-anchor.envelope-o').toArray().reverse();
  const linksCount = links.length;
  var tl = new TimelineLite();

  for (var i = 0; i < linksCount; i++) {
    let up = links.pop();
    let upTween = TweenLite.to(up, 0.1, { top: 20, right: 445 - (95 * i) });
    let shiftTween = TweenLite.to(links, 0.1, { top: '-=95' });
    let tweens = [upTween, shiftTween];
    tl.add(tweens);
  }

  return tl;
}

function emptyTimeline() {
  return new TimelineLite();
}
