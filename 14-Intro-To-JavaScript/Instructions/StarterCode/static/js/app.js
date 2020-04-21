var tableData = data;

// inside for this "for each" loop getting the key value and creating a td; and then the cell.html allows
// us to add values values between tr values we just added. 
function tableDisplay(ufoSightings) {
  var tbody = d3.select("tbody");
  ufoSightings.forEach((ufocities) => {
    var row = tbody.append("tr");
    Object.entries(ufocities).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.html(value);
    });
  });
};
function deleteTbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};
console.log(tableData);
tableDisplay(tableData);
var button = d3.select("#filter-btn");
button.on("click", function(event) {
    d3.event.preventDefault();
    deleteTbody();
    var ufoinfo = d3.select("#datetime").property("value");
    
    if (ufoinfo.trim() === "" ) {var finaldata = tableData;} 
        // otherwise, display the filtered dataset  
    else {var finaldata = tableData.filter(ufoSighting => 
      ufoSighting.datetime === ufoinfo.trim());
  };  
    console.log(finaldata);
    tableDisplay(finaldata);
  });
  