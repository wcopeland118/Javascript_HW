// var data defined in data.js file

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

tablemaker(data);

var button = d3.select("#filter-btn");

button.on("click", function() {
  tbody.html("");
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  var filteredData = data.filter(d => d.datetime === inputValue);
  tablemaker(filteredData);
});
