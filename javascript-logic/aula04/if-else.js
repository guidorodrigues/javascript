const hora = 7;
if (hora < 6) {
  console.log("Boa madrugada!");
} else if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else if (hora < 24) {
  console.log("Boa noite!");
} else {
  console.log("Hora inválida!");
}

// if pode ser usado sozinho
// sempre que usar else, precisa ter um if antes
// eu posso ter vários else if na condiçaõ
//só posso ter um else na condição

console.log("-----------------------");

const tenhoGrana = true;
if (tenhoGrana) {
  console.log("Vou ao cinema!");
} else {
  console.log("Não vou ao cinema!");
}

