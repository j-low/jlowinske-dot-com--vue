export default {
  mouseenter: mouseenter,
  mouseleave: mouseleave
}

const start = 0;
const end = start + 0.2;
const ease = Power2.easeInOut;

function mouseenter(ev) {
  const link = $(ev.target);
  const parent = link[0].parentNode;

  $('<div class="pulse-anchor"></div>').appendTo(link);

  const pulse = $('.pulse-anchor')[0];

  TweenMax.to(link, 0.3, {
      backgroundColor: '#06c5ff',
      ease: ease
    }, start);

    TweenMax.fromTo(pulse, 0.75, {
      height: 35,
      width: 35,
      opacity: 1
    }, {
      height: 60,
      width: 60,
      opacity: 0,
      ease: ease,
      repeat: -1,
      repeatDelay: 0.25
    });
}

function mouseleave(ev) {
  const link = $(ev.target);
  const pulse = $('.pulse-anchor');

  pulse.remove();

  var tl = new TimelineMax();

  tl.to(link, 0.3, {
      backgroundColor: '#ffffff',
      borderColor: '#333333',
      ease: ease
    }, start);
}
