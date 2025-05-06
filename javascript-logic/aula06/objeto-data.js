const data = new Date(1745093518132); // 2025-08-16T00:18:38.132Z
console.log("Dia", data.getDate());
console.log("Mês", data.getMonth()+1); // Janeiro é 0, Fevereiro é 1, etc.
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Min", data.getMinutes());
console.log("Seg", data.getSeconds());
console.log("ms", data.getMilliseconds());
console.log("Semana", data.getDay());
console.log(data.toString());
// console.log(Date.now()); // Retorna a data atual em milissegundos desde 1 de janeiro de 1970
