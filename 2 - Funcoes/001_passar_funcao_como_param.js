
function bomDia() {
    console.log('Bom dia !');
}

const boaTarde = function () {     // função anônima
    console.log('Boa tarde !');
}


function executarQualquerCoisa(fn) {
//   console.log(typeof fn);
    if (typeof fn === 'function'){   // ===   -> comparação estrita compara valores e tipos
        fn();
    }
  fn;
}


// executarQualquerCoisa(3);

// executarQualquerCoisa(bomDia);

// executarQualquerCoisa(boaTarde);   

// 2) Retornar uma função a partir de outra função

function potencia(base) {
    return function(exp) {
        return Math.pow(base,exp)
    }
        
}

const potenciaDe2 = potencia(2)   // potenciaDe2  agora é uma função !!
console.log(potenciaDe2(8));
// OU 
// console.log(potencia(2)(8));
