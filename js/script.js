'use strict';

const person = {
    name: 'Bruh',
    age: '324',

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
};

console.log(person.userAge = 300);