/**
 * 
    L'utente inserisce due parole in successione, con due prompt.
    Il software stampa prima la parola più corta, poi la parola più lunga.
 */

const word1 = prompt("Inserisci la prima parola");
const word2 = prompt("Inserisci la seconda parola");
const result = document.getElementById("longer-word");

if(word1.length > word2.length){
    console.log("prima parola piu lunga");
    result.innerHTML = "La prima parola è più lunga"
}
else if(word1.length < word2.length){
    console.log("seconda parola piu lunga");
    result.innerHTML = "La seconda parola è più lunga"
}
else{
    console.log("le parole hanno la stessa lunghezza");
    result.innerHTML = "Le parole hanno la stessa lunghezza"
}