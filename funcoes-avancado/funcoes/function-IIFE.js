// IIFE -> Immediately Invoked Function Expression
function qualquerCoisa() {
  console.log("Qualquer coisa!");
}
qualquerCoisa(); // Chama a função normalmente
console.log("---------");

(function () {
  console.log("Sou uma IIFE!");
  //não possuem comflito de escopo com variáveis globais
})(); // () Chama a função imediatamente
console.log("---------");

(function falaNome(idade, peso, altura) {
  function falaOi(nome) {
    return `Oi ${nome}`;
  }

  function falaNome() {
    console.log(falaOi("Luiz"));
  }
  falaNome(); // Chama a função interna
    console.log(idade, peso, altura); // Chama as variáveis passadas como parâmetro
})(30, 80, 1.8); // () Chama a função imediatamente com parâmetros
console.log("---------");
