//arqumentos que sustentam todos os argumentos enviados
function parametro() {
  console.log(arguments[1]);
}
//        0  1  2  3  4  5  6  7  8  9
parametro(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log("-----------");

//argumentos com nome //não é possível fazer isso em js
function total() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}
total(0, 1, 2, 4, 5, 6, 7, 8, 9); //45

console.log("---------");

//parâmetros padrão //se não for passado o valor padrão é 0
function soma(x = 0, b = 0) {
  //b = b || 0 resoluçaõ antiga
  console.log(x + b);
}
soma(0); //0

console.log("---------");

//desistruturação de objeto // {nome, sobrenome, idade} = pessoa
function pessoa({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
pessoa({ nome: "Kanamdra", sobrenome: "Silva", idade: 36 }); // Kanandra Silva 36

console.log("---------");

//desistruturação de array
function pessoa2([nome, sobrenome, idade]) {
  console.log(nome, sobrenome, idade);
}
pessoa2(["Kanamdra", "Silva", 36]); // Kanandra Silva 36

console.log("---------");

//rest operator ...rest //resto dos argumentos
function soma(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    acumulador += numero;
  }
  console.log(acumulador);
}
soma("+", 0, 20, 30, 40, 50); //140

console.log("---------");

//spread operator //espalhar os argumentos
function calculadora(operador, acumulador, ...numeros) {
  //...rest precisa ser o ultimo parametro na função.
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero; //adição
    if (operador === "-") acumulador -= numero; //subtração
    if (operador === "/") acumulador /= numero; //divisão inteira
    if (operador === "*") acumulador *= numero; // multiplicação
  }
  console.log(acumulador);
}
calculadora("+", 0, 20, 30, 40, 50); //140
calculadora("-", 0, 20, 30, 40, 50); //-140
calculadora("/", 1, 20, 30, 40, 50); //8.333333333333334e-7
calculadora("*", 1, 20, 30, 40, 50); //1200000
