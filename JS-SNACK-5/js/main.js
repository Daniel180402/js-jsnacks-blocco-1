/**
 * 
    Crea un array vuoto.
    Chiedi per 6 volte all'utente di inserire un numero,
    se è dispari inseriscilo nell'array.
 * 
 */

const result = document.getElementById("result");
let usernumber;
let arrnumbers = [];

for(let i = 0; i < 6; i++){
    usernumber = parseInt(prompt("Enter a number"));
    if(usernumber % 2 == 0){
        arrnumbers.push(usernumber);
    }
}
console.log(arrnumbers);
result.innerHTML = "i numeri pari sono: " + arrnumbers;