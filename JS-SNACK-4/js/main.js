/**
 *
    In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 *
 */

const invitenames = ["marco", "pino", "edoardo", "vincenzo", "carlo", "vladimir", "daniel"];
const username = prompt("Inserisci il tuo nome!").toLowerCase().trim();
let found = false;
let result = document.getElementById("result");

console.log(username);

for(let i = 0; i < invitenames.length; i++){
    if(username == invitenames[i]){
        found = true;
    }
}

if(found){
    console.log("trovato");
    result.innerHTML = "Il tuo nome è in lista!";
}
else{
    console.log("non trovato");
    result.innerHTML = "Il tuo nome non è in lista, mi dispiace";
}