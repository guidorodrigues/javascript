const nome = "Luiz";

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = "Otávio";
  falaNome();
}
usaFalaNome();

// a função conhece o local onde ela foi declarada, se eu busco o nome da funçaõ e não existe ela vai buscar no escopo global
