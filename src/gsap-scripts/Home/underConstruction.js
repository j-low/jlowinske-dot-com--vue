export default {
  mouseenter: mouseenter,
  mouseleave: mouseleave
}

function mouseenter(e) {
  const letters = $('.us-letter');

  var parentLeftTl = new TimelineMax({ paused: true });
  var childLeftTls = [];

  var parentRightTl = new TimelineMax({ paused: true });
  var childRightTls = [];

  for(var l = 0, r = letters.length - 1; l > r; l++, r--) {
    let left = letters[l];
    let leftTl = new TimelineMax();

    let right = letters[r];
    let rightTl = new TimelineMax();

    leftTl.to(left, 0.3, { x: -15 });
    rightTl.to(left, 0.3, { x: 15 });

    childLeftTls.push(leftTl);
    childRightTls.push(rightTl);
  }

  parentLeftTl.add(childLeftTls);
  parentRightTl.add(childRightTls);

  parentLeftTl.play();
  parentRightTl.play();
}

function mouseleave(e) {
  const letters = $('.us-letter');

  var parentLeftTl = new TimelineMax({ paused: true });
  var childLeftTls = [];

  var parentRightTl = new TimelineMax({ paused: true });
  var childRightTls = [];

  for(var l = 0, r = letters.length - 1; l > r; l++, r--) {
    let left = letters[l];
    let leftTl = new TimelineMax();

    let right = letters[r];
    let rightTl = new TimelineMax();

    leftTl.to(left, 0.3, { x: 0 });
    rightTl.to(left, 0.3, { x: 0 });

    childLeftTls.push(leftTl);
    childRightTls.push(rightTl);
  }

  parentLeftTl.add(childLeftTls);
  parentRightTl.add(childRightTls);

  parentLeftTl.play();
  parentRightTl.play();
}
