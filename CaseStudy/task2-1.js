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
if(rent < 1){
    result = typeroom.value * rent.value * (1-dis/100) - addr.value - cusrank.value;
} else if(rent < 4){
    result = typeroom.value * rent.value * (1-dis/100) - addr.value - cusrank.value - 10;
} else if(rent < 7){
    result = typeroom.value * rent.value * (1-dis/100) - addr.value - cusrank.value - 20;
} else {
    result = typeroom.value * rent.value * (1-dis/100) - addr.value - cusrank.value - 30;
}
function submit() {
    document.getElementById("discountdisplay").innerHTML = dis.value;
    document.getElementById("rentdaydisplay").innerHTML = rent.value;
    document.getElementById("typeroomdisplay").innerHTML = typeroom.value;
    document.getElementById("cost").innerHTML = result;
    document.getElementById("ID").innerHTML = id.value;
    document.getElementById("bday").innerHTML = age.value;
    document.getElementById("mail").innerHTML = mail.value;
    document.getElementById("addr").innerHTML = addr.value;
    document.getElementById("cusranking").innerHTML = cusrank.value;
    document.getElementById("roomgrad").innerHTML = roomgrade.value;
    document.getElementById("+cust").innerHTML = addcus.value;

}function reset() {

}