const leia = require('readline-sync');
let salarioBruto = leia.questionInt("salario bruto: ")
let adicionalNoturno = leia.questionInt("adicional noturno: ")
let horasExtras = leia.questionInt("horas extras: ")
let descontos = leia.questionInt("descontos: ")

let salarioLiquido = salarioBruto + adicionalNoturno + horasExtras + descontos;

console.log("salário bruto= " + salarioBruto.toFixed(2));
console.log("adicional noturno= " + adicionalNoturno.toFixed(2));
console.log("horas extras= " + horasExtras.toFixed(2));
console.log("descontos= " + descontos.toFixed(2));
console.log("\nsalário líquido= " + salarioLiquido.toFixed(2));
