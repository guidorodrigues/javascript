// Some todos os números (reduce)
// Retorne um array com pares (filter)
// Retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor, indice, array) => {
  acumulador = acumulador + valor;
  return acumulador;
}, 0);
console.log(total);

console.log("------------------");

const pares = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log(pares);

// confuso, odeio minha vida

console.log("------------------");

const dobro = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) {
    acumulador += valor;
  }
  return acumulador;
}, 0);
console.log(dobro);

console.log("------------------");

// Retorne a pessoas mais velha
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const maisVelha = pessoas.reduce((velha, pessoa) => {
  if (velha.idade > pessoa.idade) {
    return velha;
  } else {
    return pessoa;
  }
});
console.log(maisVelha);
