const { texto } = require('./base');

// g - global (encontra todas as ocorrências)
// i - insensitive
// () group
// | ou

const regEpx1 = /João/gi;
const found = regEpx1.exec(texto);

console.log(regEpx1.test(texto));

if (found) {

  console.log(found);
  console.log(found[0]);
} else {
  console.log("Ocorrencia não encontrada")
}