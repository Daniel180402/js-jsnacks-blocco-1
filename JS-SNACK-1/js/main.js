/**
 * L'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */

const number1 = parseInt(prompt("Inserisci il primo numero!"));
const number2 = parseInt(prompt("Inserisci il secondo numero!"));
const result = document.getElementById("bigger-number");

if(number1 > number2){
    result.innerHTML = "Il primo numero è più grande";
}
else if(number2 > number1){
    result.innerHTML = "Il secondo numero è più grande";
}
else{
    result.innerHTML = "I numeri sono uguali";
}