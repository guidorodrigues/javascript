/*
&& -> todas as expressõe sprecosam ser verdadeirass para retornar true 
ex: false && true -> false

|| -> toadas as exproessões precosam ser falsas para retornar false
ex: true || false -> true

Valores falsy
false - falso literalmente
0 - zero
"" - string vazia
null - não existe
undefined - não vai para lugar nenhum
NaN - não é um número

qualquer coisa que não seja falsy é truthy
*/

function falaoi() {
    return "oi";
}
let vaiExecutar = "Joãozinho";
console.log(vaiExecutar && falaoi()); // "oi"
