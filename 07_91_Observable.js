// Inicio de Observable
// Comparação de Observable com Promise


const { Observable } = require("rxjs");

const promise = new Promise(resolve => {
    resolve('Primeiro Resultado do Promise!')
    resolve('Segundo Resultado do Promise!')  // NAO VAI APARECER !! A Promise so executa uma vez !
})

promise.then(console.log);   // Promise so dará um retorno por vez que é chamado !


const obs = new Observable(subscriber => {   // recebe um subscriber ... podemos fazer new Observable ou Observable.create 
    subscriber.next('Primeiro next do Observable')  // realiza 01 next ou vários
    subscriber.next('Segundo next do Observable')
    subscriber.next('Terceiro next do Observable')
} )

obs.subscribe(console.log)    
// No Observable damos um subscribe 