// filter, map , reduce
// toda notação de ponto é um metodo

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

const nFilter = numeros.filter((valor) => valor > 10);

console.log(nFilter);

console.log("----------------------------------");

// Retorne o nome das pessoas que tem 5 letras
// retorne o snomes cujo termine com a letra 'a'
const pessoas = [
  { nome: "João", idade: 20 },
  { nome: "Ana", idade: 25 },
  { nome: "Pedro", idade: 59 },
  { nome: "Maria", idade: 53 },
  { nome: "Lucas", idade: 40 },
  { nome: "Julia", idade: 50 },
];
const pFilter = pessoas.filter(
  (obj) => obj.nome.length >= 5 && obj.idade >= 50
);

console.log(pFilter);
