'use strict';
console.log('onOff.js file was loaded');

/// <button id="onOff">turn the dark mode off </button>
// paspaudus mygtuka jis keicia savo teksto zodeli off
// i on ir atvirksciai

// <button id="onOff">turn the dark mode <span>off</span></button>

// pirmas buda prisiristi prie dabartines reiksmes
// taikomes
const btn1 = document.getElementById('onOff');
console.log('btn1 ===', btn1);
const onOffEl = btn1.firstElementChild;
console.log('onOffEl ===', onOffEl);

btn1.addEventListener('click', () => {
  console.log('on off');
  // pasiziureti kokia dabar yra reiksme - off ar on
  const dabartineReiksme = onOffEl.textContent;
  console.log('dabartineReiksme ===', dabartineReiksme);
  // atitinkamai pakeist i priesinga
  if (dabartineReiksme === 'off') {
    // pakeisti i on
    onOffEl.textContent = 'on';
  } else {
    // pakeisti i off
  }
});
