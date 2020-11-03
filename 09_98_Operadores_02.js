const { XMLHttpRequest } = require('xmlhttprequest')
const { ajax } = require('rxjs/ajax')
const { map, concatAll } = require('rxjs/operators')

ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/wagnerluzdevops/repos'
    // url: 'https://api.github.com/users/cod3rcursos/repos'
})
.pipe(
    map(resp => JSON.parse(resp.xhr.responseText)),
    concatAll(),
    map(repo => repo.full_name)
   
)
.subscribe({
    next(x) { console.log('Repositorios ' + x); },
    error(err) { console.error('Algo aconteceu de errado: ' + err); },
    complete() { console.log('Finalizado'); }
})