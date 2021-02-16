
function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Numero repetido')
        } else {
            resolve(aleatorio)
        }


    })
}

async function gerarMegaSena(qntNumeros, tentativas = 1) {   // marcou como async , gera uma Promise 
    try {
        const numeros = []
        for (let _ of Array(qntNumeros).fill()) {     // Array().fill percorre o array, so quero percorrer !!
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        if (tentativas > 100) {
            throw 'Não deu certo !!'
        } else {
           return gerarMegaSena(qntNumeros, tentativas + 1) 
        }
    }
}

gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)


// gerarNumerosEntre(1, 5, [1, 2])
//     .then(console.log)
//     .catch(console.log)