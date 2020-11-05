let dis = document.getElementById("discount");
let rent = document.getElementById("rentdays");
let typeroom = document.getElementById("typeofroom");
let result;
function submit() {
    result = (1-parseInt(dis.value)/100) * (parseInt(rent.value)) * (parseInt(typeroom.value));
    alert(result + '$');
}