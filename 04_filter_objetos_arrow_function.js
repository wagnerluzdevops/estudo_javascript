let result = [
  {nome:"Ana", idade:20},
  {nome:"Pedro", idade:30},
  {nome:"Roberto", idade:15},
  {nome:"Angela", idade:40},
  {nome:"Ruan", idade:50}
  ];

  let item = result.filter(n => n.idade > 30);
  
  console.log(item);

//  A função filter recebe uma função callback
// que recebe VALOR , INDEX e o ARRAY !! - Podendo receber somente um destes parametros , 
//  como neste exemplo que n recebe este valor para cada loop ! Pois filter faz um loop automaticamente por todos elementos do array !

// Retorna um array que atende a condição verdadeira!
