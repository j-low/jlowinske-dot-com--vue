import * as d3 from 'd3';

export default {
  init: init
}

function init() {
  var data = generateData();
  var selectedIndex = null;
  var radius = {
  	default: 4,
    hovered: 7,
    selected: 10
  };

  var color = {
  	default: '#333333',
    selected: '#ffffff'
  };

  var margin = {top: 20, right: 50, bottom: 30, left: 50}
  var width = 500 - margin.left - margin.right;
  var height = 300 - margin.top - margin.bottom;

  var x = d3.scale.linear()
      .domain([0, 30])
      .range([0, width]);

  var y = d3.scale.linear()
  		.domain([20, 50])
      .range([height - 20, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient('bottom');

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient('left');

  var line = d3.svg.line()
  		.interpolate('cardinal')
      .x(function(d) { return x(d.date); })
      .y(function(d) { return y(d.temp); });

  var svg = d3.select('.line-chart-container').append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
    .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // append x-axis
  svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + (height - 20) + ')')
      .call(xAxis)
    .append('text')
  		.attr('x', 250)
      .attr('y', 20)
      .attr('dy', '.71em')
      .style('text-anchor', 'middle')
      .text('April (Date)');

  // append y-axis
  svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
    .append('text')
      .attr('transform', 'rotate(-90) translate(-200, -35)')
      .attr('y', 6)
      .style('text-anchor', 'start')
      .text('High Temp (ºF)');

  // append line
  svg.append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', line);

  // append circles
  svg.selectAll('circle')
  		.data(data)
      .enter()
    .append('circle')
    	.attr('class', 'data-node')
      .attr('r', radius.default)
      .attr('cx', function(d) { return x(d.date); })
      .attr('cy', function(d) { return y(d.temp); })
      .style('fill', color.default)
      .on('mouseenter', mouseenter)
      .on('mouseout', mouseleave)
      .on('click', click);

  // append textbox
  svg.append('g')
  		.attr('class', 'textbox')
      .attr('transform', 'translate(308, 130)')
    .append('rect')
      .attr('rx', 5)
      .attr('width', 92)
      .attr('height', 70);

  function mouseenter(e, i) {
  	if (selectedIndex !== i) {
    	d3.select(this)
          .transition()
          .attr('r', radius.hovered);
    }
  }

  function mouseleave(e, i) {
  	if (selectedIndex !== i) {
      d3.select(this)
          .transition()
          .attr('r', radius.default);
    }
  }

  function click(e, i) {
  	if (i === selectedIndex) {
    	deselect(this);
    } else {
    	select(this, e, i);
    }
  }

  function select(circle, data, index) {
  	var allDataNodes = d3.selectAll('.data-node');

  	allDataNodes
    		.transition()
        .attr('r', radius.default)
        .style('fill', color.default);

    svg.selectAll('.info-container')
      	.remove();

    d3.select(circle)
    		.transition()
        .attr('r', radius.selected)
        .style('fill', color.selected)
        .style('stroke', '#333333');

  	svg.append('g')
    		.attr('class', 'info-container')
        .attr('transform', 'translate('+ circle.attributes.cx.value + ',' + circle.attributes.cy.value +')')
  		.append('text')
      	.attr('class', 'info')
        .attr('dx', -2.5)
        .attr('dy', 5)
        .style('font-size', 16)
      	.text('i');

  	selectedIndex = index;
    showTextbox(data, index);
  }

  function deselect(circle) {
    d3.select(circle)
    		.transition()
        .attr('r', radius.default)
        .style('fill', color.default)
        .style('stroke', 'none');

    d3.selectAll('.info-container')
    		.remove();

  	selectedIndex = null;
    hideTextbox();
  }

  function showTextbox(data, index) {
  	var textbox = d3.select('.textbox');

  	textbox.selectAll('text')
    		.remove();

  	textbox
        .transition()
        .style('opacity', 1)
        .attr('transform', 'translate(308, 140)');

    textbox
    	.append('circle')
      .attr('class', 'info-circle')
      .attr('r', 7)
      .attr('cx', 12.5)
      .attr('cy', 12)
      .style('fill', '#ffffff');

    textbox
      .append('text')
      	.attr('class', 'info')
      	.attr('dx', 10.75)
        .attr('dy', 16)
        .text('i');

    textbox
      .append('text')
      	.attr('class', 'date')
      	.attr('dx', 25)
        .attr('dy', 16)
        .text('April ' + data.date);

    textbox
      .append('text')
      	.attr('dx', 5)
        .attr('dy', 32)
        .text('Today: ' + data.temp + 'ºF');

  	textbox
      .append('text')
      	.attr('dx', 5)
        .attr('dy', 47)
        .text('Record High: ' + data.recHigh + 'ºF');

  	textbox
      .append('text')
      	.attr('dx', 5)
        .attr('dy', 62)
        .text('Record Low: ' + data.recLow + 'ºF');
  }

  function hideTextbox() {
  	var textbox = d3.select('.textbox');

    textbox
        .transition()
        .style('opacity', 0)
        .attr('transform', 'translate(308, 130)');

    textbox.selectAll('text')
    		.remove();

    textbox.selectAll('circle')
    		.remove();
  }

  function generateData() {
    var data = [];

    for (var i = 0; i < 30; i++) {
    	var temp = Math.floor(Math.random() * 10) + 35;
      var recHigh = Math.floor((temp + Math.random() * 20)) + 25;
      var recLow = Math.floor((temp - Math.random() * 15)) - 20;
      var datum = Object.assign({}, {
      	date: i + 1,
        temp: temp,
        recHigh: recHigh,
        recLow: recLow
      });

      data.push(datum);
    }

    return data;
  }
}
