//"Bienvenidos al Generador de Naipes de Jose Lorant. Por favor recarga la pagina para que puedas generar otro distinto");

let numbers = ['A','2','3', '4', '5', '6', '7','8','9','10','J','Q','K',];

let simbols = ['♠','♣','♥','♦',];

var numIndex = Math.floor(Math.random() * numbers.length);
var simIndex = Math.floor(Math.random() * simbols.length);

document.querySelector('.number').innerHTML = numbers[numIndex];
document.querySelector('.sim').innerHTML = simbols[simIndex];
document.querySelector('.simbols').innerHTML = simbols[simIndex];

var one = document.getElementsByClassName('number');
var two = document.getElementsByClassName('sim');
var three = document.getElementsByClassName('simbols');

console.log (numbers[numIndex]);
console.log (simbols[simIndex]);

 if (simbols[simIndex] == '♥' || simbols[simIndex] == '♦'){
    one[0].style.color = 'red';
    two[0].style.color = 'red';
    three[0].style.color = 'red';
}