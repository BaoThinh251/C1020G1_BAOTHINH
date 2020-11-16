let check = false;
let countLetter = 0;
let countDoc = 0;

function checked(){
    do {
        let mail = document.getElementById("email");
        for(let i = 0;i < mail.length; i++){
            if(mail.charAt(i) === "@"){
                countLetter++;
                for(let j = i + 1;j < mail.length; j++){
                    if(mail.charAt(j) === "."){
                        countDoc++;
                    }
                }
            }
        } if(countLetter != 1 || countDoc < 1){
            alert("Email không đúng cú pháp!");
        } else {
            check = true;
            alert("!1432234121");
        }
    }while (!check);
}
