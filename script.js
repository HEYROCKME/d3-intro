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

// // // L3
// let dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

// let svgWidth = 500,
//   svgHeight = 300,
//   barPadding = 5,
//   barWidth = svgWidth / dataset.length;
// svg = d3
//   .select("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight)
//   .style("background", "skyblue");

// let barChart = svg
//   .selectAll("rect")
//   .data(dataset)
//   .enter()
//   .append("rect")
//   .attr("y", (d) => svgHeight - d)
//   .attr("height", (d) => d)
//   .attr("width", barWidth - barPadding)
//   .attr("transform", function (d, i) {
//     var translate = [barWidth * i, 0];
//     return "translate(" + translate + ")";
//   })
//   .attr("fill", "pink");

// let text = svg
//   .selectAll("text")
//   .data(dataset)
//   .enter()
//   .append("text")
//   .text((d) => d)
//   .attr("y", (d) => svgHeight - d - 2)
//   .attr("x", (d, i) => barWidth * i)
//   .attr("fill", "yellow");

// // L4

// let dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
// dataset = [1, 2, 3, 4, 5, 6];

// let svgWidth = 500,
//   svgHeight = 300,
//   barPadding = 5,
//   barWidth = svgWidth / dataset.length;
// svg = d3
//   .select("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight)
//   .style("background", "skyblue");

// let yScale = d3
//   .scaleLinear()
//   .domain([0, d3.max(dataset)])
//   .range([0, svgHeight]);

// let barChart = svg
//   .selectAll("rect")
//   .data(dataset)
//   .enter()
//   .append("rect")
//   .attr("y", (d) => svgHeight - yScale(d))
//   .attr("height", (d) => yScale(d))
//   .attr("width", barWidth - barPadding)
//   .attr("transform", function (d, i) {
//     var translate = [barWidth * i, 0];
//     return "translate(" + translate + ")";
//   })
//   .attr("fill", "pink");

// let text = svg
//   .selectAll("text")
//   .data(dataset)
//   .enter()
//   .append("text")
//   .text((d) => d)
//   .attr("y", (d) => svgHeight - yScale(d) * 0.5)
//   .attr("x", (d, i) => barWidth * i + barWidth * 0.5)
//   .attr("fill", "yellow");

// // lesson 5
