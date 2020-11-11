let name = document.getElementById("name");
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
    if(rent < 1){
        result = typeroom.value * rent.value * (1-dis/100) - addr.value - cusrank.value;
    } else if(rent < 4){
        result = typeroom.value * rent.value * (1-dis/100) - addr.value - cusrank.value - 10;
    } else if(rent < 7){
        result = typeroom.value * rent.value * (1-dis/100) - addr.value - cusrank.value - 20;
    } else {
        result = typeroom.value * rent.value * (1-dis/100) - addr.value - cusrank.value - 30;
    }
    document.getElementById("nameDisplay").innerHTML = name.value;
    document.getElementById("discountDisplay").innerHTML = dis.value;
    document.getElementById("rentdayDisplay").innerHTML = rent.value;
    document.getElementById("typeroomDisplay").innerHTML = typeroom.value;
    document.getElementById("cost").innerHTML = result;
    document.getElementById("ID").innerHTML = id.value;
    document.getElementById("bDay").innerHTML = age.value;
    document.getElementById("mail").innerHTML = mail.value;
    document.getElementById("addr").innerHTML = addr.value;
    document.getElementById("cusRanking").innerHTML = cusrank.value;
    document.getElementById("roomGrad").innerHTML = roomgrade.value;
    document.getElementById("+Cust").innerHTML = addcus.value;

}function reset() {

}