// função construtora -> função que retorna um objeto
// fução fabrica -> função que retorna um objeto
// construtor -> nome com letra maiuscula

// Pessoa (new Pessoa()) são moldes par agerar novos objetos
// Sempre que usar a função construtora, use o new antes da função
// new -> cria um novo objeto vazio, atribui o this a esse objeto, retorna o objeto no final

function Pessoa(nome, sobrenome) {
  function id() {
    //atributos privados
  }
  // Atributos ou métodos publicos
  // Pois é possivel acessar fora da função
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(`${this.nome} ${this.sobrenome}: sou um método`);
  };
}

const p1 = new Pessoa("Luiz", "Otávio");
const p2 = new Pessoa("Maria", "Oliveira");
const p3 = new Pessoa("João", "Silva");

p1.metodo(); // sou um método
p2.metodo(); // sou um método
p3.metodo(); // sou um método

// o new aponta para o objeto que está sendo criado
