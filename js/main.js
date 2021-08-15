'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const n = Math.random();
    if (n < 0.4) {
      btn.textContent = '❣HAPPY BIRTHDAY❣';
    } else if (n < 0.8) {
      btn.textContent = 'ヨガしてみてね♡';
    } else {
      btn.textContent = 'いつもありがとう！';
    }
  });
}


