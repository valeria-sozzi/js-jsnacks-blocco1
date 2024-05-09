//chiedi un numero di 4 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero 

//chiedi all'utente un numero di 4 cifre
let numeroUtente = prompt('inserisci un numero di 4 cifre')

let somma = 0;

for (let i=0; i < numeroUtente.length; i++){

    let numeroScomposto = parseInt(numeroUtente[i])
    somma = somma + numeroScomposto
    
}

console.log(somma);
