let n, z, i, k, theta, answer;
const pi = Math.PI, e = Math.E;;
n = 2, z = 1, i = 2, k = 1, theta = 90;

let a1 = i * ((theta + (2 * k * pi)) / n);
let a2 = Math.pow(e, a1);
let a3 = Math.sqrt(z);
answer = a3 * a2;

console.log(answer);
