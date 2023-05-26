console.log('JS OK');

/*  TRACCIA

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.

*/

const target = document.getElementById('target');

const distance = parseInt(prompt('Inserisci il nuomero di km che vuoi percorrere. Per Esempio: 54', '54'));
console.log('distance: ' + distance);

const age = parseInt(prompt('Inserisci la tua età per calcolare lo sconto', '17'));
console.log('age: ' + age);


// Validazione elementi inseriti

if((typeof distance, typeof age) === 'number' && distance >= 0 && age > 0){

    console.log('Validazione completata correttamente');

    // Calcolo prezzo biglietto

    const price = (distance * 0.21);
    console.log('price: ' + price);

    // Calcolo lo sconto in base all età

    let discount = 0;

    if(age < 18){
        discount = 20;
        console.log('Sei minorenne, lo sconto è del',discount,'%.');
    } else if(age >= 65){
        discount = 40;
        console.log('Sei over 65, lo sconto è del',discount,'%.');
    }

    // Calcolo il prezzo finale scontato

    discountedPrice = (price - ((discount / 100) * price)).toFixed(2);
    console.log('Prezzo scontato: ' + discountedPrice);

    // Inserisco il prezzo scontato in pagina

    target.innerText = `Il tuo biglietto costa: ${discountedPrice}€`;
} else{
    console.log('Error: Please enter only valid numbers!');
}

