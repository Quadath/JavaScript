"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        // console.log(' ');
        // console.log(e.touches);
        // console.log(e.targetTouches);
        console.log(e.changedTouches);
    });
});
