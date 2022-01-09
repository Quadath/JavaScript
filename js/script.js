'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15, 
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
// const user = {
//     name: 'Joe'
// };

// sayName.call(user, 'Smith');

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     console.log(this);
//     this.style.backgroundColor = '#ff0000';
// });

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};  
obj.sayNumber();
// const double = (a) => {
//     return a * 2;
// }
const double = a => a * 2;
console.log(double(4));

//1 Обычная функция: this = window, use strict - undefined
//2 Контекст у методов объекта - сам объект
//3 this в конструкторах и классах - это новй экземпляр объекта
//4 ручная привязка this: call, apply, bind