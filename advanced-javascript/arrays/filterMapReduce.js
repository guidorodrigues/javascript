// Retorne a soma do dobro de todos os pares
// -> filter pares
// -> dobrar os valores
// -> reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 40, 200];
const pares = numeros.filter((valor) => valor % 2 === 0);
const soma = pares.reduce((acc, valor) => acc + valor * 2, 0);
console.log(soma);

console.log("----------------------------------");
