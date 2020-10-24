
function soma(a,b,c) {
    return a + b + c;
}

let result = soma(2,3,4);

console.log(result);

// currying é o nome desta técnica de criarmos uma funçao que retorna outra função
// mais a frente veremos a real utilidade desta técnica

function soma_currying(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

let result_currying = soma_currying(2)(3)(4);   // cada argumento precisa estar entre parêntes

console.log(result_currying);

