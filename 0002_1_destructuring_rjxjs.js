// usando o destructuring com Rxjs

// const interval = rxjs.interval;   -> Poderiamos  fazer assim!

// Mas usando o destructuring podemos fazer :

const { interval }  = require('rxjs');  
// usar do lado esquerdo o nome da variavel igual a nome da função interval que o rxjs possui
// a variavel  interval contém a função interval do rxjs


console.log (interval);