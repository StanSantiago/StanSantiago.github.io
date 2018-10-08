function printTable(){
  //Clears screen of prior outputs
  $( "#table_here" ).empty();
  var m, b, xMin, xMax, content;
  //Recieves each variable from the fields
  m = document.getElementById("m").value;
  b = document.getElementById("b").value;
  xMin = document.getElementById("xMin").value;
  xMax = document.getElementById("xMax").value;

  //Checks validity of the input
  if(isNaN(m) || isNaN(b) || isNaN(xMin) || isNaN(xMax)){
    content = "<p>Please input numbers</p>";
  }else if((Math.abs(m) > 1000) || (Math.abs(b) > 1000) || (Math.abs(xMin) > 1000) || (Math.abs(xMax) > 1000)){
    content = "<p>Please use values between -1000 and 1000</p>";
  }else if (Number(xMin) > Number(xMax)) {
    content = "<p>x minimum must be less than x maximum</p>";
  }else if ((Number(xMax) - Number(xMin)) > 9) {
    content = "<p>Range of x must be no greater than 10</p>";
  }
  //Fills content variable with a table class, and calculates the contents of said table
  else{
    content = "<table class = \"table table-hover\"><thread><tr><th>x</th><th>y</th></tr></thread><tbody>";
    for(i = Number(xMin); i <= Number(xMax); i++){
      content += '<tr><th>' + i + '</th><th>' + (i * Number(m) + parseInt(b)) + '</th></tr>';
    }
    content += "</tbody></table>";
  }

  //appends error or table to index.html
  $('#table_here').append(content);
}
