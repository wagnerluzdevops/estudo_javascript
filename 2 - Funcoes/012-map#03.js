

const carrinho = [
    {nome: 'Caneta', qtde: 10 , preco: 8.00},
    {nome: 'Borracha', qtde: 5 , preco: 6.00},
    {nome: 'Lápis', qtde: 15 , preco: 7.00},
    {nome: 'Caderno', qtde: 20 , preco: 15.00},
]

const  getValor = ({ qtde, preco }) => qtde * preco;  
// usando o destructuring, usando { } posso usar o nome do atributo direto, não preciso item => item.qtde * item.preco

console.log(carrinho.map(getValor));