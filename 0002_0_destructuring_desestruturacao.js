// A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que
//  possibilita extrair dados de arrays ou objetos em variáveis distintas.
// * retirado do site https://developer.mozilla.org/pt-BR/

var a, b, rest;

[a, b] = [1, 2];

console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];   //  Usando o Operador Spread, que está no exemplo anterior !!

console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

