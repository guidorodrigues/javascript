//for clasic geralmente com interaeis, string e arrays
//for in retorna o indice ou chave (string, array, objetos)
//for of retorna o valor em si (interaeis, arrays e strings) 

const pessoa = ["Luiz", "Otavio", "Henrique"];
for (let i in pessoa) {
  console.log(i, pessoa[i]);
}

console.log("---------");

for (let valor of pessoa) {
  console.log(valor);
}

console.log("----------");

pessoa.forEach(function (valor, indice, array) {
  console.log(valor, indice, array)
});
