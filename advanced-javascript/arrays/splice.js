//               0         1         2         3         4
//              -5        -4        -3        -2        -1
const nomes = ["Lucas", "João", "Maria", "Thiago", "Kláudia"];

// usando como unshift e push
nomes.splice(nomes.length, 0, "Luiz", "Otávio", "Miranda"); //adiciona o elemento "Luiz" no final do array
console.log(nomes);

// usando como pop
nomes.splice(0, 0, "Luiz", "Otávio", "Miranda");
console.log(nomes); // adiciona o elemento "Luiz" no começo do array

// função muito poderosa, pois é mais intuitivo. deixando pop e shift para casos que precisam apenas remover o primeiro ou último elemento do array
// porem essa splice faz os 3 em um só