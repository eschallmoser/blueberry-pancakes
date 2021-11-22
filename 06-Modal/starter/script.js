'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openOrCloseModal = function () {
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openOrCloseModal);
}

btnCloseModal.addEventListener('click', openOrCloseModal);
overlay.addEventListener('click', openOrCloseModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    openOrCloseModal();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'c' && !modal.classList.contains('secret')) {
    modal.classList.add('secret');
  } else if (event.key === 'c' && modal.classList.contains('secret')) {
    modal.classList.remove('secret');
  }
});

//challenge: + key creates new modal button with correct number, ascending for each button newly created
document.addEventListener('keydown', function (event) {
  if (event.key === '+') {
    const btn = document.createElement('button');
    const btnsOpenModal = document.querySelectorAll('.show-modal');
    btn.innerHTML += `Show modal ${btnsOpenModal.length + 1}`;
    btn.classList.add('show-modal');
    document.body.appendChild(btn);
  }
});
