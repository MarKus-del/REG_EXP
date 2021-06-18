const { cpfs ,cpfs2 } = require('./base');

// ^ -> Começa com
// $ -> Começa com
// [^] -> Negação
// m - multiline

const cpf = "254.224.877-45"
const cpfRegExp = /^(\d{3}\.){2}\d{3}-\d{2}$/gm;

console.log(cpf.match(cpfRegExp));
console.log(cpfs2.match(cpfRegExp));