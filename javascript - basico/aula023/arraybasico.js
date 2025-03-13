// indices        0       1        2
const alunos = ['Luiz', 'Maria', 'João']

alunos.push('Luiza')
alunos.push('Eduardo')
alunos.push('Mário')

console.log(alunos.slice(0, -2))//realiza um fatiamento de elementos po virgulas


/*
alunos.push('eduardo') // adiciona no final crianco mais um indice, porem automaticamente.
alunos.push('Luiza')
alunos.push('Fábio')

console.log(alunos.length) // mostra o tamanho da lista de alunos (arrays)
alunos.unshift('luana') // adiciona no inicio do array, no indice 0 

alunos.pop(); // remove o ultimo objeto e indice
const remover = alunos.shift()
console.log(` Removido: ${remover}`)

delete alunos[1] // deleta o objeto, mas não altera os indices
ex: [ 'Luiz', <1 empty item>, 'João' ]


alunos[alunos.length] = 'Luiza' // adiciona no final e cria mais um indice
alunos[alunos.length] = 'Fábio'
alunos[alunos.length] = 'Luana'
console.log(alunos)

alunos[3] = 'Luana' //altera o indice 3 para Luana, especificamente

console.log(alunos[0]) // mostra o elemnto do indice
console.log(alunos[1])
console.log(alunos[2])]
*/

