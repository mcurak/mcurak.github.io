br=0;
function addNewTech(){
  var table = document.getElementById("techList");
  if(br==0){
  var row = table.insertRow();
  const cell = document.createElement("td");
  cell.innerHTML = document.getElementById("user_input").value;
  row.appendChild(cell);
}else{

  var row = table.rows[ table.rows.length - 1 ];
  var columnNumber = row.cells.length;
  if (columnNumber>=2){
    var row = document.getElementById("techList").insertRow(-1);
    const cell = document.createElement("td");
    cell.innerHTML = document.getElementById("user_input").value;
    row.appendChild(cell);
    tableBody.appendChild(row);

     techList.appendChild(tableBody);
     document.body.appendChild(techList);

  }else{
    const cell = document.createElement("td");
    cell.innerHTML = document.getElementById("user_input").value;
    row.appendChild(cell);
    tableBody.appendChild(row);

    techList.appendChild(tableBody);
    document.body.appendChild(techList);
}
}
br++;
  }


function clearInput(){
      var getValue= document.getElementById("user_input");
        if (getValue.value !="") {
            getValue.value = "";
        }
 }


function deleteAll (){
  var tableRowCount = 0;
  var table = document.getElementById("techList");
  var rowCount = table.rows.length;
  for (var i = tableRowCount; i < rowCount; i++) {
    table.deleteRow(tableRowCount);
}
 br=0;
}
