'use strict'

console.log("Запрос данных..");

const req = new Promise((resolve, reject) => {
    setTimeout(() =>
    {
        console.log('Подготовка данных...');
        const product = {
            name: 'TV',
            price: 2000,
        };
        resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.staus = 'order';
            // reject();
            resolve(product);
        }, 2000);
    }).then(data => {
        data.modify = true;
        return data;
    }).then((data) => {
        console.log(data);
    });
}).catch(() => {
    console.log('Ошибка.');
}).finally(() => {
    console.log('finally');
});




const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

test(1000).then(() => console.log('1000ms'));
test(2000).then(() => console.log('2000ms'));

//Wait until all promised end
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('all');
});

//Wait until one promise completed
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('first');
});
//BAD
// setTimeout(() =>
// {
//     console.log('Подготовка данных...');
//     const product = {
//         name: 'TV',
//         price: 2000,
//     };

//     setTimeout(() => {
//         product.staus = 'order';
//         console.log(product);
//     }, 2000);
// }, 2000);