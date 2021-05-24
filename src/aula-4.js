const { html } = require('./base');

const regExpGreedy = /<.+>.+<\/.+>/gi
const regExpNonGreedy = /<.+?>.+?<\/.+?>/gi

console.log(html);
// Pega até a ultima ocorrencia
console.log(html.match(regExpGreedy)); // greedy

// Pega até a primeira ocorrencia
console.log(html.match(regExpNonGreedy)); // non-greedy