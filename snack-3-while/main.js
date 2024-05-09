//il software deve chiedere per 10 volte all'utente di inserire un numero. il programma stampa la somma di tutti i numeri inseriti

let numbersUtente;
somma = 0
let i=0

while (i<10){
    numbersUtente = parseInt(prompt('inserisci un numero'))
    somma = somma + numbersUtente;
    i++
}

document.getElementById('somma').innerHTML= `La somma dei numeri inseriti è: ${somma}`