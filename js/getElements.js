'use strict';
console.log('getElements.js file was loaded');

//
const mainH1El = document.getElementById('mainTitle');
console.log('mainH1El ===', mainH1El);
// mainH1El - nuoroda i DOM esanti h1 elementa
mainH1El.textContent = 'Pakeiciau';

// praktiskai nenaudojamas
const pText = document.getElementsByClassName('text');
console.log('pText ===', pText);

// pText - html kolekcija
pText[0].style.color = 'tomato';
pText[1].style.color = 'tomato';
//document.querySelectorAll(CSS selector)
const pTextSelector = document.querySelectorAll('.text');
console.log('pTextSelector ===', pTextSelector);
pTextSelector[0].style.color = 'blue';

//  nusitaikyti i <ul id="list">
// su document.getElementById paziureti ka gaunam
// document.querySelector ir paziureti ka gaunam
// is to ka gavom gauti visus vaikinius elementus
