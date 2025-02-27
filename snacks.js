// Snack 1

// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.

function sum(num1, num2) {
    return num1 + num2;
}

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const anonymSum = function (num1, num2) {
    return num1 + num2;
};

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

const arrowSum = (num1, num2) => num1 + num2;

// Snack 2

// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = (num) => num * num;

// Snack 3

// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

function eseguiOperazione(num1, num2, operazione) {
    return operazione(num1, num2);
}

// Snack 4

// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(time) {
    return function () {
        setTimeout(() => {
            console.log('Tempo scaduto!');
        }, time);
    };
}

// Snack 5

// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

function stampaOgniSecondo(message) {
    setInterval(() => {
        console.log(message);
    }, 1000);
}

// Snack 6

// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(time) {
    let counter = 0;
    return function () {
        setInterval(() => {
            counter++;
            console.log(counter);
        }, time);
    };
}

// Snack 7

// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(message, interval, stopTime) {
    const printMessage = setInterval(() => {
        console.log(message);
    }, interval);

    setTimeout(() => {
        clearInterval(printMessage);
    }, stopTime);
}
