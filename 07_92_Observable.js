// Observable , retornos

const { Observable, noop } = require("rxjs");

const obs$ = new Observable(subscriber => {   // recebe um subscriber ... 
    // Podemos fazer new Observable ou Observable.create 
    subscriber.next('Primeiro next do Observable')  // realiza 01 next ou vários
    subscriber.next('Segundo next do Observable')
    subscriber.next('Terceiro next do Observable')

    // gerando um erro
    if (Math.random() > 0.5) {
        subscriber.complete()
    } else {
        subscriber.error('Gerando erro !')
    }
}
)

// obs.subscribe(
    // Na sequenica => valor, erro e complete 
//     valor => console.log(`Valor: ${valor}`),
//     erro => console.log(`Erro:  ${erro}`),
//     () => console.log('Complete')
// )

// Ou podemos chamar passando um objeto 

obs$.subscribe({
    next(valor) {
        console.log(`Valor: ${valor}`)
    },
     // neste caso podemos trocar a ordem dos métodos , colocar o complete antes do error 
    complete() {
        console.log('Complete')
    },
    // noop,
    // noop  SE NÃO QUISER TRATAR O ERRO 
    error(msg) {
        console.log(`Msg: ${msg}`)
    }
  
})
