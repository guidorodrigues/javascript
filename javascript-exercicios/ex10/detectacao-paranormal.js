function nivelDeExposicao(x) {
    if (x >= 1 && x < 25) {
      console.log("Nivel de exposição baixa!");
    } else if (x >= 25 && x < 45) {
      console.log("Nivel de exposição moderada!");
    } else if (x >= 45 && x < 70) {
      console.log("Nivel de exposição alta!");
    } else if (x >= 70 && x < 100) {
      console.log("Nivel de exposição arruinada!");
    } else {
      console.log("Valor inválido!"); // Caso x < 1 ou x > 100
    }
  }
