//"Bienvenidos al Generador de Naipes de Jose Lorant. Por favor recarga la pagina para que puedas generar otro distinto");

let numbers = ['A','2','3', '4', '5', '6', '7','8','9','10','J','Q','K',];

let simbols = ['♠','♣','♥','♦',];

let numIndex = Math.floor(Math.random() * numbers.length);
let simIndex = Math.floor(Math.random() * simbols.length);

document.querySelector('.number').innerHTML = numbers[numIndex];
document.querySelector('#one').innerHTML = simbols[simIndex];
document.querySelector('#two').innerHTML = simbols[simIndex];

console.log (numbers[numIndex]);
console.log (simbols[simIndex]);
