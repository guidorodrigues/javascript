// arrays são dados por referência
// a alteração dos dois apontam par ao memso local na memória

const nome = ["Lucas", "João", "Maria"]; //array literal'
nome.push("Thiago"); // adiciona no final
nome.unshift("Kláudia"); // adiciona no começo
const remove = nome.shift(); // remove no começo
 const remove2 = nome.pop(); // remove no final
console.log(nome, remove, remove2); // atribtouto length
