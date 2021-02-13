const fs = require('fs')
const path = require('path')
const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(_, conteudo){   /* _  não usarei este parametro */
    console.log(conteudo.toString())
}

// console.log('Lendo arquivo...');
// fs.readFile(caminho,exibirConteudo)
// console.log('Finalizado lendo  arquivo...');

// ou sincrono 

console.log('Lendo arquivo...');
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString());
console.log('Finalizado lendo  arquivo...');

