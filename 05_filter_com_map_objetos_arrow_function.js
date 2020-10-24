let result = [
  {nome:"Ana", idade:20},
  {nome:"Pedro", idade:30},
  {nome:"Roberto", idade:15},
  {nome:"Angela", idade:40},
  {nome:"Ruan", idade:50}
  ];

  const getNome = n => n.nome;

  let item = result
      .filter(n => n.idade > 30)
      .map(getNome);
  
  console.log(item);
