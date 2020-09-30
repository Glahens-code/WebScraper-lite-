var employeePromise = d3.csv("employee.csv")

var succFCN= function(employees)
     {console.log("found employees", employees)
     draw(employees)}

var failFCN= function(err)
     {console.error("didn't find employees", error)}

employeePromise.then(succFCN,failFCN)

var draw = function(employeedata)
{
   
var rows = d3.select("#employeetable tbody")
.selectAll("tr")
.data(employeedata)
.enter()
.append("tr")

rows.append("td")
   .text(function(person){return person.FirstName;})

rows.append("td")
   .text(function(person){return person.LastName;})



rows.append("td")
   .text(function(person){return person.Title;})



rows.append("td")
   .text(function(person){return person.email;})


}