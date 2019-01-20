 var dataset = [
  ['Jun',481,36.59044],
  ['Jul',792,69.69697],
  ['Aug',322,22.36025],
  ['Sept',385,12.46753],
  ['Oct',702,19.37322],
  ['Nov',540,35.55556],
  ['Dec',512,10.9375],
  ['Jan',467,8.56531],
  ['Feb',480,38.33333],
  ['Mar',423,22.69504],
  ['Apr',251,19.12351],
  ['May',339,25.9587],
  ['Jun',274,40.87591],
  ['Jul',385,14.54545],
  ['Aug',301,45.18272],
  ['Sept',285,28.07018],
  ['Oct',501,17.56487],
  ['Nov',196,16.32653],
  ['Dec',142,22.53521],
  ['Jan',234,68.37607],
  ['Feb',159,25.15723],
  ['Mar',148,5.405405],
  ['Apr',169,80.47337],
  ['May',156,5.128205],
  ['Jun',218,22.01835],
  ['Jul',249,22.48996],
  ['Aug',286,53.14685],
  ['Sept',318,30.18868],
  ['Oct',296,16.21622],
  ['Nov',271,29.5203],
  ['Dec',213,52.58216],
  ['Jan',258,164.3411],
  ['Feb',206,120.3883],
  ['Mar',204,129.4118],
  ['Apr',296,105.4054],
  ['May',276,49.27536],
  ['Jun',373,137.2654],
  ['Jul',373,79.35657],
  ['Aug',410,58.53659],
  ['Sept',398,30.15075],
  ['Oct',436,95.41284],
  ['Novs',375,78.93333],
  ['Dec',403,216.3772],
  ['Jan',160,265]

  ];
var margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = 960,
      height = 400;

  var xScale = d3.scaleBand()
                .rangeRound([0, width])
                .padding(0.1)
                .domain(dataset.map(function(d) {
                  return d[];
                }));
      yScale = d3.scaleLinear()
                .rangeRound([height, 0])
                .domain([0, d3.max(dataset, (function (d) {
                  return d[2];
                }))]);
      y2Scale = d3.scaleLinear()
                .rangeRound([height, 0])
                .domain([0, d3.max(dataset, (function (d) {
                  return d[2];
                }))]); //think of this?  

  var svg = d3.select("body").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom);

  var g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // axis-x
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale));

  // axis-y
  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(yScale));
   g.append("g")
      .attr("class", "axis axis--y2")
      .attr("transform", "translate(" + width + ",0)")
      .call(d3.axisRight(y2Scale));

  var bar = g.selectAll("rect")
    .data(dataset)
    .enter().append("g");

  // bar chart
  bar.append("rect")
    .attr("x", function(d) { return xScale(d[0]); })
    .attr("y", function(d) { return yScale(d[2]); })
    .attr("y", function(d) { return y2Scale(d[2]); })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) { return height - yScale(d[2]); })
    .attr("height", function(d) { return height - y2Scale(d[2]); })
    .attr("class", function(d) {
      var s = "bar ";
      if (d[1] < 400) {
        return s + "bar1";
      } else if (d[1] < 800) {
        return s + "bar2";
      } else {
        return s + "bar3";
      }
    });

  // labels on the bar chart
  bar.append("text")
    .attr("dy", "1.3em")
    .attr("x", function(d) { return xScale(d[0]) + xScale.bandwidth() / 2; })
    .attr("y", function(d) { return yScale(d[2]); })
    .attr("text-anchor", "middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "black")
    .text(function(d) {
      return d[2];
    });

  // line chart
  var line = d3.line()
      .x(function(d, i) { return xScale(d[0]) + xScale.bandwidth() / 2; })
      .y(function(d) { return yScale(d[1]); })
      .curve(d3.curveMonotoneX);

  bar.append("path")
    .attr("class", "line") // Assign a class for styling
    .attr("d", line(dataset)); // 11. Calls the line generator

  bar.append("circle") // Uses the enter().append() method
      .attr("class", "dot") // Assign a class for styling
      .attr("cx", function(d, i) { return xScale(d[0]) + xScale.bandwidth() / 2; })
      .attr("cy", function(d) { return yScale(d[1]); })
      .attr("r", 5);