let meuArray = [3,2,1,-3,4,7];

let trazTotal = (total, current) => total + current;

let novoArray = meuArray.reduce((total, current) => total + current,0);

 // OU

let novoArray2 = meuArray.reduce(trazTotal,0);

console.log(novoArray);

console.log(novoArray2);

// reduce retorna UM VALOR TOTAL calculado pela função passada 