'use strict';
console.log('practice.js file was loaded');

// paspaudus  <button id="btn2" class="button">add p</button>
// sukurti ir ideti nauja p i <div id="paraDiv">

// taikomes
const btn2El = document.getElementById('btn2');
const paraDivEl = document.getElementById('paraDiv');
console.log(btn2El, paraDivEl);

// klausomes paspaudimo ant mygtuko
// btn2El.addEventListener('click', () => {
//   console.log('pasp');
//   addPEl();
// });
btn2El.addEventListener('click', addPEl);

function addPEl() {
  // suukurti nauja p el
  const pEl = document.createElement('p');
  // prideti i ji text
  pEl.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, itaque.';
  // patalpinti ji paraDivEl (apend)
  paraDivEl.append(pEl);
}

// <button id="addColor" paspaudimu
const addColorBtnEl = document.getElementById('addColor');
const colorsUlEl = document.getElementById('colors');
console.log('colorsUlEl ===', colorsUlEl);
console.log('addColorBtnEl ===', addColorBtnEl);
// prideti nauja spalva i spalvu ul
addColorBtnEl.addEventListener('click', () => {
  const liEl = document.createElement('li');
  liEl.textContent = 'Tomato';
  colorsUlEl.append(liEl);
});
