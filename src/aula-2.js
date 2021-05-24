const { texto } = require('./base');

const regEpx1 = /(João|Maria)/gi;

console.log(texto.match(regEpx1));
// console.log(texto.replace(regEpx1, "Fulano"));
// console.log(texto.replace(regEpx1, "<b>$1</b>"));
console.log(texto.replace(regEpx1, function (input) {
  return input.toUpperCase();
}));