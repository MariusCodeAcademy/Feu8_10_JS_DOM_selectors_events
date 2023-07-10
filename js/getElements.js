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
const listEl = document.getElementById('list');
console.log('listEl ===', listEl);
// document.querySelector ir paziureti ka gaunam
const qListEl = document.querySelector('#list');
console.log('qListEl ===', qListEl);
// is to ka gavom gauti visus vaikinius elementus

const listChilds = qListEl.children;
console.log('listChilds ===', listChilds);
const listChildren = qListEl.querySelectorAll('.listEl');
console.log('listChildren ===', listChildren);

listChildren[0].style.color = 'pink';
// kai turim kolekcija elementu turim naudoti cikla
listChildren.forEach((liEl) => {
  liEl.style.fontWeight = 'bold';
  liEl.style.color = 'red';
  // darasyti zodi " - item"
  let dabartinisTextas = liEl.textContent;
  let galutinisTextas = dabartinisTextas + ' - item';
  liEl.textContent = galutinisTextas;
});
