function potencia(base) {
    return function(exp) {
        return Math.pow(base,exp)
    }
}

let potenciaDe2 = potencia(2)

console.log(potenciaDe2(3))

// console.log( potencia(2)(3) )

const boaTarde = function () {
    console.log('Boa Tarde');
}

// console.log(boaTarde());