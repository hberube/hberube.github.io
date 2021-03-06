<script src="d3/d3.v3.min.js"></script>
<script>

var margin = {top: 20, right: 40, bottom: 10, left: 150},
    width = 660,
    height = 200 - margin.top - margin.bottom;

var format = d3.format("1"),
    teams,
    timepoint;

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.ordinal()
    .rangeRoundBands([0, height], .1);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("top")
    .tickSize(-height - margin.bottom)
    .tickFormat(format);

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("margin-left", -margin.left + "px")
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
    .attr("class", "x axis");

svg.append("g")
    .attr("class", "y axis")
  .append("line")
    .attr("class", "domain")
    .attr("y2", height);

var menu = d3.select("#menu select")
    .on("change", change);

d3.csv("d3/d3-barplot-stats.csv", function(data) {
  teams = data;

  var ages = d3.keys(teams[0]).filter(function(key) {
    return key != "Team";
  });

  teams.forEach(function(team) {
    ages.forEach(function(timepoint) {
      team[timepoint] =  team[timepoint]
    });
  });

  menu.selectAll("option")
      .data(ages)
    .enter().append("option")
      .text(function(d) { return d; });

  menu.property("value", "Hier");

  redraw();
});

var altKey;

d3.select(window)
    .on("keydown", function() { altKey = d3.event.altKey; })
    .on("keyup", function() { altKey = false; });

function change() {
  clearTimeout(timeout);

  d3.transition()
      .duration(altKey ? 7500 : 750)
      .each(redraw);
}

function redraw() {
  var age1 = menu.property("value"),
      top = teams.sort(function(a, b) { return b[age1] - a[age1]; }).slice(0, 10);

  y.domain(top.map(function(d) { return d.Team; }));

  var bar = svg.selectAll(".bar")
      .data(top, function(d) { return d.Team; });

  var barEnter = bar.enter().insert("g", ".axis")
      .attr("class", "bar")
      .attr("transform", function(d) { return "translate(0," + (y(d.Team) + height) + ")"; })
      .style("fill-opacity", 0);

  barEnter.append("rect")
      .attr("width", timepoint && function(d) { return x(d[timepoint]); })
      .attr("height", y.rangeBand());

  barEnter.append("text")
      .attr("class", "label")
      .attr("x", -3)
      .attr("y", y.rangeBand() / 2)
      .attr("dy", ".35em")
      .attr("text-anchor", "end")
      .text(function(d) { return d.Team; });

  barEnter.append("text")
      .attr("class", "value")
      .attr("x", timepoint && function(d) { return x(d[timepoint]) - 3; })
      .attr("y", y.rangeBand() / 2)
      .attr("dy", ".35em")
      .attr("text-anchor", "end");

  x.domain([0, top[0][timepoint = age1]]);

  var barUpdate = d3.transition(bar)
      .attr("transform", function(d) { return "translate(0," + (d.y0 = y(d.Team)) + ")"; })
      .style("fill-opacity", 1);

  barUpdate.select("rect")
      .attr("width", function(d) { return x(d[timepoint]); });

  barUpdate.select(".value")
      .attr("x", function(d) { return x(d[timepoint]) - 3; })
      .text(function(d) { return format(d[timepoint]); });

  var barExit = d3.transition(bar.exit())
      .attr("transform", function(d) { return "translate(0," + (d.y0 + height) + ")"; })
      .style("fill-opacity", 0)
      .remove();

  barExit.select("rect")
      .attr("width", function(d) { return x(d[timepoint]); });

  barExit.select(".value")
      .attr("x", function(d) { return x(d[timepoint]) - 3; })
      .text(function(d) { return format(d[timepoint]); });

  d3.transition(svg).select(".x.axis")
      .call(xAxis);
}

var timeout = setTimeout(function() {
  menu.property("value", "Hier").node().focus();
  change();
}, 1000);

</script>


<script src="d3/highlight.min.js"></script>