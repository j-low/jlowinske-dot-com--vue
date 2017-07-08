export default {
  beforeRouteEnter: beforeRouteEnter,
  beforeRouteLeave: beforeRouteLeave
};

function beforeRouteEnter() {
  const over = $('.home-bg-over')[0];
  const under = $('.home-bg-under')[0];
  const canvas = $('.home-canvas')[0];
  const checkBack = $('.check-back')[0];
  const logo = $('.logo')[0];
  const socialLinks = $('.social-link-anchor');
  const letters = $('.uc-letter');

  var mainTl = new TimelineMax({ paused: true });
  var headerTl = new TimelineMax();
  var mainContentTl = new TimelineMax();
  var parentLeftTl = new TimelineMax();
  var parentRightTl = new TimelineMax();
  var checkBackTl = new TimelineMax();

  headerTl.staggerTo([logo, socialLinks], 0.4, {
    top: 20
  }, 0.2);

  mainContentTl.add('fly_in')
    .to(over, 0.4, {
      left: 30,
      ease: Power2.easeInOut
    }, 'fly_in')
    .to(under, 0.4, {
      right: 30,
      ease: Power2.easeInOut
    }, 'fly_in+=0.4')
    .to(canvas, 0.4, {
      opacity: 1,
      top: '50%'
    }, 'fly_in+=0.8');

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

  parentLeftTl.add(childLeftTls);
  parentRightTl.add(childRightTls);

  checkBackTl.to(checkBack, 0.3, {
    width: 300,
    ease: Power2.easeInOut
  });

  mainTl.add(headerTl)
        .add(mainContentTl)
        .add([parentLeftTl, parentRightTl])
        .add(checkBackTl);

  mainTl.play();
}


function beforeRouteLeave() {
  return new Promise(function(resolve, reject) {
    resolve(true);
  });
}
