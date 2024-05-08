//stampa il cubo dei primi n numeri, dove n è un numero indicato dall'utente

//chiedere all'utente un numero
const numberUtente = parseInt(prompt('inserire di quanti N numeri si vuole sapereil cubo'))

let listNumbers = []

listNumbers.length = numberUtente

for (let i = 0; i < listNumbers.length; i++){
    let cubo = Math.pow(i,3)
    console.log(cubo);
}