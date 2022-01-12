// d3.select("h1")
//   .style("color", "salmon")
//   .attr("class", "heading")
//   .text("D3.js setup");

// d3.select("body").append("p").text("Paragraph");
// d3.select("body").append("p").text("Paragraph1");
// d3.select("body").append("p").text("Paragraph2");
// d3.select("body").append("p").text("Paragraph3");

// d3.selectAll("p").style("color", "goldenrod");

/// /// L2

// let dataset = "hey ho let's go!".split(" ");

// d3.select("body")
//   .selectAll("p")
//   .data(dataset)
//   .enter()
//   .append("p")
//   // .text("hey ho");
//   .text(function (d) {
//     return d;
//   });

// console.log(svg);

// // L3
let dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

let svgWidth = 500,
  svgHeight = 300,
  barPadding = 5,
  barWidth = svgWidth / dataset.length;
svg = d3.select("svg").attr("width", svgWidth).attr("height", svgHeight);

let barChart = svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("y", (d) => svgHeight - d)
  .attr("height", (d) => d)
  .attr("width", barWidth - barPadding)
  .attr("transform", function (d, i) {
    var translate = [barWidth * i, 0];
    return "translate(" + translate + ")";
  });
