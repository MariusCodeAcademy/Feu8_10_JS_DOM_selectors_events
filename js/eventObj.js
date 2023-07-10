'use strict';
console.log('eventObj.js file was loaded');

// istrinti li el kai paspaudziam x

const delBtn1 = document.getElementById('del1');
console.log('delBtn1 ===', delBtn1);

// kiekviena karti ivykkus ivykiui mes gaunam specialu ivykio objekta
delBtn1.addEventListener('click', (event) => {
  // console.log('event ===', event);
  // el kuris iskviete eventa yra event.target
  // console.log('event.target ===', event.target);
  // const liEl = delBtn1.parentElement;
  // console.log('liEl ===', liEl);
  // liEl.remove();
});

// uzdeti visiems mygtukams saraso viduje ivykio pasiklausyma
const listBnts = document.querySelectorAll('#list .delete');
console.log('listBnts ===', listBnts);

listBnts.forEach((btnEl) => {
  btnEl.addEventListener('click', (event) => {
    // tevinis el
    const liEl = btnEl.parentElement;
    // istrinti
    liEl.remove();
  });
});

// paspaudus ant bet kurio elemento padaryti kad jo tekstas butu raudonas
document.body.addEventListener('click', (event) => {
  console.log('event.target ===', event.target);
  const elAntKurioPaspaudziau = event.target;
  elAntKurioPaspaudziau.style.color = 'tomato';
});
