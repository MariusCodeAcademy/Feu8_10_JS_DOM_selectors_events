'use strict';
console.log('onOff.js file was loaded');

/// <button id="onOff">turn the dark mode off </button>
// paspaudus mygtuka jis keicia savo teksto zodeli off
// i on ir atvirksciai

// <button id="onOff">turn the dark mode <span>off</span></button>

// taikomes
const btn1 = document.getElementById('onOff');
console.log('btn1 ===', btn1);
const onOffEl = btn1.firstElementChild;
console.log('onOffEl ===', onOffEl);
// 1. pirmas buda prisiristi prie dabartines reiksmes

// btn1.addEventListener('click', () => {
//   console.log('on off');
//   // pasiziureti kokia dabar yra reiksme - off ar on
//   let dabartineReiksme = onOffEl.textContent;
//   console.log('dabartineReiksme ===', dabartineReiksme);
//   // atitinkamai pakeist i priesinga
//   if (dabartineReiksme === 'off') {
//     // pakeisti i on
//     // dabartineReiksme = 'on'; // neveiks nes keiciam tik stringa ne elemento text content
//     // console.log('dabartineReiksme ===', dabartineReiksme);
//     onOffEl.textContent = 'on';
//   } else {
//     // pakeisti i off
//     onOffEl.textContent = 'off';
//   }
// });

// 2. budas su globaliu kintamuoju arba primitive STATE
let isDarkModeOn = false;

btn1.addEventListener('click', () => {
  if (isDarkModeOn === false) {
    // onOffEl.textContent = 'on';
    isDarkModeOn = true;
  } else {
    // onOffEl.textContent = 'off';
    isDarkModeOn = false;
  }

  onOffEl.textContent = isDarkModeOn === false ? 'off' : 'on';
  document.body.style.backgroundColor =
    isDarkModeOn === true ? '#333' : 'white';
  document.body.style.color = isDarkModeOn === true ? 'white' : '#333';
});
