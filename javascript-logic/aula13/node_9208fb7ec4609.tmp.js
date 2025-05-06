function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rend = random(min, max);

while (rend !== 10) {
  console.log(rend);
}

console.log("------------");

do {
  rend = random(min, max);
  console.log(rend);
} while (rend !== 10);
