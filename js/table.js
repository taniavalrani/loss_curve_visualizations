var table = d3.select("#table").append("table");
var header = table.append("thead").append("tr");
header
        .selectAll("th")
        // .data([document.getElementById("t1"), document.getElementById("t2"), document.getElementById("t3"), document.getElementById("t4")])
        .data(["Title 1", "Title 2", "Title 3", "Title 4"])
        .enter()
        .append("th")
        .text(function(d) { return d; });
        

function updateTableVis(myArray){
        // try to changee the h3
        console.log("hello")
    console.log(document.getElementById("t2"));

            var tablebody = table.append("tbody");
            rows = tablebody
                    .selectAll("tr")
                    .data(myArray);
}