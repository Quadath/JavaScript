"use strict"

const btn = document.querySelector('button');

// btn.onclick = function() {
//     alert('fuck you');
// };

// btn.addEventListener('click', () => 
// {
//     alert('Da');
// });

const deleteElement = (e) => {
    e.target.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
};

btn.addEventListener('mouseenter', deleteElement);
