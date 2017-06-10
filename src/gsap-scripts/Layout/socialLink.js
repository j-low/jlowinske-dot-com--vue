export default {
  mouseenter: mouseenter,
  mouseleave: mouseleave
}

const start = 0;
const end = start + 0.2;
const ease = Power2.easeInOut;

function mouseenter(ev) {
  const link = $(ev.target);
  const container = link[0].children[0];
  const icon = link[0].children[0].children[0].children[0];

  var tl = new TimelineLite();
  tl
    .from(container, 0.5, {
      height: 33,
      width: 33,
      marginTop: 1,
      marginLeft: 1,
      ease: ease
    })
    .to(container, 0.5, {
      height: 48,
      width: 48,
      marginTop: -5.5,
      marginLeft: -5.5,
      ease: ease
    }, start)
    .to(container, 0.5, {
      backgroundColor: '#ffadad',
      borderColor: '#ffffff',
      ease: ease
    }, start)
    .to(icon, 0.5, {
      color: '#ffffff',
      ease: ease
    }, start)
    .to(container, 0.5, {
      height: 33,
      width: 33,
      marginTop: 1,
      marginLeft: 1,
      ease: ease
    }, end);
}

function mouseleave(ev) {
  const link = $(ev.target);
  const container = link[0].children[0];
  const icon = link[0].children[0].children[0].children[0];

  var tl = new TimelineLite();
  tl.to(container, 0.5, {
    rotation: -360,
    ease: ease
  }, start)
  .to(container, 0.5, {
    backgroundColor: '#ffffff',
    borderColor: '#ffadad',
    ease: ease
  }, start)
  .to(icon, 0.5, {
    color: '#777777',
    ease: ease
  }, start);
}
