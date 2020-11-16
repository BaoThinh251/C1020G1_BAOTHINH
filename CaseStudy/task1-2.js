let discount = document.getElementById("discount");
let typeroom = document.getElementById("typeofroom");
let rentday = document.getElementById("rentdays");
let name = document.getElementById("name");
let id = document.getElementById("I");
let age = document.getElementById("birth");
let mail = document.getElementById("email");
let addr = document.getElementById("address");
let cusrank = document.getElementById("cusrank");
let roomgrade = document.getElementById("roomgrade");
let addcus = document.getElementById("+cus");

let result = 0;
function submit() {
    result = typeroom.value * rentday.value * (1 - discount.value/ 100);
    document.getElementById("nameDisplay").innerHTML = name.value;
    document.getElementById("discountDisplay").innerHTML = discount.value;
    document.getElementById("rentdayDisplay").innerHTML = rentday.value;
    document.getElementById("typeroomDisplay").innerHTML = typeroom.value;
    document.getElementById("cost").innerHTML = result;
    document.getElementById("ID").innerHTML = id.value;
    document.getElementById("bDay").innerHTML = age.value;
    document.getElementById("mail").innerHTML = mail.value;
    document.getElementById("addr").innerHTML = addr.value;
    document.getElementById("cusRanking").innerHTML = cusrank.value;
    document.getElementById("roomGrad").innerHTML = roomgrade.value;
    document.getElementById("+Cust").innerHTML = addcus.value;
}
