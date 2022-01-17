const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'bruh', 'rock');

// function calcOrDouble(number, basis) {
//     basis = basis || 2;
//     console.log(number * basis);
// }
function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}
calcOrDouble(3);
calcOrDouble(3, 5);