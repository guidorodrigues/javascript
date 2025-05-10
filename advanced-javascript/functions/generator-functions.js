// avaliação preguisosa

function* gerador() {
  //  codigo aqui...
  yield 1;
  yield 2;
  yield 3;
}

const g1 = gerador();
console.log(g1.next().value); // { value: 1, done: false }
console.log(g1.next().value); // { value: 2, done: false }
console.log(g1.next().value); // { value: 3, done: false }
console.log(g1.next()); // { value: undefined, done: true }

console.log("---------");

for (let valor of gerador()) {
  console.log(valor); // 1 2 3
}

console.log("---------");

function* gerador2() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
} // gerador infinito

const g2 = gerador2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log("---------");

function* gerador3() {
  yield 0;
  yield 1;
  yield 2;
  yield 3;
}

function* gerator4() {
  yield* gerador3(); //espalha os valores do gerador 3
  yield 4;
  yield 5;
  yield 6;
}

const g4 = gerator4();
for (let valor of g4) {
  console.log(valor);
}

// onde foi que eu errei
// me falaaaaaaaaaaaaaaaa

console.log("---------");

function* gerador5() {
  yield function () {
    console.log("Vim do y1eld 1");
  };

  yield function () {
    console.log("Vim do y1eld 2");
  };

  return function () {
    console.log("Vim do return");
  }; // return termina a execução do gerador
}

const g5 = gerador5();
const funcao1 = g5.next().value;
const funcao2 = g5.next().value;
const funcao3 = g5.next().value; 

funcao1(); //Vim do y1eld 1
funcao2(); //Vim do y1eld 2
funcao3(); //Vim do return

