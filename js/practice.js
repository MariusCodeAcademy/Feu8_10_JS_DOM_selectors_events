'use strict';
console.log('practice.js file was loaded');

// paspaudus  <button id="btn2" class="button">add p</button>
// sukurti ir ideti nauja p i <div id="paraDiv">

// taikomes
const btn2El = document.getElementById('btn2');
const paraDivEl = document.getElementById('paraDiv');
console.log(btn2El, paraDivEl);

// klausomes paspaudimo ant mygtuko
btn2El.addEventListener('click', () => {
  console.log('pasp');
  addPEl();
});

function addPEl() {
  // suukurti nauja p el
  // prideti i ji text
  // patalpinti ji paraDivEl (apend)
}
