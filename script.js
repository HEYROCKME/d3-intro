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

// // lesson 5 Making acxess

// let data = [80, 100, 56, 120, 180, 30, 40, 0, 150];
// let svgWidth = 600;
// let svgHeight = 400;

// let svg = d3.select("svg").attr("width", svgWidth).attr("height", svgHeight);

// let xScale = d3
//   .scaleLinear()
//   .domain([0, d3.max(data)])
//   .range([0, svgWidth]);

// let yScale = d3
//   .scaleLinear()
//   .domain([0, d3.max(data)])
//   .range([svgHeight, 0]);

// let x_axis = d3.axisBottom().scale(xScale);
// let y_axis = d3.axisLeft().scale(yScale);

// svg.append("g").attr("transform", "translate(50, -20)").call(y_axis);

// let x_axisTranslate = svgHeight - 20;

// svg
//   .append("g")
//   .attr("transform", `translate(50, ${x_axisTranslate})`)
//   .call(x_axis);

// // Lesson 6 creating SVGs

// let svgWidth = 600,
//   svgHeight = 500;

// let svg = d3
//   .select("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight)
//   .attr("class", "svg-container")
//   .style("background", "salmon");

// let line = svg
//   .append("line")
//   .attr("x1", 100)
//   .attr("x2", 500)
//   .attr("y1", 50)
//   .attr("y2", 200)
//   .attr("stroke", "skyblue")
//   .attr("stroke-width", 10);

// let rectangle = svg
//   .append("rect")
//   .attr("x", 100)
//   .attr("y", 100)
//   .attr("width", 200)
//   .attr("height", 100)
//   .attr("fill", "pink");

// let circle = svg
//   .append("circle")
//   .attr("cx", 200)
//   .attr("cy", 300)
//   .attr("r", 80)
//   .attr("fill", "palegreen");

// // Dataset with objects

// let data = [
//   { platform: 'Android', percentage: 92.11 },
//   { platform: 'Windows', percentage: 36.69 },
//   { platform: 'iOS', percentage: 13.09 },
// ]

// // SVG setup
// let svgWidth = 500,
//   svgHeight = 300,
//   radius = Math.min(svgWidth, svgHeight) / 2

// let svg = d3.select('svg').attr('width', svgWidth).attr('height', svgHeight)

// let g = svg.append('g').attr('transform', `translate(${radius}, ${radius})`)

// let color = d3.scaleOrdinal(d3.schemeCategory10)

// let pie = d3.pie().value((d) => d.percentage)

// let path = d3.arc().outerRadius(radius).innerRadius(25)

// let arc = g.selectAll('arc').data(pie(data)).enter().append('g')

// arc
//   .append('path')
//   .attr('d', path)
//   .attr('fill', (d) => {
//     return color(d.data.percentage)
//   })

// let label = d3.arc().outerRadius(radius).innerRadius(0)

// arc
//   .append('text')
//   .attr('transform', (d) => `translate(${label.centroid(d)})`)
//   .attr('text-anchor', 'middle')
//   .text(function (d) {
//     return d.data.platform + ':' + d.data.percentage + '%'
//   })

//API URL
const api =
  'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01'

/** Loading data from the API after the DOM Content has been Loaded */
document.addEventListener('DOMContentLoaded', (e) => {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      let parsedData = parseData(data)
      drawChart(parsedData)
    })
    .catch((err) => console.log(err))
})
/** Parse date into key pairs */
const parseData = (data) => {
  let arr = []
  for (let entry in data.bpi) {
    arr.push({
      date: new Date(entry),
      value: data.bpi[entry],
    })
  }

  return arr
}

/**
 * Create a chart with D3
 */

const drawChart = (data) => {
  let svgWidth = 600,
    svgHeight = 400
  let margin = { top: 20, right: 20, bottom: 30, left: 50 }
  let width = svgWidth - margin.left - margin.right
  let height = svgHeight - margin.top - margin.bottom

  let svg = d3.select('svg').attr('width', svgWidth).attr('height', svgHeight)

  let g = svg
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.right})`)

  let x = d3.scaleTime().rangeRound([0, width])
  let y = d3.scaleTime().rangeRound([height, 0])

  let line = d3
    .line()
    .x((d) => x(d.date))
    .y((d) => y(d.value))
  x.domain(d3.extent(data, (d) => d.date))
  y.domain(d3.extent(data, (d) => d.value))

  g.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(x))
    .select('.domain')
    .remove()

  g.append('g')
    .call(d3.axisLeft(y))
    .append('text')
    .attr('fill', 'black')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '0.71em')
    .attr('text-anchor', 'end')
    .text('Price ($)')

  g.append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', 'salmon')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 5)
    .attr('d', line)
}
