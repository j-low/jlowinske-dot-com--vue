export default {
  beforeRouteEnter: beforeRouteEnter,
  beforeRouteLeave: beforeRouteLeave
};

function beforeRouteEnter() {
  const name = $('.letter-name');
  const title = $('.letter-job-title');

  var mainTl = new TimelineLite({ paused: true });
  var nameTl = new TimelineLite();
  var titleTl = new TimelineLite();

  // name anim
  var nameFadeAndShift = TweenLite.fromTo(name, 0.4, { opacity: 0, y: -10 }, { opacity: 1, y: 0 });
  var nameKerningTweens = [];
  var nameKerningShift = 0;

  _.each(name, function(letter, i) {
    // let tween = TweenLite.to(letter, 0.4, { x: nameKerningShift });
    // nameKerningTweens.push(tween);
    // nameKerningShift += 5;
  });

  nameTl.add([nameFadeAndShift, nameKerningTweens]);

  // title anim
  var titleFadeAndShift = TweenLite.fromTo(title, 0.4, { opacity: 0, x: -10 }, { opacity: 1, x: 0 });
  var titleKerningTweens = [];
  var titleKerningShift = 0;

  _.each(title, function(letter, i) {
    let tween = TweenLite.to(letter, 0.4, { x: titleKerningShift });
    titleKerningTweens.push(tween);
    titleKerningShift += 5;
  });

  titleTl.add([titleFadeAndShift, titleKerningTweens]);

  mainTl
    .add(nameTl)
    .add(titleTl);

  mainTl.play();
}

function beforeRouteLeave() {
  return new Promise(function(resolve, reject) {
    resolve(true);
  });
}
