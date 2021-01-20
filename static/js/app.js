// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// loading whole data
tableData.forEach((item) => {
    var row = tbody.append('tr');
    Object.entries(item).forEach(([key, value]) => {
        var tData = row.append('td');
        tData.text(value);
    });
});

// getting input date and filter button
var dateTime = d3.select("#datetime");
var filterBtn = d3.select("#filter-btn");

//searching by date
dateTime.on("change", function() {
	var inputDate = d3.event.target.value;
    
    //matching date
	var matchedDate = tableData.filter(info => info.datetime == inputDate);

	//rendering table
    var tbody = d3.select("tbody");
    
	//clearing previous existing table
    tbody.html("");

	matchedDate.forEach(element=>{
		var row = tbody.append("tr");
		row.append("td").text(element.datetime);
		row.append("td").text(element.city);
		row.append("td").text(element.country);
		row.append("td").text(element.state);
		row.append("td").text(element.shape);
		row.append("td").text(element.durationMinutes);
		row.append("td").text(element.comments);
	})
})