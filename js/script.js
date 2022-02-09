'use strict';

// localStorage.setItem('name', "value");

// let name = localStorage.getItem('name');

// localStorage.removeItem('name');

// localStorage.clear();

const checkbox = document.querySelector('#checkbox'),
    text = document.querySelector('#text');


if(localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if(localStorage.getItem('text')) {
    text.value = localStorage.getItem('text');
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});
text.addEventListener('change', () => {
    localStorage.setItem('text', text.value);
});