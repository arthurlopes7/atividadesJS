const leia = require('readline-sync');
let nota1 = leia.questionFloat("nota1: ");
let nota2 = leia.questionFloat("nota2: ");
let nota3 = leia.questionFloat("nota3: ") ;
let nota4 = leia.questionFloat("nota4: ");


let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("nota1= " +nota1.toFixed(2));
console.log("nota2= " +nota2.toFixed(2));
console.log("nota3= " +nota3.toFixed(2));
console.log("nota4= " +nota4.toFixed(2));
console.log("\nMédia final: " + media.toFixed(1));
