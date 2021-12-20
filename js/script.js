'use strict';

// const now = new Date('2020-05-01');
// const now = new Date(2020, 5, 1, 20);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
const now = new Date();

// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTime());

let start = new Date();

for(let i = 0; i < 100000; i++) {
    let some = i - 12 + i;
}
let end = new Date();

// alert(`${(end.getTime() - start.getTime()) / 1000} секунд`);
alert(` ${end - start} мс`);

