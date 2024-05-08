//il software deve chiedere per 10 volte all'utente di inserire un numero. il programma stampa la somma di tutti i numeri inseriti
// let firstNumber = parseInt(prompt('inserisci un numero'))
// console.log(firstNumber);
// let secondNumber = parseInt(prompt('inserisci un numero'))
// console.log(secondNumber);
// let thirdNumber = parseInt(prompt('inserisci un numero'))
// console.log(thirdNumber);
// let fourNumber = parseInt(prompt('inserisci un numero'))
// console.log(fourNumber);
// let fiveNumber = parseInt(prompt('inserisci un numero'))
// console.log(fiveNumber);
// let sixNumber = parseInt(prompt('inserisci un numero'))
// console.log(sixNumber);
// let sevenNumber = parseInt(prompt('inserisci un numero'))
// console.log(sevenNumber);
// let eightNumber = parseInt(prompt('inserisci un numero'))
// console.log(eightNumber);
// let nineNumber = parseInt(prompt('inserisci un numero'))
// console.log(nineNumber);
// let tenNumber = parseInt(prompt('inserisci un numero'))
// console.log(tenNumber);


// let sommaNumbers = firstNumber + secondNumber + thirdNumber + fourNumber + fiveNumber + sixNumber + sevenNumber + eightNumber + nineNumber + tenNumber

// document.getElementById('somma').innerHTML= `La somma dei numeri inseriti è: ${sommaNumbers}`

let sommaNumbers,numbersUtente;
somma = 0

for (let i = 0; i<10; i++){
    numbersUtente = parseInt(prompt('inserisci un numero'))
    somma = somma + numbersUtente;
}

document.getElementById('somma').innerHTML= `La somma dei numeri inseriti è: ${somma}`