const leia = require('readline-sync');

// Leitura dos quatro valores
let n1 = leia.questionFloat("n1: ");
let n2 = leia.questionFloat("n2: ");
let n3 = leia.questionFloat("n3: ");
let n4 = leia.questionFloat("n4: ");

// Cálculo da diferença entre os produtos
let produto1 = n1 * n2;
let produto2 = n3 * n4;
let diferenca = produto1 - produto2;

// Exibição do resultado
console.log(`Diferença: ${diferenca}`);




