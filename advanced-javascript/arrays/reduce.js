// Some todos os números (reduce)
// Retorne um array com pares (filter)
// Retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor, indice, array) => {
  acumulador = acumulador + valor;
  return acumulador;
}, 0);
console.log(total); 
