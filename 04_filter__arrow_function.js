
let meuArray = [1,3,4,5,6,8,20,40,60,80];

let filtro = n => n > 15;

  let novoArray = meuArray.filter(n => n > 15);

  // OU

  // let novoArray2 = meuArray.filter(filtro);
  
  console.log(novoArray);

  // console.log(novoArray2);

  // RETORNARÁ [ 20, 40, 60, 80 ]

//  A função filter recebe uma função callback
// que recebe VALOR , INDEX e o ARRAY !! - Podendo receber somente um destes parametros , 
//  como neste exemplo que n recebe este valor para cada loop ! Pois filter faz um loop automaticamente por todos elementos do array !

// Retorna um array que atende a condição verdadeira!
