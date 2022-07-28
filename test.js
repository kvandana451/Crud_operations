var row = null;
function Submit() {
  let data = retriveFormData();
  let readData = readingDataFromLocalStorage(data);
  if (row == null) {
    insert(readData);
    msg.innerHTML = "data inserted !!!";
  } else {
    update();
    msg.innerHTML = "data updated!!!";
  }
  document.getElementById("form").reset();
}
function retriveFormData() {
  let inputName = document.getElementById("name").value;

  let inputAge = document.getElementById("age").value;

  let inputDepartment = document.getElementById("department").value;

  let inputBloodGroup = document.getElementById("blood_group").value;

  let inputAddress = document.getElementById("address").value;

  let inputContact = document.getElementById("contact").value;

  let arr = [
    inputName,
    inputAge,
    inputDepartment,
    inputBloodGroup,
    inputAddress,
    inputContact,
  ];
  return arr;
}

//READ
function readingDataFromLocalStorage(data) {
  //store data in localstorage
  console.log(data[0]);
  let storeName = localStorage.setItem("Name", data[0]);
  let storeAge = localStorage.setItem("Age", data[1]);
  let storeDepartment = localStorage.setItem("Department", data[2]);
  let storeBloodGroup = localStorage.setItem("BloodGroup", data[3]);
  let storeAddress = localStorage.setItem("Address", data[4]);
  let storeContact = localStorage.setItem("Contact", data[5]);

  //getting data from local to table
  let getName = localStorage.getItem("Name", storeName);
  let getAge = localStorage.getItem("Age", storeAge);
  let getDepartment = localStorage.getItem("Department", storeDepartment);
  let getBloodGroup = localStorage.getItem("BloodGroup", storeBloodGroup);
  let getAddress = localStorage.getItem("Address", storeAddress);
  let getContact = localStorage.getItem("Contact", storeContact);
  let arr = [
    getName,
    getAge,
    getDepartment,
    getBloodGroup,
    getAddress,
    getContact,
  ];

  return arr;
}

//INSERT
function insert(readData) {
  var row = table.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);
  cell1.innerHTML = readData[0];
  cell2.innerHTML = readData[1];
  cell3.innerHTML = readData[2];
  cell4.innerHTML = readData[3];
  cell5.innerHTML = readData[4];
  cell6.innerHTML = readData[5];
  row.insertCell(
    6
  ).innerHTML = `<button class="mt-2"  onclick="edit(this)">edit</button><br><button class="mt-2" onclick="remove(this)">delete</button>`;
}
//EDIT

function edit(val) {
  row = val.parentElement.parentElement;
  document.getElementById("name").value = row.cells[0].innerHTML;
  document.getElementById("age").value = row.cells[1].innerHTML;
  document.getElementById("department").value = row.cells[2].innerHTML;
  document.getElementById("blood_group").value = row.cells[3].innerHTML;
  document.getElementById("address").value = row.cells[4].innerHTML;
  document.getElementById("contact").value = row.cells[5].innerHTML;
}

function update() {
  row.cells[0].innerHTML = document.getElementById("name").value;
  row.cells[1].innerHTML = document.getElementById("age").value;
  row.cells[2].innerHTML = document.getElementById("department").value;
  row.cells[3].innerHTML = document.getElementById("blood_group").value;
  row.cells[4].innerHTML = document.getElementById("address").value;
  row.cells[5].innerHTML = document.getElementById("contact").value;
  row = null;
}

function remove(td) {
  var confirm_msg = confirm("Do you want to delete the Entire row?");
  if (confirm_msg == true) {
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
  }
}
