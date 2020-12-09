
function addtime(){
	alert("time added");
}

function removetime(){
	alert("time removed");
}   

function availability(){
	var avaliable = document.getElementsByName('avaliable');
	if(avaliable[0].checked){
			alert("avaliable");
	}
	else{
		alert("not avaliable");
	}
}

function decline(){
	var status = document.getElementById("Status");
	status.innerHTML = "Declined";
}

function conform(){
	var status = document.getElementById("Status");
	status.innerHTML = "Conformed";
}

function settimeam(){
	var time_am_hr = document.getElementById("time-am-hr-id").value;
	var time_am_mm = document.getElementById("time-am-mm-id").value;
	if(time_am_hr == "" || time_am_hr == null || time_am_mm == "" || time_am_mm == null) {
		alert("Enter time");
	}
	else{
	alert("time is seted for " + time_am_hr + "hr" + time_am_mm + "mm");
	console.log("time is seted for " + time_am_hr + "hr" + time_am_mm + "mm");
	}
}

function settimepm(){
	var time_pm_hr = document.getElementById("time-pm-hr-id").value;
	var time_pm_mm = document.getElementById("time-pm-mm-id").value;
	if(time_pm_hr == "" || time_pm_hr == null || time_pm_mm == "" || time_pm_mm == null) {
		alert("Enter time");
	}
	else{
	alert("time is seted for " + time_pm_hr + "hr" + time_pm_mm + "mm");
	console.log("time is seted for " + time_pm_hr + "hr" + time_pm_mm + "mm");
	}
}

//offers js

var products = [];

function pushproducts(){
	var product = document.getElementById("products-id").value;
	products.push(product);
	var products_display = "";
	for(var i = 0 ; i < products.lenght ; i++){
		products_display = products_display + products[i] + "<br/>";
	}
	document.getElementById("product_name").innerHTML = products_display;
}

function addorderbtn(){
	document.querySelector(".pop-window").style.display = "flex";
	// var user =	document.getElementById("user-name-id").value;
	// var product =	document.getElementById("product-name-id").value;
	// var qunatity =	document.getElementById("qunatity-id").value;
	// var status =	document.getElementById("status-id").value;
	// var table = document.getElementById("order-list-table-id")[0];

	// var newrow = table.insertRow(table.rows.lenght);
	// var cell1 = newrow.insertCell(0);
	// var cell2 = newrow.insertCell(1);
	// var cell3 = newrow.insertCell(2);
	// var cell4 = newrow.insertCell(3);

	// cell1.innerHTML = user;
	// cell2.innerHTML = product;
	// cell3.innerHTML = qunatity;
	// cell4.innerHTML = status;

}

function onformsubmit(){
	var formData = readFormData();
	insertNewRecord(formData);
	document.querySelector(".pop-window").style.display = "none";
}


function readFormData() {
    var formData = {};
    formData["user"] = document.getElementById("user-name-id").value;
    formData["product"] = document.getElementById("product-name-id").value;
    formData["qunatity"] = document.getElementById("qunatity-id").value;
    formData["status"] = document.getElementById("status-id").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("order-list-table-id").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.user;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.product;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qunatity;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.status;
}