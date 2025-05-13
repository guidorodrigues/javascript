// Retorne a soma do dobro de todos os pares
// -> filter pares
// -> dobrar os valores
// -> reduzir (somar tudo)

const numeros = [5, 50, 2, 4, 40, 200];
console.log(numeros);

console.log("----------------------------------");

const dobro = numeros.map((valor) => valor * 2);
console.log(dobro);

console.log("----------------------------------");

const pares = numeros.filter((valor) => valor % 2 === 0);
console.log(pares);

console.log("----------------------------------");

const somar = numeros.reduce((acc, valor) => acc + valor, 0);
console.log(somar);

console.log("----------------------------------");

// Usando filter, map e reduce juntos

const pares2 = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumulador, valor) => acumulador + valor, 0);
console.log(pares2);

console.log("----------------------------------");

// Versão mais limpa usando encadeamento direto
const somaDobroPares = numeros
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .reduce((acc, n) => acc + n, 0);

console.log(somaDobroPares);
