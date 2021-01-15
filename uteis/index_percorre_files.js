const fs = require('fs')

const a = JSON.parse(fs.readFileSync('realm-export.json', 'utf-8'))
const b = JSON.parse(fs.readFileSync('realmUsuarios.json', 'utf-8'))

console.log('Chaves em A ', Object.keys(a).length)
console.log('Chaves em B ', Object.keys(b).length)

console.log('\nTa em B e não está em A\n')
for(const [key, value] of Object.entries(b)) {
    if(!(key in a)) {
        console.log(key)
    }
}

console.log('\nTa em A e não está em B\n')
for(const [key, value] of Object.entries(a)) {
    if(!(key in b)) {
        console.log(key)
    }
}
