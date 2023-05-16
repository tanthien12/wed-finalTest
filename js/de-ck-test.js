function checkMSV(){
    var msv = document.getElementById("txt_msv").value;
    var check_error_msv = document.getElementById("error_msv");
    var rexge_msv = /^[0-9]{2,}/;

    if(msv == "" || msv == null){
        check_error_msv.innerHTML = "Không được bỏ trống!";
    }else if(!rexge_msv.test(msv)){
        check_error_msv.innerHTML = "Không hợp lệ!"
    }else{
        check_error_msv.innerHTML = "";
        return msv;
    }
}
function checkName(){
    var name = document.getElementById("txt_name").value;
    var check_error_name = document.getElementById("error_name");
    var rexge_name = /^([A-Z][A-Za-z]+[\s]*){1,}/gm;

    if(name == "" || name == null){
        check_error_name.innerHTML = "Không được bỏ trống!";
    }else if(!rexge_name.test(name)){
        check_error_name.innerHTML = "Không hợp lệ!"
    }else{
        check_error_name.innerHTML = "";
        return name;
    }
}

function checkEmail(){
    var email = document.getElementById("txt_email").value;
    var check_error_email = document.getElementById("error_email");
    var rexge_email = /^[a-zA-Z0-9._-]+@iuh.edu.vn/;

    if(email == "" || email == null){
        check_error_email.innerHTML = "Không được bỏ trống!";
    }else if(!rexge_email.test(email)){
        check_error_email.innerHTML = "Không hợp lệ!"
    }else{
        check_error_email.innerHTML = "";
        return email;
    }
}
function checkPhone(){
    var phone = document.getElementById("txt_phone").value;
    var check_error_phone = document.getElementById("error_phone");
    var rexge_phone = /^[0-9]{10}/;

    if(phone == "" || phone == null){
        check_error_phone.innerHTML = "Không được bỏ trống!";
    }else if(!rexge_phone.test(phone)){
        check_error_phone.innerHTML = "Không hợp lệ!"
    }else{
        check_error_phone.innerHTML = "";
        return phone;
    }
}

var i=0;
function insertTable(){
    var msv = document.getElementById("txt_msv").value;
    var name = document.getElementById("txt_name").value;
    var date = document.getElementById("txt_date").value;
    var email = document.getElementById("txt_email").value;
    var phone = document.getElementById("txt_phone").value;

    var table = document.getElementById("myTable"); //myTable là id của table
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = ++i;
    cell2.innerHTML = msv;
    cell3.innerHTML = name;
    cell4.innerHTML = date;
    cell5.innerHTML = email;
    cell6.innerHTML = phone;

}
function insertTable(){
    var msv = document.getElementById("txt_msv").value;
    var name = document.getElementById("txt_name").value;
    var date = document.getElementById("txt_date").value;
    var email = document.getElementById("txt_email").value;
    var phone = document.getElementById("txt_phone").value;

    var table = document.getElementById("myTable"); //myTable là id của table
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = msv;
    cell2.innerHTML = name;
    cell3.innerHTML = date;
    cell4.innerHTML = email;
    cell5.innerHTML = phone;

}
