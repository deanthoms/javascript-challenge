// from data.js
var tableData = data;

// YOUR CODE HERE!

// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and then adds new rows of data 
// for each UFO sighting.

// console.log(tableData);

// Select the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");


button.on("click", function(filterData) {
    
    // Clear Table
    tbody.selectAll("*").remove();
   
    // Select input element and get the raw html
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the input log to the console
    console.log(inputValue);

    // Filter the data to the records that equal the input value
    var filteredData = tableData.filter(record => record.datetime === inputValue);

    // Add the records to the screen    
    filteredData.forEach((addData) => {
        var row = tbody.append("tr");
        Object.entries(addData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
        });
});

