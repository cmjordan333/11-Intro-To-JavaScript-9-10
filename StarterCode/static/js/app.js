// from data.js
var tableData = data;

const buildTable = (buildData) => {
  var tbody = d3.select("tbody")
  tbody.html("");
  buildData.forEach(function (UFO) {
    var row = tbody.append("tr");
    Object.values(UFO).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

var submit = d3.select("#submit");
function handleClick() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var filteredData = tableData.filter(element => element.datetime === inputElement.property("value"));
  buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(data)