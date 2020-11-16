let mail = document.getElementById("email");
let id = document.getElementById("I");
let rent = document.getElementById("rentdays");
let addcus = document.getElementById("+cus");
let filterEmail = /\S+@\S+\.\S+/;
let filterCMND = /^[\d]{8,8}$/;
function checked(){
    if(!filterCMND.test(id.value)){
        alert("Vui lòng nhập đúng định dạng CMND!");
    } else {
        alert("Đã đúng định dạng!");
    }
    if(!filterEmail.test(mail.value)) {
        alert("Vui lòng nhập đúng định dạng Email!");
    } else {
        alert("Đã đúng định dạng!");
    }
    if(rent.value < 0){
        alert("Số ngày thuê phải là số nguyên dương!")
    } else {
        alert("Đã đúng!")
    }
    if(addcus.value < 0){
        alert("Số khách đi kèm phải là số nguyên dương!")
    } else {
        alert("Đã đúng!")
    }

}