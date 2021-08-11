'use strict';

const htmlBody = document.querySelector('body');
const againBtn = document.querySelector('.again');
const number = document.querySelector('.number');
const [ input, checkBtn ] = [...document.querySelector('.left').children];
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const hScore = document.querySelector('.highscore');

let x = Math.floor(Math.random() * 20) + 1;

againBtn.disabled = true;

if (localStorage.getItem('highscore')) {
   hScore.textContent =localStorage.getItem('highscore');
}

checkBtn.addEventListener('click', () => {

   const val = +input.value;
   let s = +score.textContent;
   let hs = +hScore.textContent;
   
   // INPUT VALIDATION
   if (!val || val > 20 || val < 0) return

   // INPUT CHECKING
   message.textContent = `${val === x ? `Correct!` : val > x ? `Too high!` : `Too low!`}`;

   // SCORING UPDATE
   if (message.textContent === 'Correct!') {

      number.textContent = x;
      hScore.textContent = `${ s > hs ? s : hs}`;
      htmlBody.style.backgroundColor = '#60b347';

      againBtn.classList.add('active');
      input.disabled = true;
      checkBtn.disabled = true;
      againBtn.disabled = false;

      localStorage.setItem('highscore', hScore.textContent);

   } else {

      score.textContent = `${--s}`;
      input.value = '';

   }

})

againBtn.addEventListener('click', () => {

   htmlBody.style.backgroundColor = '#222222';
   x = Math.floor(Math.random() * 20) + 1;
   score.textContent = 20;
   number.textContent = '?';
   message.textContent = 'Start guessing...';
   input.value = '';

   againBtn.classList.remove('active');
   input.disabled = false;
   checkBtn.disabled = false;
   againBtn.disabled = true;

})