let i = 0;
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let numero of numeros) {
  if (numero === 2) {
    console.log("Pulei");
    continue; //pula para a proxima interação
    i++
  }

  console.log(numero);

  if (numero === 7) {
  console.log('7 encontrado, saindo...')
    break; //quebra o laço, ele sai
    i++
  }
}
