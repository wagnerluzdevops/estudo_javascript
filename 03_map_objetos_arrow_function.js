let result = [
  {label:"Registo 1", valor:1},
  {label:"Registo 2", valor:2}
  ];

  let item = result.map(n => n.valor);
  
  console.log(item[1]);

//  A função map recebe uma função callback
// que recebe VALOR , INDEX e o ARRAY !! - Podendo receber somente um destes parametros , 
//  como neste exemplo que n recebe este valor para cada loop ! Pois map faz um loop automaticamente por todos elementos do array !

// Retorna SEMPRE um array com a mesma qnt de elementos!
