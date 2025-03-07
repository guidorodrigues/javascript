let num = [5, 8, 2, 9, 3]
num.push(1)//adiciona um elemento no final do vetor
num.sort( )//elemento interno para ordenar o vetor
console.log(num)
//console.log(`Nosso vetor é o ${num.length}`)
//console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4)
if(pos == -1){
    console.log('O valor não foi encontrado')
}
console.log(`O valor 8 está na posição ${pos}`) //retorna a posição do valor 8
    
    
