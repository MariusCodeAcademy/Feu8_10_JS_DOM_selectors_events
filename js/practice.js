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
