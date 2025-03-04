function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  var outro = document.getElementById("outro");
  var img = document.createElement("img");
  img.setAttribute("id", "foto");

  if (fano.value <= 0 || fano.value >= ano) {
    window.alert("Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    res.innerHTML = `Idade calculada: ${idade}`;
    var genero = "";
    if (fsex[0].checked) {
      genero = "Homem";

      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "imagens/meninobebe.jpg");
      } else if (idade < 21) {
        img.setAttribute("src", "imagens/homemjovem.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "imagens/homemadulto.jpg");
      } else {
        img.setAttribute("src", "imagens/homemidoso.jpg");
      }
    } else if (fsex[1]) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "imagens/meninabebe.jpg");
      } else if (idade < 21) {
        img.setAttribute("src", "imagens/mulherjovem.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "imagens/mulheradulta.jpg");
      } else {
        img.setAttribute("src", "imagens/mulheridosa.jpg");
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
