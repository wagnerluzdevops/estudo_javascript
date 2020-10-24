

let meuArray = [1,3,4,5];

let modificaArray = n => n * 2;

let novoArray = meuArray.map(n => n * 2);

// OU

let novoArray2 = meuArray.map(modificaArray)

console.log(novoArray2);

console.log(novoArray);

// RETORNARÁ O ARRAY [ 2, 6, 8, 10 ]