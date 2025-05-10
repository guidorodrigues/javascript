
function rand(max = 1000, min = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}
console.log(rand());

function f1(callback) {
  if (callback) callback();
  setTimeout(function () {
    console.log("f1");
  }, rand());
}

function f2(callback) {
  if (callback) callback();
  setTimeout(function () {
    console.log("f2");
  }, rand());
}

function f3(callback) {
  if (callback) callback();
  setTimeout(function () {
    console.log("f3");
  }, rand());
}

f1(f1Callback);
function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}
function f3Callback() {
  console.log("Olá Mundo!");
}

/*
f1(function () {
  f2(function () {
    f3(function () {
      console.log("Olá Mundo!");
    });
  });
});
*/

// O código acima é um exemplo de como usar callbacks em JavaScript.

// o inferno do callback hell (socorro kkk)
// im on my way to the promised land, highway to hell, highway to hell, highway to hell
