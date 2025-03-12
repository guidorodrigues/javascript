function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  var outro = document.getElementById("outro");
  var img = document.createElement("img");
  var outr = document.getElementById('outro')
  img.setAttribute("id", "foto");
  

  if (fano.value <= 0 || fano.value >= ano) {
    window.alert("Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    res.innerHTML = `Idade calculada: ${idade}`;
    var genero = "";
    var faixae = "";
    if (fsex[0].checked) {
      genero = "Homem";

      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "imagens/meninobebe.jpg");
        faixae = "criança";
      } else if (idade < 21) {
        img.setAttribute("src", "imagens/homemjovem.jpg");
        faixae = "jovem";
      } else if (idade < 50) {
        img.setAttribute("src", "imagens/homemadulto.jpg");
        faixae = "adulto";
      } else {
        img.setAttribute("src", "imagens/homemvelho.jpg");
        faixae = "idoso";
      }
    } else if (fsex[1]) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "imagens/meninabebe.jpg");
        faixae = "criança";
      } else if (idade < 21) {
        img.setAttribute("src", "imagens/mulherjovem.jpg");
        faixae = "jovem";
      } else if (idade < 50) {
        img.setAttribute("src", "imagens/mulheradulta.jpg");
        faixae = "adulta";
      } else {
        img.setAttribute("src", "imagens/mulheridosa.png");
        faixae = "idosa";
      }
    }
      
    if(outr){
      var genero = window.prompt('Com qual gênero você se identifica?')
      genero = genero

      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "imagens/naobinario.jpg");
        faixae = "criança";
      } else if (idade < 21) {
        img.setAttribute("src", "imagens/naobinario.jpg");
        faixae = "jovem";
      } else if (idade < 50) {
        img.setAttribute("src", "imagens/naobinario.jpg");
        faixae = "adulta";
      } else {
        img.setAttribute("src", "/imagem/naobinario.jpg");
        faixae = "idosa";
      }
    }

    res.innerHTML = `Detectamos ${genero} ${faixae} com ${idade} anos.`;
    res.appendChild(img);
  }
}
