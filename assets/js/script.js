//ON CODE LE SCRIPT PERMETTANT DE FAIRE FONCTIONNER LA CALCULATRICE

//On récupère le formulaire que l'on met dans une constante
const form = document.querySelector('form');
const display = document.querySelector('.calcDisplay');
//On ajoute un écouteur d'évènement à la soumission du formulaire
form.addEventListener('submit', (e) => {
e.preventDefault();
//On déclare trois variables qui récupèrent le contenu des formulaires
let firstNumber = e.target.firstNumber.value;
let symbol = e.target.symbol.value;
let secondNumber = e.target.secondNumber.value;

//On demande au scrip d'effectuer le calcul
let calc = eval(firstNumber + symbol + secondNumber);

// On affiche le résultat du calcul dans une alerte
// alert(firstNumber +' '+ symbol +' '+ secondNumber + ' = ' + calc);
// });

display.innerHTML = firstNumber +' '+ symbol +' '+ secondNumber + ' = ' + calc;
});

//ON CODE UN SCRIPT PERMETTANT D'AFFICHER ET DE FAIRE DISPARAITRE LA DIV

//On déclare les deux liens en tant que constante
const appear = document.querySelector('#appear');
const disappear = document.querySelector('#disappear');
const calculator = document.querySelector('.calculator');
//On supprime la classe hidden au clic sur le lien pour faire apparaître la calculatrice
appear.addEventListener('click', function(){
    calculator.classList.remove('hidden');
})

//On ajoute la classe hidden au clic sur le lien pour faire disparaître la calculatrice
disappear.addEventListener('click', function(){
    calculator.classList.add('hidden');
})

//FAIRE APPARAÎTRE DES INFORMATIONS AU SURVOL DES ELEMENTS

//On déclare les variables nécessaires à la création du script
const number1 = document.querySelector('#firstNumber');
const symb = document.querySelector('#symbol');
const number2 = document.querySelector('#secondNumber');
let information = document.querySelector('.information');

number1.addEventListener('mousemove', function(){
    information.textContent = 'Saisir un chiffre';
});

symbol.addEventListener('mousemove', function(){
    information.textContent = 'Sélectionner un opérateur : +, -, *, /';
});

number2.addEventListener('mousemove', function(){
    information.textContent = 'Saisir un chiffre';
});

