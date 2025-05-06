function retornaFuncao() {
  const nome = "Luiz";
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao('Luiz')
const funcao2 = retornaFuncao('João')
console.log(funcao(), funcao2()) // Luiz, joão

//closure é a habilidade de uma função acessar o escopo léxico de outra função

