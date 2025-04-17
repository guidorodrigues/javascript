// calculadora de IMC
const nome = 'Guido Rodrigues'
const idade = 19
const altura = 1.80
const peso = 84 
let anoNascimento;
anoNascimento = 2025 - idade
let indiceMassaCorporal  = peso/(altura*altura)
console.log(`${nome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura e seu IMC é ${indiceMassaCorporal}`)
console.log(`${nome} nasceu no ano de ${anoNascimento}`)
