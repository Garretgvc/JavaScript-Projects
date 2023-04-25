'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtn = document.querySelectorAll('.show-modal');

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function () {
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const escapeKeyListener = function (e) {
    if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
        console.log('Escape was pressed');
    }
}

for (let i = 0; i < openModalBtn.length; i++) {
    openModalBtn[i].addEventListener('click', openModal);
}

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', escapeKeyListener);





