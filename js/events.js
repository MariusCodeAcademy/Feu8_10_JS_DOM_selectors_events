'use strict';
console.log('events.js file was loaded');

// nusitaikymai
const mainH1El = document.getElementById('mainTitle');

// nusitaikti i el kuriam reikalingas ivykio pasiklausymas
// uzdeti ivykio pasiklausyma
// aprasyti kas vyks ivykus ivykiui.

// nusitaikti i el kuriam reikalingas ivykio pasiklausymas
const btn1El = document.getElementById('btn1');
console.log('btn1El ===', btn1El);
// uzdeti ivykio pasiklausyma
// El.addEventListener('koks ivykis', eventHandlerFuncions)
btn1El.addEventListener('click', () => {
  // aprasyti kas vyks ivykus ivykiui.
  console.count('paspaudei');
  document.title = 'Events happening';
  mainH1El.textContent = 'Events happening';
});

btn1El.addEventListener('mouseenter', () => {
  console.count('pelyte on');
  btn1El.style.fontSize = '45px';
});
btn1El.addEventListener('mouseleave', () => {
  console.count('pelyte off');
  btn1El.style.fontSize = '16px';
});

// <h2 class="articleTitle">This is title</h2>
// kai paspaudziam ant h2 elemento pakeisti jo
// texta didziosiom raidem
