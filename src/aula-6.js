const { cpfs, ips } = require('./base');

// console.log(cpfs);

// console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/g));

// console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g));

// console.log(cpfs.match(/(\d{3}\.){2}\d{3}-\d{2}/g));


console.log("--- Minha Solução ---");
console.log(ips);
const ipsRetiradoDotexto = ips.match(/(\d\.?)+/g);

for (let talvezIpValido of ipsRetiradoDotexto) {
  const ipValido = talvezIpValido.split('.').reduce((isValid, casa) => {
    if (casa.length >= 2 && casa.startsWith(0)) isValid = false;
    return isValid;
  }, true)

  console.log(`O ip: ${talvezIpValido}${ipValido ? '' : ' não'} é valido`);
}

console.log("--- Solução da aula ---");

// começa com ^
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// for (let i = 0; i <= 300; i++) {
//   const ip = `${i}.${i}.${i}.${i}`;
//   console.log(ip, ip.match(ipRegExp));
  
// }

console.log(ips.match(ipRegExp));