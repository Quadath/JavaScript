//const result = prompt("Вам есть 18?", "Да");
// const result = +prompt("Вам есть 18?", "Да");
// console.log(typeof(result));

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

/*const user = "Ivan"

alert(`Привет, ${user}`); */



/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на 
вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
- count - сюда передается ответ на первый вопрос
- movies - в это свойство поместить пустой объект
- actors - тоже поместить пустой объект
- genres - сюда поместить пустой массив
- privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
- 'Один из последних просмотренных фильмов?'
- 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
movies: {
    'logan': '8.1'
}

Проверить, чтобы все работало без ошибок в консоли */


//const calc = (a, b) => a + b;
//console.log(calc(1, 5));
/*
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

start();
rememberFilms();


console.log(personalMovieDB);

function rememberFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' &&
            b != '' && a.length <= 50 && b.length <= 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

function rememberGenres() {
    for (let i = 0; i < 3; i++) {
        const a = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
        if (a != null && a != '' && a.length <= 30) {
            personalMovieDB.genres[i] = a;
        } else {
            i--;
        }
    }
}
rememberGenres();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    } else {
        console.log("Данная база приватная.");
    }
}

function CountUserLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30) {
        console.log('Вы обычный зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман!');
    }
}
CountUserLevel(); */


/* const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    }, makeTest: function() {
        console.log('hi');
    }
};

delete options.name;

console.log(options.name);
let size = 0;
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`   Свойство ${i} имеет значение ${options[key][i]}`);
            size++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        size++;
    }
}
options.makeTest();
console.log(size);
console.log(Object.keys(options).length);

const {border, bg} = options.colors;
console.log(border); */

"use strict";

const arr = [2, 3, 6, 8, 10];

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} inside ${arr}`);
});