/*
    Operadores Lógicos
    && (AND) - E
    || (OR) - OU
    ! (NOT) - NÃO
*/

// ('&& (AND) - E')
console.log(true && true); // true
console.log(true && false); // false
// Retorna true(verdadeiras) se ambos os operandos forem true

console.log("-------------");

//|| (OR) - OU
const expressao = true || false;
console.log(expressao); // true
console.log(false || false); // false
console.log(false || false || true || false); // true
// Retorna true(verdadeiras) se pelo menos um dos operandos for true

console.log("-------------");

// !(NOT) - NÃO
console.log(true); // true, literal
console.log(!false); // true, inverte o valor lógico
console.log(!!true); // true, inverte o valor, mas depois inverte de novo
// nega o valor lógico, se for true retorna false e vice-versa

// o cara não se decide hahahahahahahah, na real decide... duas vezes
// o que é o mesmo que não fazer nada, ou seja, retorna o valor original
//"!!!" é desnecessário, pois o operador só inverte o valor lógico uma vez


//sou viciado em comentar, então vou comentar tudo
// e se você não gosta de comentários, caguei pro ocê
