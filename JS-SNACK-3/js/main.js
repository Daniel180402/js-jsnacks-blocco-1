/**
 * 
    Il software deve chiedere per 10 volte all'utente di inserire un numero.
    Il programma stampa la somma di tutti i numeri inseriti.
 */

const result = document.getElementById("result");
let somma = 0;
let arr = [];

for(let i = 0; i < 10; i++){
    arr.push(parseInt(prompt("Enter a number")));
}
console.log(arr);

for(let i=0; i < 10; i++){
    somma = somma + arr[i]
}
console.log(somma);
result.innerHTML = "La somma dei numeri inseriti è " + somma;
    