// // VERSIONE 1:

// let gameStarted = false;

// // Funzione per generare numeri casuali da 1 a 10
// function generateRandomNumbers(count) {
// const numbers = [];
// for (let i = 0; i < count; i++) {
// numbers.push(Math.floor(Math.random() * 10) + 1);
// }
// return numbers;
// }

// // Funzione per verificare i numeri inseriti dall'utente
// function checkNumbers(numbers) {
// const guessedNumbers = [];
// for (let i = 0; i < numbers.length; i++) { let guessedNumber = parseInt(prompt("Inserisci il " + (i + 1) + "° numero:")); while (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 10) {
// alert("Inserisci solo numeri da 1 a 10.");
// guessedNumber = parseInt(prompt("Inserisci il " + (i + 1) + "° numero:"));
// }
// guessedNumbers.push(guessedNumber);
// }
// displayResult(numbers, guessedNumbers);
// }

// // Funzione per mostrare i risultati
// function displayResult(numbers, guessedNumbers) {
// const resultDiv = document.getElementById("result");
// const correctNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
// if (guessedNumbers.includes(numbers[i])) {
// correctNumbers.push(numbers[i]);
// }
// }
// resultDiv.innerHTML = "Hai indovinato " + correctNumbers.length + " numero/i: " + correctNumbers.join(", ");
// }

// // Funzione per avviare il gioco
// function startGame() {
// if (gameStarted) {
// return;
// }
// gameStarted = true;

// // Disabilita il bottone Start
// const startBtn = document.getElementById("start-btn");
// startBtn.disabled = true;

// const numbers = generateRandomNumbers(5);
// const numbersDiv = document.getElementById("numbers");
// numbersDiv.innerHTML = numbers.join(" ");

// // Timer di 30 secondi
// const timerDiv = document.getElementById("timer");
// let secondsLeft = 30;
// const timer = setInterval(function() {
//     secondsLeft--;
//     timerDiv.innerHTML = secondsLeft;
//     if (secondsLeft === 0) {
//         clearInterval(timer);
//         numbersDiv.innerHTML = "";
//         const resultDiv = document.getElementById("result");
//         resultDiv.innerHTML = "Inserisci i numeri che hai visto:";
//         setTimeout(function() {
//             checkNumbers(numbers);
//             // Riabilita il bottone Start
//             startBtn.disabled = false;
//             gameStarted = false;
//         }, 100);
//     }
// }, 1000);
// }

// // Aggiungi un event listener al bottone Start
// const startBtn = document.getElementById("start-btn");
// startBtn.addEventListener("click", function() {
// startGame();
// });

// // Avvia il gioco quando la pagina è pronta
// document.addEventListener("DOMContentLoaded", function(event) {
// // Nascondi i numeri e il risultato all'avvio
// const numbersDiv = document.getElementById("numbers");
// numbersDiv.innerHTML = "";
// const resultDiv = document.getElementById("result");
// resultDiv.innerHTML = "";
// });

// VERSIONE 2: 

// Definisco le variabili globali:
let gameStarted = false;
let levelSelected = false;
let level = "";
let numbersCount = 0;
let maxNumber = 0;

// Definisco le funzioni:

// Funzione per generare numeri casuali:
function generateRandomNumbers(count, max) {
const numbers = [];
for (let i = 0; i < count; i++) {
numbers.push(Math.floor(Math.random() * max) + 1);
}
return numbers;
}

// Funzione per verificare i numeri inseriti:
function checkNumbers(numbers) {
const guessedNumbers = [];
for (let i = 0; i < numbers.length; i++) { let guessedNumber = parseInt(prompt("Inserisci il " + (i + 1) + "° numero:")); while (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > maxNumber) {
alert("Inserisci solo numeri da 1 a " + maxNumber + ".");
guessedNumber = parseInt(prompt("Inserisci il " + (i + 1) + "° numero:"));
}
guessedNumbers.push(guessedNumber);
}
displayResult(numbers, guessedNumbers);
}

// Funzione per mostrare i risultati:
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

// Funzione per avviare il gioco:
function startGame() {
if (gameStarted) {
return;
}
gameStarted = true;

// Disabilita il bottone Start:
const startBtn = document.getElementById("start-btn");
startBtn.disabled = true;

// Disabilita gli altri bottoni di difficoltà:
const levelBtns = document.querySelectorAll(".level-btn");
for (let i = 0; i < levelBtns.length; i++) {
if (levelBtns[i].id !== level + "-btn") {
levelBtns[i].classList.add("disabled");
}
}

// Genera numeri casuali e mostrali:
const numbers = generateRandomNumbers(numbersCount, maxNumber);
const numbersDiv = document.getElementById("numbers");
numbersDiv.innerHTML = numbers.join(" ");

// Avvia il timer:
const timerDiv = document.getElementById("timer");
let secondsLeft = 30;
const timer = setInterval(function() {
secondsLeft--;
timerDiv.innerHTML = secondsLeft;
if (secondsLeft === 0) {
clearInterval(timer);
numbersDiv.innerHTML = "";

// Mostra il messaggio per inserire i numeri:
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Inserisci i numeri che hai visto:";

  // Verifica i numeri inseriti dall'utente:
  setTimeout(function() {
    checkNumbers(numbers);

    // Riabilita il bottone Start
    startBtn.disabled = false;
    gameStarted = false;
  }, 100);
}
}, 1000);
}

// Aggiungo gli event listener:

// Bottoni di difficoltà:
const easyBtn = document.getElementById("easy-btn");
easyBtn.addEventListener("click", function() {
levelSelected = true;
level = "easy";
numbersCount = 5;
maxNumber = 10;
easyBtn.classList.add("active");
mediumBtn.classList.remove("active");
hardBtn.classList.remove("active");
});

const mediumBtn = document.getElementById("medium-btn");
mediumBtn.addEventListener("click", function() {
levelSelected = true;
level = "medium";
numbersCount = 7;
maxNumber = 30;
easyBtn.classList.remove("active");
mediumBtn.classList.add("active");
hardBtn.classList.remove("active");
});

const hardBtn = document.getElementById("hard-btn");
hardBtn.addEventListener("click", function() {
levelSelected = true;
level = "hard";
numbersCount = 10;
maxNumber = 50;
easyBtn.classList.remove("active");
mediumBtn.classList.remove("active");
hardBtn.classList.add("active");
});

// Bottone Start:
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", function() {
if (!levelSelected) {
alert("Seleziona un livello di difficoltà.");
return;
}
startGame();
});

// Inizializza il gioco:
document.addEventListener("DOMContentLoaded", function(event) {
// Nascondi i numeri e il risultato all'inizio
const numbersDiv = document.getElementById("numbers");
numbersDiv.innerHTML = "";
const resultDiv = document.getElementById("result");
resultDiv.innerHTML = "";
});



