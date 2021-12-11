"use strict";
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)

console.log(typeof(5 + ""));

const num = 5;

console.log("https://vk.com/" + num);

const fontSize = 26 + 'px';

//To num
//1
console.log(typeof(Number('4')));
//2
console.log(typeof(+'5'));
//3 
console.log(typeof(parseInt("15px", 10)));
console.log(parseInt("15px", 10));

let answer = +prompt("Hello", "");