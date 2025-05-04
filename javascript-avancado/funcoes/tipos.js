//Tipos de funções
//Firts-class objects (Objetos de primeira classe)
const souUmDado = function () {
  console.log("Sou um dado");
};

const executar = function (funcao) {
  console.log("Executei a função!");
  funcao();
};

executar(souUmDado);

console.log("---------");

//Arrow function
const arrowFunction = () => {
  console.log("Sou uma Arrow Function");
};

arrowFunction();

console.log("---------");

const obj = {
  falar() {
    console.log("Falando...");
  },
};

obj.falar();
