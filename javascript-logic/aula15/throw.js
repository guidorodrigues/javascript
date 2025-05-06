function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
  }
  {
    throw new ReferenceError();
    ("x e y precisam de um número");
  }
  return x + y;
}

try {
  console.log(soma(1, 3));
  console.log(soma("1", 2));
} catch (err) {
  console.log("Algum erro");
}
