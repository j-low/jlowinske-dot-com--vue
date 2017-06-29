export default {
  beforeRouteEnter: beforeRouteEnter,
  beforeRouteLeave: beforeRouteLeave
}

function beforeRouteEnter() {
  var mainContent = $('#main-content');
  var conHead = $('.hemisphere');

  var parentTl = new TimelineMax({ paused: true });
  var childTls = [];
  var staggerInt = 0.2;

  var layoutTl = new TimelineMax();
  layoutTl.add('layout')
    .to(mainContent, 0.3, {
      top: 155,
      right: 0,
      bottom: 55,
      left: '10%'
    }, 'layout')
    .to(conHead, 0.3, {
      left: '2%'
    }, 'layout');
  childTls.push(layoutTl);

  parentTl.add(childTls, 0, 'normal', staggerInt);
  parentTl.play();
}

function beforeRouteLeave() {
  return new Promise(function(resolve, reject) {
    resolve(true);
  });
}
