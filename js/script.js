const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll(".heart"),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');
box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';
// circles.style.backgroundColor = 'red'; //WRONG
for(let i = 0; i < circles.length; i++) {
    hearts[i].style.backgroundColor = 'orange';
}
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});
let num;
box.style.cssText = `background-color: blue; width: ${num}px;`;

const div = document.createElement('div');
// const text = document.createTextNode('Gay sex');

div.classList.add('black');
// document.body.append(div);
// wrapper.append(div);
// wrapper.prepend(div)
// hearts[0].before(div);
// hearts[0].after(div);
// circles[0].remove;
// hearts[0].replaceWith(circles[0]);
wrapper.replaceChildren(circles[0], hearts[0]);
