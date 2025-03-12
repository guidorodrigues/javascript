function parimp(n) {
    if(n%2 == 0){
        return 'par'
    }else{
        return 'impar'
    }//se o n % 2 for igual a 0, ele é par, se não, ele é impar
   
}
let res = parimp(4)// essa é minha chamada da função
console.log(res)