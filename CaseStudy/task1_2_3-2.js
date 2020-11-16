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
let result = 0;
let choose;
let temp = 0;
let totalpay;
function submit() {
    document.getElementById("cost").innerHTML = result;
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
}
function nameEdit() {
    document.getElementById("nameDisplay").innerHTML = prompt("Nhập thông tin để sửa: ");
}
function idEdit() {
    document.getElementById("ID").innerHTML = prompt("Nhập thông tin để sửa: ");
}
function birthEdit() {
    document.getElementById("bDay").innerHTML = prompt("Nhập thông tin để sửa: ");
}
function emailEdit() {
    document.getElementById("mail").innerHTML = prompt("Nhập thông tin để sửa: ");
}
function disEdit() {
    document.getElementById("discountDisplay").innerHTML = prompt("Nhập thông tin để sửa: ");
}
function addCusEdit() {
    document.getElementById("+Cust").innerHTML = prompt("Nhập thông tin để sửa: ");
}
function rentDayEdit() {
    document.getElementById("rentdayDisplay").innerHTML = prompt("Nhập thông tin để sửa: ");
}
function typeRoomEdit() {
    document.getElementById("typeroomDisplay").innerHTML = choose = parseInt(prompt("1.Villa" + "\n" + "2.House" + "\n" + "3.Room"));
    switch (choose) {
        case 1:
            document.getElementById("typeroomDisplay").innerHTML = "500$";
            break;
        case 2:
            document.getElementById("typeroomDisplay").innerHTML = "300$";
            break;
        case 3:
            document.getElementById("typeroomDisplay").innerHTML = "100$";
            break;
        default:
            alert("Failed");
            document.getElementById("typeroomDisplay").innerHTML = "Lỗi";
            break;
    }
}
function addEdit() {
    document.getElementById("addr").innerHTML = choose = parseInt(prompt("1.Đà Nẵng" + "\n" + "2.Huế" + "\n" + "3.Quảng Nam" + "\n" + "4.Khác"));
    switch (choose) {
        case 1:
            document.getElementById("addr").innerHTML = "Đà Nẵng";
            break;
        case 2:
            document.getElementById("addr").innerHTML = "Huế";
            break;
        case 3:
            document.getElementById("addr").innerHTML = "Quảng Nam";
            break;
        case 4:
            document.getElementById("addr").innerHTML = "Khác";
            break;
        default:
            alert("Failed");
            document.getElementById("addr").innerHTML = "Lỗi";
            break;
    }
}
function cusRankEdit() {
    document.getElementById("cusRanking").innerHTML = choose = parseInt(prompt("1.Diamond" +
        "\n" + "2.Platinum" + "\n" + "3.Gold" + "\n" + "4.Silver" + "\n" + "5.Member"));
    switch (choose) {
        case 1:
            document.getElementById("cusRanking").innerHTML = "Diamond";
            break;
        case 2:
            document.getElementById("cusRanking").innerHTML = "Platinum";
            break;
        case 3:
            document.getElementById("cusRanking").innerHTML = "Gold";
            break;
        case 4:
            document.getElementById("cusRanking").innerHTML = "Silver";
            break;
        case 5:
            document.getElementById("cusRanking").innerHTML = "Member";
            break;
        default:
            alert("Failed");
            document.getElementById("cusRanking").innerHTML = "Lỗi";
            break;
    }
}
function roomGradeEdit() {
    document.getElementById("roomGrad").innerHTML = choose = parseInt(prompt("1.Vip" +
        "\n" + "2.Business" + "\n" + "3.Normal"));
    switch (choose) {
        case 1:
            document.getElementById("roomGrad").innerHTML = "Vip";
            break;
        case 2:
            document.getElementById("roomGrad").innerHTML = "Business";
            break;
        case 3:
            document.getElementById("roomGrad").innerHTML = "Normal";
            break;
        default:
            alert("Failed");
            document.getElementById("roomGrad").innerHTML = "Lỗi";
            break;
        }
}
function Cal() {
    temp = 0;
    if(addr === "Đà Nẵng"){
        temp += 20;
    }   else if (addr === "Huế"){
        temp += 10;
    }   else if (addr === "Quảng Nam"){
        temp += 5;
    }
    if(cusRanking === "Diamond"){
        temp += 15;
    }   else if (addr === "Platinum"){
        temp += 10;
    }   else if (addr === "Gold") {
        temp += 5;
        }else if    (addr === "Silver"){
        temp += 2;
    }   else if (addr === "Member"){
        temp += 5;
    }
    if(rent >= 7){
        temp += 30;
    }   else if (rent >= 5){
        temp += 20;
    }   else if (rent >= 2){
        temp += 10;
    }
    totalpay = typeroom.value * rent.value * (1 - dis.value/100) - temp;
    document.getElementById("cost").innerHTML = totalpay;
}
