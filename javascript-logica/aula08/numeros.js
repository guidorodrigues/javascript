const numeros = [
// 0  1  2
  [1, 2, 3], //0
  [4, 5, 6], //1
  [7, 8, 9], //2
];
const [lista1, lista2, lista3] = numeros;
console.log(lista1[0], lista2[1], lista3[2]);

/*
//               0  1  2  3  4  5  6  7  8
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [ um, , tres, , cinco,  ...resto] = numeros;
console.log(um, tres, cinco);
console.log(resto)//...resto
*/
