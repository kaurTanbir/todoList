function addList(myTable) {
    var table = document.getElementById(myTable);
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var text =document.getElementById('txt1').value;

    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.name="chkbox[]";
    cell1.appendChild(element1);


    var cell2 = row.insertCell(1);
    var element2 = document.createElement("input");
    element2.type = "text";
    element2.style.width="100%";
    element2.name = "txtbox[]";
    element2.value=text;
    cell2.appendChild(element2);
    
    var cell3 = row.insertCell(2);
    var element3 = document.createElement("img");
    element3.type = "img";
    element3.style.width="20%";
    element3.name = "dropdown";
    element3.src = "./images/dropdown.png";
    cell3.appendChild(element3);

    var cell4 = row.insertCell(3);
    var element4 = document.createElement("progress");
    element4.type = "progress";
    element4.style.width="20%";
    element4.name = "progress";
    cell4.appendChild(element4);

    document.getElementById('txt1').value=" ";
    document.getElementById('pTotal').innerHTML= rowCount + 1;
}
