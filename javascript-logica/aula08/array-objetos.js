const pessoa = {
  nome: "Kanadra",
  sobrenome: "Silva",
  idade: `${36} Anos`,
  enderco: {
    rua: "Av. paulista",
    numero: 579,
  },
};

const {
  enderco: {nome, ...resto}
} = pessoa;
console.log(resto);
