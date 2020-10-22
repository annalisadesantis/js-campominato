// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla
// volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita
// termina, altrimenti si continua chiedendo all’utente un altro
// numero.
// La partita termina quando il giocatore inserisce un numero
// “vietato” o raggiunge il numero massimo possibile di numeri
// consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero
// consentito.
// BONUS: all’inizio il software richiede anche una difficoltà
// all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con
// difficoltà 2=> tra 1 e 50

// Creo degli array e delle variabili di supporto
var lista_mine = [];
var lista_utente = [];
var numBombe = 16;
var maxBombe = 100;
var minBombe = 1;
var maxPoint = maxBombe - numBombe;

// Il computer deve generare 16 numeri casuali tra 1 e 100.
while (lista_mine.length < numBombe){
    var numeri_random = Math.floor(Math.random() * 100) + 1;

    // controllo se il numero generato è già presente dentro l'array
    if (lista_mine.includes(numeri_random) == false ){
        lista_mine.push(numeri_random);
    }
}

console.log("Questi sono i numeri mine: " + lista_mine);

// In seguito deve chiedere all’utente di inserire un numero alla
// volta, sempre compreso tra 1 e 100.
var bomba_trovata = false;

do{
    // Chiedo il numero all'utente
    var numero_utente = parseInt(prompt("Inserisci un numero da 1 a 100"));

    // Verifico se il valore inserito è un numero o no
    if(isNaN (numero_utente)){
        alert("Inserisci un numero");
    }

    // Verifico se il numero inserito dall'utente è tra 1 e 100
    if(!(numero_utente <= maxBombe && numero_utente >= minBombe)){
        alert("Inserisci un numero da 1 a 100");
    }

    // Verifico se il numero utente è già presente nell'array mine
    if (lista_mine.includes(numero_utente) == true) {

        bomba_trovata = true;
        alert("Hai perso! " + " Hai totalizzato: " + lista_utente.length + " punti ");

    // Verifico se il numero utente è già presente nell'array utente
    }else if (lista_utente.includes(numero_utente) == false) {

        lista_utente.push(numero_utente);

    }else{
        // Creo un alert per informare l'utente che l'ultimo numero inserito lo avevo già inserito
        alert("Questo numero lo avevi già inserito");
    }

    // Creiamo la condizione per restare nel ciclo
    // la bomba non è stata ancora bomba_trovata
    // Il numero di numeri inseriti dall'utente non deve superare 84
} while(bomba_trovata == false && lista_utente.length < maxPoint);

console.log("Questi sono i numeri scelti da te: " + lista_utente);
console.log("Hai totalizzato: " + lista_utente.length + " punti");


// Comunichiamo all'utente la vittoria nel caso in cui ha inserito 84 numeri che non erano mine
if(lista_utente.length == maxPoint){
    alert("Hai vinto! " + " Hai totalizzato: " + lista_utente.length + " punti")
}
