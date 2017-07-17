export default {
  snsTimeline: snsTimeline
}

function snsTimeline(to) {
  const sns = getSelectedNotSelected(to);
  const selectedBox = $(sns.selected + ' .nav-box');
  const selectedLabel = $(sns.selected + ' .nav-label');
  const notSelected = $(sns.notSelected);
  var mainTl = new TimelineLite();
  var selectedTl = new TimelineLite();
  var notSelectedTl = new TimelineLite();

  // selected anim
  if (sns.selected) {
    var boxLeft = TweenLite.to(selectedBox, 0.2, { left: '-=100', opacity: 0 });
    var labelRight = TweenLite.to(selectedLabel, 0.2, { left: '+=100', opacity: 0 });
    selectedTl.add([boxLeft, labelRight]);
  }

  // not selected anim
  _.eachRight(notSelected, function(ns) {
    let tween = TweenLite.to(ns, 0.1, { top: '+=200', opacity: 0 });
    notSelectedTl.add(tween);
  });

  mainTl
    .add(selectedTl)
    .add(notSelectedTl);

  return mainTl;
}

function getSelectedNotSelected(route) {
  const routes = ['donut', 'line-chart'];
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
