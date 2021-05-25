const { alfabeto } = require('./base');

// [abc] = conjunto
// + = sequencia de um conjunto
// [^]  = nega um conjunto
// [-] = range
console.log(alfabeto);

console.log(alfabeto.match(/[^abc123]+/gi)); // negação

// console.log(alfabeto.match(/[0-9]+/g));
// equivale a
console.log(alfabeto.match(/\d+/g));
console.log(alfabeto.match(/\D+/g));

// console.log(alfabeto.match(/[a-zA-Z0-9]+/gi));
// console.log(alfabeto.match(/[a-z]+/gi));
// equivale a
console.log(alfabeto.match(/\w+/g));
console.log(alfabeto.match(/\W/g));

console.log(alfabeto.match(/[\u00A0-\u00B0]/gi)); // Unicode

// retirando espaços
console.log(alfabeto.match(/\s+/g));
console.log(alfabeto.match(/\S+/g));