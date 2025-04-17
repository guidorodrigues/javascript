let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A

    ;[varA, varB, varC] = [varB, varC, varA]// metodo moderno
console.log(varA, varB, varC)

/*
const varTemp = varA //preciso salvar a variavel, pois a partir do momento que troco perco ela
// metodo antigo
varA = varB
varB = varC
varC = varTemp
*/
