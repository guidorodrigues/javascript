function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  var outro = document.getElementById('outro')

  if (fano.value <= 0 || fano.value >= ano) {
    window.alert("Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    res.innerHTML = `Idade calculada: ${idade}`;
    var genero= ''
    if(fsex[0].checked){
      genero = 'Homem'
    }else if (fsex[1].cheked){
      genero = 'Mulher'
    }else {
      var outro = window.prompt('Com qual gênero você se identifica?')
      genero = outro
      
    }
    res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
  }
}
