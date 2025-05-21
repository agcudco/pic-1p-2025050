const multiplicar = (a, b) => {
  let res = a * b;
  return res;
};

function producto(n1, n2) {
  let res = n1 * n2;
  return res;
}

let num1 = 10;
let num2 = 20;

let prod = producto(num1, num2);

console.log(prod);

let p = producto(num1, num2);

console.log(`El resultado entre ${num1} x ${num2} es ${p}`);

console.log("El resultado entre " + num1 + " x " + num2 + " es: " + p);

const obtenerPares = (numeros) => {
  return numeros.filter((n) => n % 2 === 0);
};

const arrayNums = [1, 3, 2, 4, 6, 10, 8, 5, 11, 15, 17, 21, 22];

const pares = obtenerPares(arrayNums)
console.log("original: "+arrayNums)
console.log(pares)