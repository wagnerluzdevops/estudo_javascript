const { interval } = require ('rxjs')
const { map, concatAll } = require ('rxjs/operators')

interval(1000)  // o interval cria um Observable 
.pipe (
    map(_ => [1,2,3]),   //  o  _  diz para ignorar os parametros, so fazer o que vem apos => 
                        // neste caso o map retornara sempre o array [1,2,3]
    concatAll()         //  concatAll() ira converter o array em partes dele 
)
.subscribe(console.log)

