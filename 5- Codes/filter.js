let objeto = [
    {id:1, nome: 'Paul', age: 20, categories:[
        {id:9, entity:'fifa'},
        {id:8, entity:'fpf'},
        {id:1, entity:'concacaf'},
    ]},
    {id:2, nome: 'Raul', age: 35, categories:[
        {id:9, entity:'fifa'},
        {id:7, entity:'uefa'},
     
    ]},
    {id:3, nome: 'Ronaldo', age: 36, categories:[
        {id:9, entity:'fifa'},
        {id:7, entity:'uefa'},
        {id:2, entity:'cbf'},
    ]},
]


let retorno = objeto.filter(player => player.categories.some(cat => cat.id == 2));

console.log(JSON.stringify(retorno));