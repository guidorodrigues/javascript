let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n)>= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        
        
     
    }else{
        window.alert('valor invalido ou já encintrado na lista!')
    }
   num.value = ''
   num.focus()
}

function onclick(){
    if(valores.length == 0){
        window.alert('Adicione os valores antes de finalizar!')
    }else{
        let lot = valores.length
         res.innerHTML



        

        

    }
}