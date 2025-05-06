/*
    O frasco de lodo é um item mágico que pode curar ou causar dano ao usuário.
    O efeito depende de um dado rolado. Se o resultado for par, o usuário cura 1d8 + 10 pontos de vida. Se o resultado for ímpar, o usuário toma 1d8 + 10 de dano.

    Se o usuário estiver com ferimentos, o frasco de lodo cura 2d8 + 20 pontos de vida. 

    O frasco de lodo só pode ser usado uma vez por dia.
    Se o usuário não estiver com ferimentos, o frasco de lodo causa 1d8 + 10 de dano. Se o usuário estiver com ferimentos, o frasco de lodo cura 2d8 + 20 pontos de vida.
*/
//rolagesn de dados
function rolarDados(quantidade, faces) {
  let total = 0;
  for (let indice = 0; indice < quantidade; indice++) {
    total += Math.floor(Math.random() * faces) + 1;
  }
  return total;
}

// usando frasco de lodo
function usarFrascoDeLodo(ferimentos) {
  if (ferimentos) {
    const cura = rolarDados(6, 8) + 20;
    return {
      pontosVida: cura,
      mensagem:
        "Você usou o frasco de lodo e curou " + cura + " pontos de vida!",
      frascoUsado: true,
    };
  } else {
    const dado = rolarDados(1, 6);
    if (dado % 2 === 0) {
      const cura = rolarDados(3, 8) + 10;
      return {
        pontosVida: cura,
        mensagem:
          "Você usou o frasco de lodo e curou " + cura + " pontos de vida!",
        frascoUsado: true,
      };
    }
    const dano = rolarDados(3, 8) + 10;
    return {
      quantidade: dano,
      mensagem: "Você usou o frasco de lodo e tomou " + dano + " de dano!",
      frascoUsado: true,
    };''
  }
}


const resultado1 = usarFrascoDeLodo(true);
console.log(resultado1.mensagem);
console.log("PV:", resultado1.pontosVida);

