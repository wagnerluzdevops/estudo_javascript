let result = [
  {label:"Registo 1", valor:1},
  {label:"Registo 2", valor:2}
  ];

  let item = result.map(function(val, indice, array) {
    // console.log(array.length);
    return val.valor + indice + array.length;
  });
  
  console.log('\n' + item[0]);

//  A função map recebe uma função callback
// que recebe VALOR , INDEX e o ARRAY !! - Podendo receber somente um destes parametros

// Retorna SEMPRE um array com a mesma qnt de elementos!
