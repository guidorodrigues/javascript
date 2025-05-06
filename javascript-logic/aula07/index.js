const data = new Date();

function getDia(diaSemana) {
  const diaSemana = data.getDay();
  switch (diaSemana) {
    case 0:
      console.log("Domingo");
      return diaSemana;
    case 1:
      console.log("Segunda-feira");
      return diaSemana;
    case 2:
      console.log("Terça-feira");
      return diaSemana;
    case 3:
      console.log("Quarta-feira");
      return diaSemana;
    case 4:
      console.log("Quinta-feira");
      return diaSemana;
    case 5:
      console.log("Sexta-feira");
      return diaSemana;
    case 6:
      console.log("Sábado");
      return diaSemana;
    default:
      console.log("Dia inválido");
      return diaSemana;
  }
  return diaSemana; // Retorna o dia da semana  
}

