// import data
const tableData = data;
// reference html table using d3
var tbody = d3.select("tbody");


function buildTable(data){
    //clearing the table
    tbody.html("");
//loop thru each field
data.forEach((dataRow) => {
    //append row to table
    let row = tbody.append("tr");
    console.log(row);
     //loop thru each field and add each value as table cell td
    Object.values(dataRow).forEach((val)=> {
        //append row to table
        let cell = row.append("td");
        //add value from object to cell
        cell.text(val);
    });
 });
}

function handleClick(){
    //grab datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //check date entered and filtering by it
    if (date){
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //rebuild table using filtered data
    buildTable(filteredData);
}


//attach even to listen for button
d3.selectAll("#filter-btn").on("click", handleClick);
//build table when page loads
buildTable(tableData);