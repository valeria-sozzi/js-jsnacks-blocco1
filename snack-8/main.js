//chiedi un numero di 4 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero 

//chiedi all'utente un numero di 4 cifre
let numeroUtente = parseInt(prompt('inserisci un numero di 4 cifre'))

//controlla che il numero sia effettivamente di 4 cifre 
if (numeroUtente.lenght < 4){
    alert('hai inserito un numero inferiore alle 4 cifre');
} else if (numeroUtente.lenght > 4){
    alert('hai inserito un numero superiore alle 4 cifre');
}
//scomponi il numero indicato dall'utente 
let numeroScomposto = numeroUtente.value
//fai la somma dei numeri
let somma = 0;

for (let i=0; i<numeroScomposto.lenght; i++){
    somma= somma + numeroScomposto[i]
    console.log(somma);
}