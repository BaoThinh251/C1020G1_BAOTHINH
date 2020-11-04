let discount = document.getElementById(discount);
let rentdays = document.getElementById(rentdays);
let typeofroom = document.getElementById(typeofroom);
let result;
function submit() {
    result = parseInt(rentdays.value) * parseInt(typeofroom.value) * (1-parseInt(discount.value)/100)
    alert(result)
}