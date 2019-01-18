// Template: Setup svg using Bostock's margin convention

var margin = {top: 20, right: 160, bottom: 35, left: 30};

var width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Added our data from JSON file after reading CSV
/* Template: Data in strings like it would be if imported from a csv */

var data = [
  {
    "date": "6/15",
    "Tweets About the Wall": "2",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "20"
  },
  {
    "date": "7/15",
    "Tweets About the Wall": "4",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "65"
  },
  {
    "date": "8/15",
    "Tweets About the Wall": "3",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "6"
  },
  {
    "date": "9/15",
    "Tweets About the Wall": "1",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "5"
  },
  {
    "date": "10/15",
    "Tweets About the Wall": "2",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "15"
  },
  {
    "date": "11/15",
    "Tweets About the Wall": "4",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "20"
  },
  {
    "date": "12/15",
    "Tweets About the Wall": "1",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "6"
  },
  {
    "date": "1/16",
    "Tweets About the Wall": "2",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "3"
  },
  {
    "date": "2/16",
    "Tweets About the Wall": "5",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "18"
  },
  {
    "date": "3/16",
    "Tweets About the Wall": "2",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "10"
  },
  {
    "date": "4/16",
    "Tweets About the Wall": "1",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "5"
  },
  {
    "date": "5/16",
    "Tweets About the Wall": "3",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "8"
  },
  {
    "date": "6/16",
    "Tweets About the Wall": "0",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "14"
  },
  {
    "date": "7/16",
    "Tweets About the Wall": "1",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "6"
  },
  {
    "date": "8/16",
    "Tweets About the Wall": "4",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "13"
  },
  {
    "date": "9/16",
    "Tweets About the Wall": "2",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "8"
  },
  {
    "date": "10/16",
    "Tweets About the Wall": "0",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "11"
  },
  {
    "date": "11/16",
    "Tweets About the Wall": "1",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "3"
  },
  {
    "date": "12/16",
    "Tweets About the Wall": "0",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "4"
  },
  {
    "date": "1/17",
    "Tweets About the Wall": "5",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "15"
  },
  {
    "date": "2/17",
    "Tweets About the Wall": "1",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "4"
  },
  {
    "date": "3/17",
    "Tweets About the Wall": "0",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "1"
  },
  {
    "date": "4/17",
    "Tweets About the Wall": "5",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "12"
  },
  {
    "date": "5/17",
    "Tweets About the Wall": "0",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "1"
  },
  {
    "date": "6/17",
    "Tweets About the Wall": "1",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "5"
  },
  {
    "date": "7/17",
    "Tweets About the Wall": "1",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "6"
  },
  {
    "date": "8/17",
    "Tweets About the Wall": "4",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "15"
  },
  {
    "date": "9/17",
    "Tweets About the Wall": "1",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "11"
  },
  {
    "date": "10/17",
    "Tweets About the Wall": "2",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "4"
  },
  {
    "date": "11/17",
    "Tweets About the Wall": "4",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "6"
  },
  {
    "date": "12/17",
    "Tweets About the Wall": "5",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "9"
  },
  {
    "date": "1/18",
    "Tweets About the Wall": "13",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "40"
  },
  {
    "date": "2/18",
    "Tweets About the Wall": "6",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "25"
  },
  {
    "date": "3/18",
    "Tweets About the Wall": "10",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "23"
  },
  {
    "date": "4/18",
    "Tweets About the Wall": "7",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "32"
  },
  {
    "date": "5/18",
    "Tweets About the Wall": "4",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "13"
  },
  {
    "date": "6/18",
    "Tweets About the Wall": "4",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "60"
  },
  {
    "date": "7/18",
    "Tweets About the Wall": "3",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "34"
  },
  {
    "date": "8/18",
    "Tweets About the Wall": "1",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "29"
  },
  {
    "date": "9/18",
    "Tweets About the Wall": "2",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "13"
  },
  {
    "date": "10/18",
    "Tweets About the Wall": "2",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "50"
  },
  {
    "date": "11/18",
    "Tweets About the Wall": "4",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "33"
  },
  {
    "date": "12/18",
    "Tweets About the Wall": "50",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "59"
  },
  {
    "date": "1/19",
    "Tweets About the Wall": "19",
    "Tweets About Latin American Migrants, Asylees and Immigrants": "34"
  }
]
// Changed year format 
var parse = d3.time.format("%m/%y").parse;

