//L'uente inserisce due parole in successione con due prompt. il software stampa prima la parola piu corta e poi la parola piu lunga

const first_word = prompt('inserisci una parola')
console.log(first_word);
const second_word = prompt('inserisci una nuova parola')
console.log(second_word);

const wordElement = document.getElementById('word')

if (first_word.length > second_word.length){
    wordElement.insertAdjacentHTML('beforeEnd',`la parola più corta è ${second_word} e la parola più lunga è ${first_word}`)
} else if (second_word.length > first_word.length){
    wordElement.insertAdjacentHTML('beforeEnd',`la parola più corta è ${first_word} e la parola più lunga è ${second_word}`)
} else if(second_word.length == first_word.length){
    wordElement.insertAdjacentHTML('beforeEnd',`${first_word} e ${second_word} hanno la stessa lunghezza`)
}
    
