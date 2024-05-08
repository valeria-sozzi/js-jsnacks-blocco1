//l'utente inserisce due numeri in successione, con due prompt, il software stampa il maggiore
const firstNumber = parseInt(prompt('inserisci un numero'))
console.log(firstNumber);
const secondNumber = parseInt(prompt('inserisci un numero'))
console.log(secondNumber);

if (firstNumber > secondNumber){
    console.log(`il maggiore è ${firstNumber}`);
} else{
    console.log(`il maggiore è ${secondNumber}`);
}