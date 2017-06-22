export default {
  beforeRouteEnter: beforeRouteEnter,
  beforeRouteLeave: beforeRouteLeave
}

function beforeRouteEnter() {
  var navSpheres = $('.home-content--inner a');

  var parentTl = new TimelineMax({ paused: true });
  var childTls = [];
  var staggerInt = 0.2;

  _.forEach(navSpheres, function(nb, i) {
    var tl = new TimelineMax();
    var leftPct = (i * 30) + 12;
    tl.to(nb, 0.2, { left: leftPct + '%', ease: Power2.easeInOut });
    childTls.push(tl);
  });

  parentTl.add(childTls, 0, 'normal', staggerInt);
  parentTl.play();
}

function beforeRouteLeave() {
  return new Promise(function(resolve, reject) {
    var navSpheres = $('.home-content--inner a');

    var parentTl = new TimelineMax({ onComplete: function() {
        resolve(true);
      }, paused: true });
    var childTls = [];
    var staggerInt = 0.2;

    _.eachRight(navSpheres, function(nb) {
      var tl = new TimelineMax();
      tl.to(nb, 0.2, { left: '110%', ease: Power2.easeInOut });
      childTls.push(tl);
    });

    parentTl.add(childTls, 0, 'normal', staggerInt);
    parentTl.play();
  });
}
