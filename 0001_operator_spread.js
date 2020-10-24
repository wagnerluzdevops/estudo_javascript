
/*
Operador SPREAD   ... 
Permite que passemos um ou varios argumentos de uma vez !!

*/


function minhaFuncao(x, y, z) {
    console.log('x = ' + x);
    console.log('y = ' + y);
    console.log('z = ' + z);
 }
var args = [0, 1, 2];
minhaFuncao(...args);  // Ira distribuir os tres elementos do Array nos parametros de minhaFuncao  


// Outra possibilidade, usando ele no parametro da Função 

function minhaFuncaoDois(...params) {
    console.log('params = ' + params);
 }
var args = [0, 1, 2];
minhaFuncaoDois(args);  // posso passar todos de uma vez
minhaFuncaoDois(args[2]); // ou apenas 1

