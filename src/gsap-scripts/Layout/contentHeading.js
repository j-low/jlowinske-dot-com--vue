export default {
  flipHeading: flipHeading
}

function flipHeading(ctx, label) {
  const heading = $('.content-label');

  var tl = new TimelineMax();

  tl.to(heading, 0.1, { transform: 'rotateX(90deg)' }, 'flip')
    .call(function() {
      ctx.compHeading = label;
    }, [], null, 'flip+=0.1')
    .to(heading, 0.1, { transform: 'rotateX(0deg)' }, 'flip+=0.1');
}
