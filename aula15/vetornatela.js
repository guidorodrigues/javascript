let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*console.log(varoles[0])

for (let ps=0;pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} //codigo tradicional do percurso em vetores, percurso para exibição dos vetores
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}//codigo simplificado para percurso em vetores, percurso para exibição dos vetores
//para cada exibição dentro de num eu vou mostar o num pos
//essa simtaxe do for só funciona para vetores e objetos
//essa sintaxe é uma simplificação da anterior e é mais moderna
