// 5!= 5x4x3x2x1=120
function fatorial(n) {
    let f = 1;
    for(let c = n ; c > 1; c--){
        f *= c
    }
    return f;
}
console.log(fatorial(5))// aqui eu chamo a função fatorial e passo o valor 5 para ela, que vai retornar 120

