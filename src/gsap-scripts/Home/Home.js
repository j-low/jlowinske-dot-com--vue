import socialLinkAnim from 'anim/layout/socialLink';

export default {
  beforeRouteEnter: beforeRouteEnter,
  beforeRouteLeave: beforeRouteLeave
};

function beforeRouteEnter(t, f) {
  const name = $('.letter-name');
  const title = $('.letter-job-title');
  const navs = ['#blog-nav', '#d3-nav', '#about-nav', '#contact-nav'];

  var mainTl = new TimelineLite({ paused: true });
  var navsTl = new TimelineLite();
  var nameTl = new TimelineLite();
  var titleTl = new TimelineLite();
  var socialLinkTl = socialLinkAnim.getSocialLinkTimeline(t, f);

  // navs anim
  _.each(navs, function(n) {
    let navBox = $(n + ' .nav-box');
    let navLabel = $(n + ' .nav-label');
    var boxTween = TweenLite.fromTo(navBox, 0.15, { left: -100, opacity: 0 }, { left: 0, opacity: 1, ease: Power1.easeIn });
    var labelTween = TweenLite.fromTo(navLabel, 0.15, { left: 200, opacity: 0 }, { left: 100, opacity: 1, ease: Power1.easeIn });
    navsTl.add([boxTween, labelTween]);
  });

  // name anim
  var nameFade = TweenLite.fromTo(name, 0.5, { opacity: 0 }, { opacity: 1 });
  var nameKerningTweensLeft = [];
  var nameKerningTweensRight = [];
  var nameKerningShift = 0;
  var leftIndex;
  var rightIndex;

  if (name.length % 2 === 0) {
    // even length
    leftIndex = (name.length / 2) - 1;
    rightIndex = (name.length / 2);
  } else {
    // odd length
    leftIndex = Math.floor(name.length / 2) - 1;
    rightIndex = Math.floor(name.length / 2) + 1;
  }

  for(var l = leftIndex, r = rightIndex; l >= -1, r < name.length; l--, r++) {
    let leftLetter = name[l];
    let leftTween = TweenLite.fromTo(leftLetter, 0.5, { x: -(nameKerningShift) }, { x: 0, ease: Power2.easeInOut  });

    let rightLetter = name[r];
    let rightTween = TweenLite.fromTo(rightLetter, 0.5, { x: nameKerningShift }, { x: 0, ease: Power2.easeInOut });

    nameKerningTweensLeft.push(leftTween);
    nameKerningTweensRight.push(rightTween);

    nameKerningShift += 20;
  }

  nameTl.add([nameFade, nameKerningTweensLeft, nameKerningTweensRight]);

  // title anim
  var titleFadeAndShift = TweenLite.fromTo(title, 0.5, { opacity: 0, x: -10 }, { opacity: 1, x: 0 });
  var titleKerningTweens = [];
  var titleKerningShift = 0;

  _.each(title, function(letter, i) {
    let tween = TweenLite.fromTo(letter, 0.5, { x: 0}, { x: titleKerningShift });
    titleKerningTweens.push(tween);
    titleKerningShift += 5;
  });

  titleTl.add([titleFadeAndShift, titleKerningTweens]);

  mainTl
    .add([nameTl, socialLinkTl])
    .add([titleTl, navsTl]);

  mainTl.play();
}

function beforeRouteLeave(to) {
  const selectedNotSelected = getSelectedNotSelected(to);

  return new Promise(function(resolve, reject) {
    const name = $('.letter-name');
    const title = $('.letter-job-title');
    const selectedBox = $(selectedNotSelected.selected + ' .nav-box');
    const selectedLabel = $(selectedNotSelected.selected + ' .nav-label');
    const notSelected = $(selectedNotSelected.notSelected);

    var mainTl = new TimelineLite({ paused: true, onComplete: function() { resolve(true); } });
    var selectedTl = new TimelineLite();
    var notSelectedTl = new TimelineLite();
    var nameTl = new TimelineLite();
    var titleTl = new TimelineLite();

    // selected anim
    var boxLeft = TweenLite.to(selectedBox, 0.2, { left: '-=100', opacity: 0 });
    var labelRight = TweenLite.to(selectedLabel, 0.2, { left: '+=100', opacity: 0 });
    selectedTl.add([boxLeft, labelRight]);

    // not selected anim
    _.eachRight(notSelected, function(ns) {
      let tween = TweenLite.to(ns, 0.1, { top: '+=200', opacity: 0 });
      notSelectedTl.add(tween);
    });

    // name anim
    var nameFade = TweenLite.fromTo(name, 0.3, { opacity: 1 }, { opacity: 0 });
    var nameKerningTweensLeft = [];
    var nameKerningTweensRight = [];
    var nameKerningShift = 0;
    var leftIndex;
    var rightIndex;

    if (name.length % 2 === 0) {
      // even length
      leftIndex = (name.length / 2) - 1;
      rightIndex = (name.length / 2);
    } else {
      // odd length
      leftIndex = Math.floor(name.length / 2) - 1;
      rightIndex = Math.floor(name.length / 2) + 1;
    }

    for(var l = leftIndex, r = rightIndex; l >= -1, r < name.length; l--, r++) {
      let leftLetter = name[l];
      let leftTween = TweenLite.fromTo(leftLetter, 0.3, { x: 0 }, { x: -(nameKerningShift), ease: Power2.easeInOut  });

      let rightLetter = name[r];
      let rightTween = TweenLite.fromTo(rightLetter, 0.3, { x: 0 }, { x: nameKerningShift, ease: Power2.easeInOut });

      nameKerningTweensLeft.push(leftTween);
      nameKerningTweensRight.push(rightTween);

      nameKerningShift += 20;
    }

    nameTl.add([nameFade, nameKerningTweensLeft, nameKerningTweensRight]);

    // title anim
    var titleFadeAndShift = TweenLite.fromTo(title, 0.3, { opacity: 1, x: 0 }, { opacity: 0, x: -10 });
    var titleKerningTweens = [];
    var titleKerningShift = 0;

    _.each(title, function(letter, i) {
      let tween = TweenLite.fromTo(letter, 0.3, { x: titleKerningShift}, { x: 0 });
      titleKerningTweens.push(tween);
      titleKerningShift += 5;
    });

    titleTl.add([titleFadeAndShift, titleKerningTweens]);

    mainTl
      .add(selectedTl)
      .add(notSelectedTl)
      .add([nameTl, titleTl]);

    mainTl.play();
  });
}

function getSelectedNotSelected(route) {
  const routes = ['blog', 'd3', 'about', 'contact'];
  var selected = '';
  var notSelected = [];
  var sns = {};

  _.each(routes, function(r) {
    let navClass = '#' + r + '-nav';
    if (r === route.name) {
      selected = navClass;
    } else {
      notSelected.push(navClass);
    }
  });

  sns.selected = selected;
  sns.notSelected = notSelected.join(', ');

  return sns;
}
