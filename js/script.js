let gameStarted = false;

// Funzione per generare numeri casuali da 1 a 10
function generateRandomNumbers(count) {
const numbers = [];
for (let i = 0; i < count; i++) {
numbers.push(Math.floor(Math.random() * 10) + 1);
}
return numbers;
}

// Funzione per verificare i numeri inseriti dall'utente
function checkNumbers(numbers) {
const guessedNumbers = [];
for (let i = 0; i < numbers.length; i++) { let guessedNumber = parseInt(prompt("Inserisci il " + (i + 1) + "° numero:")); while (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 10) {
alert("Inserisci solo numeri da 1 a 10.");
guessedNumber = parseInt(prompt("Inserisci il " + (i + 1) + "° numero:"));
}
guessedNumbers.push(guessedNumber);
}
displayResult(numbers, guessedNumbers);
}

// Funzione per mostrare i risultati
function displayResult(numbers, guessedNumbers) {
const resultDiv = document.getElementById("result");
const correctNumbers = [];
for (let i = 0; i < numbers.length; i++) {
if (guessedNumbers.includes(numbers[i])) {
correctNumbers.push(numbers[i]);
}
}
resultDiv.innerHTML = "Hai indovinato " + correctNumbers.length + " numero/i: " + correctNumbers.join(", ");
}

// Funzione per avviare il gioco
function startGame() {
if (gameStarted) {
return;
}
gameStarted = true;

// Disabilita il bottone Start
const startBtn = document.getElementById("start-btn");
startBtn.disabled = true;

const numbers = generateRandomNumbers(5);
const numbersDiv = document.getElementById("numbers");
numbersDiv.innerHTML = numbers.join(" ");

// Timer di 30 secondi
const timerDiv = document.getElementById("timer");
let secondsLeft = 30;
const timer = setInterval(function() {
    secondsLeft--;
    timerDiv.innerHTML = secondsLeft;
    if (secondsLeft === 0) {
        clearInterval(timer);
        numbersDiv.innerHTML = "";
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "Inserisci i numeri che hai visto:";
        setTimeout(function() {
            checkNumbers(numbers);
            // Riabilita il bottone Start
            startBtn.disabled = false;
            gameStarted = false;
        }, 100);
    }
}, 1000);
}

// Aggiungi un event listener al bottone Start
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", function() {
startGame();
});

// Avvia il gioco quando la pagina è pronta
document.addEventListener("DOMContentLoaded", function(event) {
// Nascondi i numeri e il risultato all'avvio
const numbersDiv = document.getElementById("numbers");
numbersDiv.innerHTML = "";
const resultDiv = document.getElementById("result");
resultDiv.innerHTML = "";
});