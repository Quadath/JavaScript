'use strict';

class User {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    #surname = 'Savranskyy';

    say() {
        console.log(`Имя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }
    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение age.');
        }
    }
}

const ivan = new User('Ivan', '1');
console.log(ivan.name);

console.log(ivan.age);
console.log(ivan.surname);
ivan.age = 99;

ivan.name = 'Alex';

ivan.say();