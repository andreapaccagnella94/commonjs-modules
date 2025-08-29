console.log('hi');


/*
1.  Importa la tua funzione da names.js
2.  Importa la tua funzione da hobbies.js
3.  Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. 
    All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
*/

import identity from "./name.js"
import hobby from "./hobbies.js"

/* vedo come funzionano le funzioni create
const tryFunction = identity('Andrea', 'Paccagnella')
console.log(tryFunction); 

// prova a destrutturare direttamente
const tryFunction = identity('Andrea', 'Paccagnella')
console.log(tryFunction);

const tryHobby = hobby('Calcio', 'Pokemon', 'Marvel Snap')
console.log(tryHobby)

*/

// provo a dare dei valori alle costanti per vedere un risultato credo
const firstName = 'Andrea'
const lastName = 'Paccagnella'
const hobbyOne = 'Calcio'
const hobbyTwo = 'Pokemon'
const hobbyThree = 'Marvel Snap'

const Andrea = people()
console.log(Andrea);



// funzione 
function people() {
    return {
        fullName: identity(firstName, lastName),
        hobbies: hobby(hobbyOne, hobbyTwo, hobbyThree)
    }
}  