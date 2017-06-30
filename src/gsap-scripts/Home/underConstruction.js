export default {
  mouseenter: mouseenter,
  mouseleave: mouseleave
}

function mouseenter(e) {
  const letters = $('.uc-letter');
  const checkBack = $('.check-back')[0];

  var parentLeftTl = new TimelineMax({ paused: true });
  var parentRightTl = new TimelineMax({ paused: true });
  var checkBackTl = new TimelineMax({ paused: true });

  var childLeftTls = [];
  var childRightTls = [];

  var shiftInt = 20;
  var leftIndex;
  var rightIndex;

  if (letters.length % 2 === 0) {
    // even length
    leftIndex = (letters.length / 2) - 1;
    rightIndex = (letters.length / 2);
  } else {
    // odd length
    leftIndex = Math.floor(letters.length / 2) - 1;
    rightIndex = Math.floor(letters.length / 2) + 1;
  }

  for(var l = leftIndex, r = rightIndex; l >= -1, r < letters.length; l--, r++) {
    let leftLetter = letters[l];
    let leftTl = new TimelineMax();

    let rightLetter = letters[r];
    let rightTl = new TimelineMax();

    leftTl.to(leftLetter, 0.5, { x: -(shiftInt), ease: Power2.easeInOut });
    rightTl.to(rightLetter, 0.5, { x: shiftInt, ease: Power2.easeInOut });

    childLeftTls.push(leftTl);
    childRightTls.push(rightTl);

    shiftInt = shiftInt + 25;
  }

  checkBackTl.to(checkBack, 0.3, {
    width: 300,
    ease: Power2.easeInOut
  })

  parentLeftTl.add(childLeftTls);
  parentRightTl.add(childRightTls);

  parentLeftTl.play();
  parentRightTl.play();
  checkBackTl.play();
}

function mouseleave(e) {
  const letters = $('.uc-letter');
  const checkBack = $('.check-back')[0];

  var lettersTl = new TimelineMax({ paused: true });
  var checkBackTl = new TimelineMax({ paused: true });

  lettersTl.to(letters, 0.5, { x: 0, y: 0, ease: Power2.easeInOut });
  checkBackTl.to(checkBack, 0.3, {
    width: 0,
    ease: Power2.easeInOut
  })

  lettersTl.play();
  checkBackTl.play();
}
