function recursive(max) {
  if (max >= 10) return; // o maximo é 10350 recursividade
  console.log(max);
  max++;
  recursive(max); //chamada recursiva
  //se não colocar o return ele criar um loop infinito
}
recursive(0);
