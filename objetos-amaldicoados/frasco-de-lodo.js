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
    };
    ("");
  }
}
// 'true' cura (1d6+20) 'false' cura (3d8+10) ou dano (3d8+10)
// Exemplo de uso


const resultado1 = usarFrascoDeLodo(true);
console.log(resultado1.mensagem);
console.log("PV:", resultado1.pontosVida);
