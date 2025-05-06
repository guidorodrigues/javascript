let n1 = Number(prompt('Adicione um número:'))

document.body.innerHTML+=`Você escolheu o número ${n1}<br>`
document.body.innerHTML+=`A raiz quadrada: ${Math.sqrt(n1).toFixed(2)}<br>`//.sqrt é a função que encontra a raiz
document.body.innerHTML+=`Ele é um NaN: ${Number.isNaN(n1)}<br>`
document.body.innerHTML+=`Ele é um numero inteiro: ${Number.isInteger(n1)}<br>`
document.body.innerHTML+=`Arredondando para cima: ${Math.ceil(n1)}<br>`
document.body.innerHTML+=`Arredondando para cima: ${Math.floor(n1)}<br>`
document.body.innerHTML+=`Com duas casas decimais: ${n1.toFixed(2)}`//2 casas decimais

//precisa adiconar o Number


