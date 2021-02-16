function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.9)
    // .then(v => console.log(v))
    // .then(console.log)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro Especifico: ${err}`)
    )
    .then(() => console.log('Quase FIM'))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('FIM'))
