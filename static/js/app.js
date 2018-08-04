// from data.js
var tableData = data;

// Select the submit button
var dateFilter = d3.select("#filter-btn");

// Select table body element from HTML
var tblBody = d3.select("tbody").html("");

// Filter function
dateFilter.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Selecting the input element
    var inputElement = d3.select("#datetime");
    // Selecting the input value
    var dateTime = inputElement.property("value");
    // Compare value in the inputElement to value in the data.js
    console.log("Date time to filter through")
    console.log(dateTime);
    let filteredData = tableData.filter(tableData => tableData.datetime == dateTime);
    console.log("Filtered lists")
    console.log(filteredData);
    // Function to add rows of values to the table 
    filteredData.forEach(function(appending){
        var row = tblBody.append("tr");
        Object.entries(appending).forEach(function([key,value]){
            var cell = row.append("td");
            cell.text(value);
        });
    });
});


