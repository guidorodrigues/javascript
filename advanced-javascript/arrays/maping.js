// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map((valor) => valor * 2); // multiplicar por 2
console.log(dobro);

console.log("----------------------------------");

// Para cada elemento retorne uma string com o nome da pessoa
// remova apenas a chave 'nome' do objeto
// adicione uma chave id em cada objeto
const pessoas = [
  { nome: "João", nascimento: "2004-01-15" },
  { nome: "Ana", nascimento: "1999-06-22" },
  { nome: "Pedro", nascimento: "1965-03-10" },
  { nome: "Maria", nascimento: "1971-11-05" },
  { nome: "Lucas", nascimento: "1984-08-19" },
  { nome: "Julia", nascimento: "1974-02-28" },
  { nome: "Marcos", nascimento: "1994-07-12" },
  { nome: "Fernanda", nascimento: "1989-09-30" },
  { nome: "Roberto", nascimento: "1979-05-17" },
  { nome: "Patrícia", nascimento: "1969-12-03" },
  { nome: "Carlos", nascimento: "1964-04-25" },
  { nome: "Juliana", nascimento: "1996-10-08" },
  { nome: "Ricardo", nascimento: "1991-03-21" },
  { nome: "Tatiane", nascimento: "1986-06-14" },
];

const nomes = pessoas.map((obj) => obj.nome);
const idade = pessoas.map((obj) => ({ idade: obj.idade }));
// ou delet obj.nome e returtn obj
const pessoasId = pessoas.map(function (obj, indice) {
  obj.id = indice + 1;
  return obj;
});
console.log(nomes);
console.log(idade);
console.log(pessoasId);