// Added our terms to d3 data set 
//Changed fruits term to Tweets  
// Template: Transpose the data into layers
var stackFn =  d3.layout.stack();
// var dataset = stackFn(
//   ["Tweets About the Wall", 
//   "Tweets About Latin American Migrants, Asylees and Immigrants"]
//     .map(function(Tweets) {
//       return data.map(function(d) {
//         var tweets = +d["Tweets About the Wall"] + (+d["Tweets About Latin American Migrants, Asylees and Immigrants"]);
//         return {x: parse(d.date), y: tweets};
//       });
// }));

// Transpose the data into layers
var dataset = d3.layout.stack()(["Tweets About the Wall", 
  "Tweets About Latin American Migrants, Asylees and Immigrants"]
  .map(function(tweets) {
  return data.map(function(d) {
    return {x: parse(d.date), y: +d[tweets]};
  });
}));

console.log(dataset);


// Template: Set x, y and colors
var x = d3.scale.ordinal()
  .domain(dataset[0].map(function(d) { return d.x; }))
//Come back to edit first digit from 10 to 5, my guess is this is the interval to set marker for the y axis
  .rangeRoundBands([10, width-10], 0.02);

var y = d3.scale.linear()
  .domain([0, d3.max(dataset, function(d) {  return d3.max(d, function(d) { return d.y0 + d.y; });  })])
  .range([height, 0]);

// Changed colors 
var colors = ["31aef7", "#e2df14"];


// Template: Define and draw axes
//Changed ticks 
var yAxis = d3.svg.axis()
  .scale(y)
  .orient("left")
  .ticks(10)
  .tickSize(-width, 0, 0)
  .tickFormat( function(d) { return d } );

// Changed month and year format 
var xAxis = d3.svg.axis()
  .scale(x)
  .orient("bottom")
  .tickFormat(d3.time.format("%m/%y"));

svg.append("g")
  .attr("class", "y axis")
  .call(yAxis);

svg.append("g")
  //.selectAll('text')
  //.style('text-anchor', 'end')
  //.attr('dx', '-8em')
  //.attr('dy', '.15em')
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  //.attr('transform', 'rotate(-65)');
  .call(xAxis);

// Need to change 
// Template: Create groups for each series, rects for each segment 
var groups = svg.selectAll("g.cost")
  .data(dataset)
  .enter().append("g")
  .attr("class", "cost")
  .style("fill", function(d, i) { return colors[i]; });

var rect = groups.selectAll("rect")
  .data(function(d) { return d; })
  .enter()
  .append("rect")
  .attr("x", function(d) { return x(d.x); })
  .attr("y", function(d) { return y(d.y0 + d.y); })
  .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
  .attr("width", x.rangeBand())
  .on("mouseover", function() { tooltip.style("display", null); })
  .on("mouseout", function() { tooltip.style("display", "none"); })
  .on("mousemove", function(d) {
    var xPosition = d3.mouse(this)[0] - 15;
    var yPosition = d3.mouse(this)[1] - 25;
    tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
    tooltip.select("text").text(d.y);
  });


// Template: Draw legend
var legend = svg.selectAll(".legend")
  .data(colors)
  .enter().append("g")
  .attr("class", "legend")
  .attr("transform", function(d, i) { return "translate(30," + i * 19 + ")"; });
 
legend.append("rect")
  .attr("x", width - 18)
  .attr("width", 18)
  .attr("height", 18)
  .style("fill", function(d, i) {return colors.slice().reverse()[i];});
 
legend.append("text")
  .attr("x", width + 5)
  .attr("y", 9)
  .attr("dy", ".35em")
  .style("text-anchor", "start")
  .text(function(d, i) { 
// adapted from 4 returns to match our two datasets 
    switch (i) {
      case 0: return "Tweets About Latin American Migrants, Asylees and Immigrants";
      case 1: return "Tweets About the Wall";
        }
  });


// Template: Prep the tooltip bits, initial display is hidden
var tooltip = svg.append("g")
  .attr("class", "tooltip")
  .style("display", "none");
    
tooltip.append("rect")
  .attr("width", 30)
  .attr("height", 20)
  .attr("fill", "white")
  .style("opacity", 0.5);

tooltip.append("text")
  .attr("x", 15)
  .attr("dy", "1.2em")
  .style("text-anchor", "middle")
  .attr("font-size", "12px")
  .attr("font-weight", "bold");