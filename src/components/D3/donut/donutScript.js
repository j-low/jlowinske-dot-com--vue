import * as d3 from 'd3';

export default {
  init: init,
  teardown: teardown
}

var rafKillswitch = false;

function init() {
  rafKillswitch = false;

  /* START: STATE MANAGER */
  var State = function(name) {
    this.name = name;
  };
  State.prototype.onClick = function() {};
  State.prototype.onMouseEnter = function() {};
  State.prototype.onMouseLeave = function() {};
  State.prototype.ambientRotation = function() {};


  var metaState = new State('metaState');
  metaState.previousSlice = null;
  metaState.currentSlice = null;
  metaState.degrees = 0;
  metaState.defaultDuration = 500;

  // unselected
  var unselectedState = new State('unselected');

  unselectedState.onClick = function(slice, event, i) {
    metaState.previousSlice = metaState.currentSlice;
    metaState.currentSlice = i;
    currentState = transitionState;

    explodeSlice(slice, event, i);
    showSummaryText(event);

    setTimeout(function() {
      currentState = selectedState;
    }, metaState.defaultDuration);
  }

  unselectedState.onMouseEnter = function(slice, event) {
    expandSlice(slice);
  }

  unselectedState.onMouseLeave = function(slice, event) {
    unexpandSlice(slice);
  }

  unselectedState.ambientRotation = function(deltaTime) {
    metaState.degrees = metaState.degrees % 360;
    d3.select('.slices-container')
      .selectAll('path')
      .attr('transform', function(d) {
      return "rotate(" + metaState.degrees + ")";
    });

    metaState.degrees += 0.1;
  }

  // transition
  var transitionState = new State('transition');

  // selected
  var selectedState = new State('selected');
  selectedState.onClick = function(slice, event, i) {
    unexplodeSlices();
    hideSummaryText();
    currentState = unselectedState;

    if (i === metaState.currentSlice) {
      metaState.currentSlice = null;
    } else {
      unselectedState.onClick(slice, event, i);
    }
  }

  selectedState.onMouseEnter = function(slice, event, i) {
    if (i !== metaState.currentSlice) {
      expandSlice(slice);
    }
  }

  selectedState.onMouseLeave = function(slice, event, i) {
    if (i !== metaState.currentSlice) {
      unexpandSlice(slice);
    }
  }

  var currentState = unselectedState;
  /* END: STATE MANAGER */


  var chartData = generateData();
  var primaryPalette = ['#ff6e6e', '#3effff', '#ffa02e', '#06c5ff', '#ffff15', '#87ff6e'];

  var width = 480;
  var height = 300;
  var radius = width / 5;

  var svg = d3.select('.donut-container').append('svg')
      .attr('class', '.donut-svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + width / 3 + ',' + height / 2 + ')');

  svg.append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 53)
      .attr("class", "total-complete-circle");

  svg.append('text')
    .attr("dy", "11px")
    .attr("class", "total-complete-text")
    .style("text-anchor", "middle")
    .text(chartData.totalComplete + '%');


  var slicesContainer = svg.append('g')
        .attr('class', 'slices-container');
  var knownIssuesContainer = svg.append('g')
        .attr('class', 'known-issues-container');
  var linesContainer = svg.append('g')
        .attr('class', 'lines-container');
  var textContainer = svg.append('g')
        .attr('class', 'text-container');

  var pie = d3.layout.pie()
    .padAngle(.02)
    .value(function(d) {
      return d.complete;
    });

  var arc = d3.svg.arc()
      .innerRadius(radius - 40)
      .outerRadius(radius);

  var outerArc = d3.svg.arc()
      .innerRadius(radius - 15)
      .outerRadius(radius + 30);

  var arcHover = d3.svg.arc()
      .innerRadius(radius - 40)
      .outerRadius(radius + 5);

  var arcClick = d3.svg.arc()
      .innerRadius(radius - 35)
      .outerRadius(radius + 10);

  var lineBuilder = d3.svg.line()
      .x(function(d) { return d.x; })
      .y(function(d) { return d.y; })
      .interpolate('linear');


  slicesContainer.selectAll('path')
      .data(pie(chartData.data))
      .enter()
      .append('path')
      .style('fill', function(d, i) {
        return primaryPalette[i];
      })
      .attr('class', function(d, i) { return 'module module-' + i; })
      .attr('d', arc)
      .on('mouseenter', mouseenter)
      .on('mouseout', mouseleave)
      .on('click', click);

  /* UNCOMMENT TO ROTATE */
  ambientRotation();

  function mouseenter(e, i) {
    currentState.onMouseEnter(this, e, i);
  }

  function mouseleave(e, i) {
    currentState.onMouseLeave(this, e, i);
  }

  function click(e, i) {
    currentState.onClick(this, e, i);
  }

  function expandSlice(slice) {
    d3.select(slice)
        .attr('d', arcHover);
  }

  function unexpandSlice(slice) {
    d3.select(slice)
        .transition()
        .attr('d', arc);
  }

  function explodeSlice(slice, event, i) {
    var diff = event.endAngle - (Math.PI / 2.8);
    var halfWidth = (event.startAngle - event.endAngle) / 2;
    var rotation = toDegrees((Math.PI * 2) - diff - halfWidth);

    slicesContainer.selectAll('path')
        .transition()
        .duration(metaState.defaultDuration)
        .attr('transform', function(d) {
          return "rotate(" + rotation + ")";
        });

    setTimeout(function() {
      d3.select(slice)
          .transition()
          .attr('d', arcClick);
    }, metaState.defaultDuration);

    metaState.degrees = rotation;
  }

  function unexplodeSlices() {
    slicesContainer.selectAll('path')
      .attr('d', arc);
  }

  function showSummaryText(event) {
    setTimeout(function() {
      linesContainer.append('path')
      .attr('d', lineBuilder([ {x: 73, y: -33}, {x: 125, y: -100}, {x: 275, y: -100} ]))
      .attr('class', 'text-summary-line');

      // completion percentage
      textContainer.append('text')
      .attr('class', 'section-completion-percentage')
      .attr('dx', 125)
      .attr('dy', -110)
      .text(event.data.sectionCompPercentage + '% complete');

      textContainer.append('text')
      .attr('class', 'modules-complete')
      .attr('dx', 127)
      .attr('dy', -82)
      .text(event.data.complete + ' out of ' + event.data.total + ' modules');

      textContainer.append('text')
      .attr('class', 'outstanding-issues')
      .attr('dx', 127)
      .attr('dy', -67)
      .text(function() {
        return event.data.knownIssues.length === 1 ? event.data.knownIssues.length + ' outstanding issue' : event.data.knownIssues.length + ' outstanding issues';
      });
    }, metaState.defaultDuration + 1);
  }

  function hideSummaryText(event) {
    linesContainer.selectAll('path')
        .remove();

    textContainer.selectAll('text')
        .remove();
  }

  function lineBuilder(data) {
    return d3.svg.line()
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; })
        .interpolate('linear');
  }

  function generateData() {
    var data = {};
    var dataArr = [];

    for (var i = 0; i <= 5; i++) {
      var label = 'Rule' + (i + 1);
      var total = Math.ceil(Math.random() * 10);
      var complete = Math.ceil(Math.random() * total);
      var incomplete = total - complete;
      var sectionCompPercentage = Math.floor((complete / total) * 100);
      var achievementCompPercent = Math.floor((complete / total) * 99);
      var knownIssues = i % 2 === 0 ? ['Course expiring soon'] : [];
      var datum = Object.assign({}, {
        label: label,
        total: total,
        complete: complete,
        incomplete: incomplete,
        sectionCompPercentage: sectionCompPercentage,
        achievementCompPercent: achievementCompPercent,
        knownIssues: knownIssues
      });

      dataArr.push(datum);
    }

    Object.assign(data, {
      data: dataArr,
      totalComplete: Math.ceil(Math.random() * 100)
    });

    return data;
  }

  function toDegrees(radians) {
    return radians * 180 / Math.PI;
  }

  function ambientRotation(deltaTime) {
    if (rafKillswitch) return;
    
    currentState.ambientRotation(deltaTime);
    requestAnimationFrame(ambientRotation);
  }

  return;
}

function teardown() {
  rafKillswitch = true;
}
