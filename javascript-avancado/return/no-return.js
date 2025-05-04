function pessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

const p1 = pessoa("Kláudia", "Queiroz");
const p2 = {
  nome: "Kanamdra",
  sobrenome: "Silva",
};

console.log(typeof p1); // object
console.log(typeof p2); // object
console.log(p1); // { nome: 'Kláudia', sobrenome: 'Queiroz' }
console.log(p2); // { nome: 'Kanamdra', sobrenome: 'Silva' }

//acho que to comendo um pouco de sono, mas não sei se é isso mesmo
// acho que to entendendo

console.log("-----------------------");

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + "" + resto;
  }
  return falaResto;
}

 const fala = falaFrase('Olá')
 const resto = fala('Mundo!')
console.log(resto)

// que porra confusa
// gostei 

/*
const olaMundo = falaFrase("Olá");
console.log(olaMundo()); // undefined?
console.log(olaMundo(" Mundo!")); // retorna a string "Olá Mundo!"

// que porra é essa?
// saquei que o falaFrase retorna uma função, mas não entendi o porque de undefined
*/