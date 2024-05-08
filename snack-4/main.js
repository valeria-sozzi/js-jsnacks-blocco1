//in un array sono contenuti i nomi degli invitati alla festa, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa

//creo l'array con la lista degli invitati
const nameList = ['valeria', 'roberto', 'pina', 'piero', 'agnese','marco']

//chiedo all'utente il suo nome
let nomeUtente = prompt('inserisci il tuo nome')

//controllo se il nome compare nella lista e comunico l'accesso
for (let i = 0; i < nameList.length; i++){

    if (nomeUtente === nameList[i]) {
        document.getElementById('accesso').innerHTML=`Benvenuto alla festa ${nomeUtente}` 
        break
    } else {
        document.getElementById('accesso').innerHTML=`Mi dispiace ${nomeUtente} non sei stato invitato alla festa`
    }
}
