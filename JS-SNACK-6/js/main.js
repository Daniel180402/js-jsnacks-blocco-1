/**
 *
    Chiedi un numero di 7 cifre all'utente
    e calcola la somma di tutte le cifre che compongono il numero.
 *
 */

const usernumber = prompt("inserisci un numero di 7 cifre");
let sum = 0;

for(let i = 0; i < usernumber.length ; i++){
    sum += parseInt(usernumber.charAt(i));
}

console.log(sum);
const result = document.getElementById("result").innerHTML = sum;