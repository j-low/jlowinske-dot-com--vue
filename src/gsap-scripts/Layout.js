export default {
  flipHeading: flipHeading
}

function flipHeading(label, context) {
  const heading = $('.content-label');

  var tl = new TimelineLite();

  tl.to(heading, 0.1, { transform: 'rotateX(90deg)' }, 'flip')
    .call(function() {
      context.mutableHeading = label;
    }, [], context, 'flip+=0.1')
    .to(heading, 0.1, { transform: 'rotateX(0deg)' }, 'flip+=0.1');
}
