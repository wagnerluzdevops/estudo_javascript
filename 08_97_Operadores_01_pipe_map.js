// Os dois tipos...abs// 
// 1. Operadores de Criação

const { of } = require('rxjs')

// 2. Operadores Encadeaveis  (Pipeable Operator)  // Pipe -> de cano
const { last, first, map } = require('rxjs/operators')

of(1,2, 'ana', false, 'último')
.pipe(
    last(),
    map(v => v[0])
    )
.subscribe(function(valor){
    console.log(`O Valor gerado foi: ${valor}`)
})

