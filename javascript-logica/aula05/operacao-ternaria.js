//Operação Ternarioa
// (condição) ? : valor se verdadeiro : valor se falso
// você pode ou não utilizar parenteses

/*

if (pontoUsuario >= 1000) {
  console.log("Usuario VIP");
} else {
  console.log("Usuario normal");
}
*/

const pontoUsuario = 1000;
const nivelUsuario = pontoUsuario >= 1000 ? "Usuario VIP" : "Usuario normal";
const corUsuario = "Azul";
const corPadrao = corUsuario || "Preto";
console.log(nivelUsuario, corPadrao);
