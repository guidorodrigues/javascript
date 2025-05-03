function nivelDeExposicao(x) {
  if (x >= 1 && x < 25) {
    console.log("Nivel de exposição baixa!");
    setTimeout(function () {
      console.log("Imposivél ser o SUCC!");
    }, 1000);
  } else if (x >= 25 && x < 45) {
    console.log("Nivel de exposição moderada!");
    setTimeout(function () {
      console.log("A sua mão não é sua mão!");
    }, 1000);
  } else if (x >= 45 && x < 70) {
    console.log("Nivel de exposição alta!");
    setTimeout(function () {
      console.log(
        "Existe mais do paranormal dentro de você do que a prória realidade!"
      );
    }, 1000);
  } else if (x >= 70 && x < 100) {
    console.log("Nivel de exposição arruinada!");
    setTimeout(function () {
      console.log("Vocês acabaram de invocar o Deus da Morte!");
    }, 1000);
  } else {
    console.log("Valor inválido!"); // Caso x < 1 ou x > 100
  }
}

nivelDeExposicao(99)