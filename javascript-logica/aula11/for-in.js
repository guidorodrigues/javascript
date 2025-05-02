//                 0       1      2
const frutas = ["Maçã", "Pêra", "Uva"];

//lê os indices ou chaves do objeto
for (let indice in frutas) {
  console.log(frutas[indice]);
}
console.log('-------------')
const pessoas={
    nome:'Luiz',
    sobrenome:'Ótavio',
    idade: 30
}
for (let i in pessoas){
  console.log(i)
}

console.log(pessoas.nome) 
console.log(pessoas['nome'])