// Factory function é uma função que retorna um objeto

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    // getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    set nomeCompleto(valor) {
      const partes = valor.split(" "); // Divide a string em palavras
      this.nome = partes.shift(); // Remove e retorna o primeiro elemento (nome)
      this.sobrenome = partes.join(" "); // Junta o restante das palavras como sobrenome
    },
    fala: function (assunto) {
      return `${this.nome} está ${assunto}`;
    },
    peso: peso,
    altura: altura,
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2); // toFixed(2) formata para 2 casas decimais
    },
  };
}

const p1 = criaPessoa("Luiz", "Otávio", 1.8, 80);
p1.nomeCompleto = "Luiz Otávio de Souza"; // Chama o setter
console.log(p1.nomeCompleto); // Chama o getter