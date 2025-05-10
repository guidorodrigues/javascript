const nomes = ["Lucas", "João", "Maria", "Thiago", "Kláudia"];
const novo = nomes.slice(1, -2); // slice busca o elemto removido
console.log(novo);

console.log("------------------");

const nome = "Luiz Otávio Miranda";
const separado = nome.split(" "); // split separa a string em um array
console.log(separado);

console.log("------------------");

const nomes2 = ["Lucas", "João", "Maria", "Thiago", "Kláudia"];
const nome2 = nomes2.join(", "); // join transforma o array em uma string
console.log(nome2);
