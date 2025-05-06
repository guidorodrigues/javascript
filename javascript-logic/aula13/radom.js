function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rend = random(1, 60);

while (rend !== 10) {
  console.log(rend);
}

console.log("------------");

do {
  console.log(rend);
} while (rend !== 10);
