var dataset = [
 ['15-Jun',36.59, 481],
 ['15-Jul',69.69,792,],
 ['15-Aug',22.36,322],
 ['15-Sept', 12.46,385],
 ['15-Oct',19.37, 702],
 ['15-Nov',35.55,540],
 ['15-Dec',10.93, 512,],
 ['16-Jan',8.56, 467],
 ['16-Feb',38.33, 480],
 ['16-Mar',22.69, 423],
 ['16-Apr',19.12, 251],
 ['16-May',25.95, 339],
 ['16-Jun',40.87, 274],
 ['16-Jul',14.54, 385],
 ['16-Aug',45.18, 301],
 ['16-Sept',28.07, 285],
 ['16-Oct',17.56, 501],
 ['16-Nov',16.32, 196],
 ['16-Dec',22.53, 142],
 ['17-Jan',68.37, 234],
 ['17-Feb',25.15, 159],
 ['17-Mar',5.40, 148],
 ['17-Apr',80.47, 169],
 ['17-May',5.12, 156],
 ['17-Jun',22.01, 218],
 ['17-Jul',22.48, 249],
 ['17-Aug',53.14, 286],
 ['17-Sept',30.18, 318],
 ['17-Oct',16.21, 296],
 ['17-Nov',29.52, 271],
 ['17-Dec',52.58, 213],
 ['18-Jan',164.34, 258],
 ['18-Feb',120.38, 206],
 ['18-Mar',129.41, 204],
 ['18-Apr',105.40, 296],
 ['18-May',49.27, 276],
 ['18-Jun',137.26, 373],
 ['18-Jul',79.35, 373],
 ['18-Aug',58.53, 410],
 ['18-Sept',30.15, 398],
 ['18-Oct',95.41, 436],
 ['18-Nov',78.93, 375],
 ['18-Dec',216.37, 403],
 ['19-Jan',160,265]

 ];

  var margin = {top: 100, right: 100, bottom: 30, left: 40},
      width = 1800,
      height = 500;

  var xScale = d3.scaleBand()
                .rangeRound([0, width])
                .padding(0)
                .domain(dataset.map(function(d) {
                  return d[0];
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
                }))]);          

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
  // axis y2
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
    .attr("y", function(d) { return yScale(d[2]); }) // 
    .attr("y2", function(d) { return y2Scale(d[2]); })
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
    .attr("x", function(d) { return xScale(d[0]) + xScale.bandwidth() / 2;})
    .attr("y", function(d) { return yScale(d[2]); })
    .attr("y2", function(d) { return y2Scale(d[2]); })
    .attr("text-anchor", "middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "10px")
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