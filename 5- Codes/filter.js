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

let players = objeto.map((player) => {
    let result = player.categories.filter(p => { p.id === 2
       // console.log(p);
      
    })
    console.log(result);
   
    //     return p.id == 2 
    // console.log(player);
    })
    // )
// })
console.log(players);