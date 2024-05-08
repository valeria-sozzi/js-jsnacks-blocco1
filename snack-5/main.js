//crea un array vuoto, chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array

//creo un array vuota
const dispari = []

//creo un ciclo per chiedere all'utente 6 volte di inserire un numero
for (let i=0; i<6; i++){
    let numbers = parseInt(prompt('inserisci un numero'))

    if (numbers % 2 !== 0){
        dispari.push(numbers)
        console.log(dispari);
    }
}