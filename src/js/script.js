'use strict';

try {
    console.log('Normal');
    console.log(a);
} catch(error) {
    console.log(error.name);
    console.log(error.stack);
}

console.log('Still normal');