'use strict';
console.log('prac.js file was loaded');

//
// padaryti kad kiekvieno colors saraso li
// elemento fono spalva butu tokia kaip parasyta li texte

//                  ^textContent^
// <li class="colLi">yellow</li>

// gauti visus li elementus aleMasyve.
let visiLiEl = document.querySelectorAll('.colors .colLi');
// visiLiEl = document.getElementsByClassName('colLi');
console.log('visiLiEl ===', visiLiEl);
// sukti per juos cikla

// visiLiEl.forEach((oneLiEl) => {
//   // console.log(oneLiEl);
//   // paimti spalva esancia elemento content
//   const elSpalva = oneLiEl.textContent;
//   // ir ideti ja i backgroud color
//   oneLiEl.style.backgroundColor = elSpalva;
// });

for (let oneLiEl of visiLiEl) {
  // console.log(oneLiEl);
  // paimti spalva esancia elemento content
  const elSpalva = oneLiEl.textContent;
  // ir ideti ja i backgroud color
  oneLiEl.style.backgroundColor = elSpalva;
}

// paimti visas colors elemento spalvas is
// li teksto, surasyti i viena stringa ir
// iterpti kaip paskutini li elementa su
// visu spalvu sarasu atskirtu kableliais
let colorsString = '';
visiLiEl.forEach((oneLiEl) => {
  const elSpalva = oneLiEl.textContent;
  colorsString = colorsString + elSpalva + ', ';
});
console.log('colorsString ===', colorsString);
const colorsUlEl = document.querySelector('.colors');
console.log('colorsUlEl ===', colorsUlEl);

const newLiEl = document.createElement('li');
newLiEl.textContent = colorsString.slice(0, -2) + '.';
colorsUlEl.append(newLiEl);

/// <button id="onOff">turn the dark mode off </button>
// paspaudus mygtuka jis keicia savo teksto zodeli off
// i on ir atvirksciai
