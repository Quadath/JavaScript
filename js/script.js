'use strict';

// // filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart', 'Dmitro'];

// const shortNames = names.filter((name) => {
//     return name.length < 5;
// });

// console.log(shortNames);

//map

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => {return item.toLowerCase();});
// console.log(result);

// let answers = ['IvAn', 'AnnA', 'Hello'];

// answers = answers.map(item => {return item.toLowerCase();});
// console.log(answers);

// every/some

// const some = [3, 'qw', 'fsdffsdf'];

// console.log(some.some(item => typeof(item) === 'number')); //true

// console.log(some.every(item => typeof(item) === 'number')); //false

// const arr = [4, 5, 1, 3, 2, 6];
// const arr = ['apple', 'pear', 'plum'];


// const result = arr.reduce((sum, current) => sum + current);
// const result = arr.reduce((sum, current) => sum + `, ${current}`);
// console.log(result);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
    .filter(item => item[1] == 'persone')
    .map(item => item[0]);
console.log(newArr);