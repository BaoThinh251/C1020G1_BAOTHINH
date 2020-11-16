let name = document.getElementById("name");
let tempName = "";
function checked() {
    for(let i = 0; i < name.value.length; i++){
        if(name.value.charAt(i) === " " && name.value.charAt(i+1) === " " ){
            continue;
        } if(i === 0 || name.value.charAt(i-1) === " "){
            tempName += name.value.charAt(i).toUpperCase();
            continue;
        }tempName += name.value.charAt(i);
    } document.getElementById("nameDisplay").innerHTML = tempName.trim();
}
