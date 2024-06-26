const leia = require('readline-sync');


let salario ; salario = leia.questionInt("salario: ")
let abono ; abono = leia.questionInt("abono: ")

let novoSalario = salario + abono;

console.log("salário= " +salario.toFixed(2));
console.log("abono= " + abono.toFixed(2));
console.log("\ novo salário= " + novoSalario.toFixed(2));