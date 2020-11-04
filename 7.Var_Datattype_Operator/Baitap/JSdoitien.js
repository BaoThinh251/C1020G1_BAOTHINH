function convert() {
    let f = document.getElementById("fromcur").value;
    let t = document.getElementById("tocur").value;
    let amount = document.getElementById("amount").value;
    let result;
    if (f === t) result = amount;
    else if (f === "USD" && t === "VND") result = amount * a;
    else (f === "VND" && t === "USD") result = amount / a;
    alert(result);
}





