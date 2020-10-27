// desafio !
// criar uma stream de numeros
// entre min e max com Observable !

const { Observable, noop } = require("rxjs");

function entre(min, max) {
  if (min > max) {
    
    // para evitar que o max seja menor que o min
    [min, max] = [max, min]; // usando destructiring
  }
 
  return new Observable(subscriber => {
      for(let i = min; i <= max; i++) {
          subscriber.next(i)
      }
      subscriber.complete()
  })
}

entre(4, 10)
.subscribe(
    num => console.log(`num = ${num}`),  
    noop,  // error
    () => console.log('Fim')  
    );
