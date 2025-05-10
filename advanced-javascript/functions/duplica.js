function criaMultiplicador(multiplicador) {
    // Multiplicador
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2)); // 4
console.log(duplica(3)); // 6
console.log(duplica(4)); // 8

//retorno é um copapso mental 