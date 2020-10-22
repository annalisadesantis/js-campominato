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

// Il computer deve generare 16 numeri casuali tra 1 e 100.
var bombe = [];
for (var i = 0; i < 16; i++) {
    var numeri_random = Math.floor(Math.random() * 100) + 1;
    bombe.push(numeri_random);
}
console.log(bombe);

// In seguito deve chiedere all’utente di inserire un numero alla
// volta, sempre compreso tra 1 e 100.

var numero_utente = parseInt(prompt("Inserisci un numero da 1 a 100"));

while (!(numero_utente <= 100 && numero_utente >= 1)){
    numero_utente = parseInt(prompt("Inserisci un numero tra 1 a 100"));
}
console.log(numero_utente);

// Se il numero è presente nella lista dei numeri generati, la partita
// termina, altrimenti si continua chiedendo all’utente un altro
// numero.

var numero_trovato = false;

for (var i = 0; i < bombe.length; i++) {

    if (numero_utente == bombe[i]) {
        numero_trovato = true;
    }
}

if (numero_trovato) {
    console.log("Hai perso");
}else {
    console.log("Hai vinto");
}
