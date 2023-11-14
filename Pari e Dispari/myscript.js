'use strict'
function pariDispari () {
 const sceltaUtente = prompt('Pari o Dispari?');
 console.log (sceltaUtente);

 if ( sceltaUtente === "Pari") {
    console.log ("Sei nel team pari")
 }

 else if ( sceltaUtente === "Dispari") {
    console.log (" Sei nel team dispari")
 }

 else {
    console.log("Forse hai sbagliato a scrivere ")
 }

 const lancioNumerOGiocatore = Math.floor(Math.random() * 5) + 1;
console.log (lancioNumerOGiocatore);

const lancioNumerOComputer = Math.floor(Math.random() * 5) + 1;
console.log (lancioNumerOComputer);

const totaleNumeri = lancioNumerOGiocatore + lancioNumerOComputer;
console.log("Il totale dei numeri è:", totaleNumeri);

if (totaleNumeri % 2 === 0 ) {
    console.log(" Ha vinto pari")
 }else {
    console.log ("Ha vinto dispari ")
 }


}



pariDispari()