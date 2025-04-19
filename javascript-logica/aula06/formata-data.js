/*
function formataData(data) {
  const dia = data.getDate();
  const mês = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();
  const hora = data.getHours();
  const min = data.getMinutes();
  const seg = data.getSeconds()

  return `${dia}/${mês}/${ano} ${hora}:${min}:${seg}`;
}
*/
function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mês = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mês}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

// formata a data oara o formato brasileiro
// aqui é o Brasil!
