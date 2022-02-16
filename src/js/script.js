'use strict';

// function* generator() {
//     yield 'B';
//     yield 'r';
//     yield 'u';
//     yield 'h';
// }

// const str = generator();

// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next().value);

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

for (let k of count(7)) {
    console.log(k);
}

// const counter = count(7);

// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
