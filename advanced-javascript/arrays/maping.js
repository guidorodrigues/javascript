// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map((valor) => valor * 2); // multiplicar por 2
console.log(dobro);

console.log("----------------------------------");

// Para cada elemento retorne uma string com o nome da pessoa
// remova apenas a chave 'nome' do objeto
// adicione uma chave id em cada objeto
const pessoas = [
  { nome: "João", idade: 20 },
  { nome: "Ana", idade: 25 },
  { nome: "Pedro", idade: 59 },
  { nome: "Maria", idade: 53 },
  { nome: "Lucas", idade: 40 },
  { nome: "Julia", idade: 50 },
];

const nomes = pessoas.map((obj) => obj.nome);
const idade = pessoas.map((obj) => ({ idade: obj.idade}))
// ou delet obj.nome e returtn obj
console.log(nomes);
console.log(idade);
