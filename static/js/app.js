// var data defined in data.js file

let tableData = data;

let tbody = d3.select("tbody");

function tablemaker(data) {
  data.forEach(d => {
    let row = tbody.append("tr");
    Object.entries(d).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
}

tablemaker(tableData);

let button = d3.select("#filter-btn");

button.on("click", function() {
  d3.event.preventDefault();
  tbody.html("");
  let date = d3.select("#datetime").property("value");
  let state = d3.select("#state").property("value");
  let city = d3.select("#city").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");

  let filteredData = tableData;

  if (date) {
    filteredData = filteredData.filter(d => d.datetime === date);
  }
  if (state) {
    filteredData = filteredData.filter(d => d.state === state);
  }
  if (city) {
    filteredData = filteredData.filter(d => d.city === city);
  }
  if (country) {
    filteredData = filteredData.filter(d => d.country === country);
  }
  if (shape) {
    filteredData = filteredData.filter(d => d.shape === shape);
  }
  tablemaker(filteredData);
});
