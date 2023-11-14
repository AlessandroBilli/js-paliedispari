'use strict'
function parolaPalindroma () {
let parolaUtente = prompt('Inserisci parola e scopri se è palindroma')
console.log (parolaUtente)
let parolaInvertita="";

for (let i = parolaUtente.length - 1; i >= 0; i--) {
    parolaInvertita += parolaUtente[i];

    

    
} 
console.log (parolaInvertita)


if (parolaInvertita === parolaUtente) {
    
    alert("La parola è palindroma");
}
 else if(parolaInvertita !== parolaUtente) {
    alert("Mi dispiace la parola non è palindroma");

    
}

}


parolaPalindroma()