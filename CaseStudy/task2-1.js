let dis = document.getElementById("discount");
let rent = document.getElementById("rentdays");
let typeroom = document.getElementById("typeofroom");
let id = document.getElementById("I");
let age = document.getElementById("birth");
let mail = document.getElementById("email");
let addr = document.getElementById("address");
let cusrank = document.getElementById("cusrank");
let roomgrade = document.getElementById("roomgrade");
let addcus = document.getElementById("+cus");
let result;
function submit() {
    result = (1-parseInt(dis.value)/100) * (parseInt(rent.value)) * (parseInt(typeroom.value));
    document.getElementById("cost").innerHTML = result;
    document.getElementById("ID").innerHTML = id.value;
    document.getElementById("bday").innerHTML = age.value;
    document.getElementById("mail").innerHTML = mail.value;
    document.getElementById("addr").innerHTML = addr.value;
    document.getElementById("cusranking").innerHTML = cusrank.value;
    document.getElementById("roomgrad").innerHTML = roomgrade.value;
    document.getElementById("+cust").innerHTML = addcus.value;
}