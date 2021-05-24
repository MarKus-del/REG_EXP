const { texto, arquivos } = require('./base');

// Quaatificadores
// * (opcionais) 0 ou n = {0,}
// + (obrigatorio) 1 ou n = {1,}
// ? (opcionais) 0 ou 1 = {0, 1}
// \ Caractere de escape
// {n, m} mínino e máxino

// console.log(texto);
// const regExp = /jo+ão+/gi
// console.log(texto.match(regExp));

const regExp2 = /\.jpe?g/gi
const regExp3 = /\.jpe{0,}g/gi

for (const arquivo of arquivos) {
  console.log(arquivo.match(regExp2));
}
console.log("--------------------");
for (const arquivo of arquivos) {
  console.log(arquivo.match(regExp3));
}