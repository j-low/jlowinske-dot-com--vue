export default {
  beforeRouteEnter: beforeRouteEnter,
  beforeRouteLeave: beforeRouteLeave
};

function beforeRouteEnter() {
  var navSpheres = $('.inner-content--home a');
  var mainContent = $('#main-content');
  var conHead = $('.hemisphere');

  var parentTl = new TimelineMax({ paused: true });
  var childTls = [];
  var staggerInt = 0.2;

  var layoutTl = new TimelineMax();
  layoutTl.add('layout')
    .to(mainContent, 0.3, {
      top: '30%',
      right: 0,
      bottom: '20%',
      left: '20%'
    }, 'layout')
    .to(conHead, 0.3, {
      left: '10%'
    }, 'layout');
  childTls.push(layoutTl);

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
    var navSpheres = $('.inner-content--home a');

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
