var agora = new Date()//horario do sistema
console.log(`Agora são ${hora} horas`)
var hora = agora.getHours()
if(hora < 12){
    console.log('Bom dia!')
}else if (hora < 18 ){
    console.log('Boa tarde!')
}else{
    console.log(`Boa Noite!`)
}
