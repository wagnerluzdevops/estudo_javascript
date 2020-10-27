
function forEach(items, callback) {
    let meuretorno = new Array();
  for (let index = 0; index < items.length; index++) {
    meuretorno[index] = callback(items[index]);
  }
return meuretorno
}

module.exports = forEach;

let result = new Array();

minhaCallBack = x => 42 + x;

result = forEach([0, 1], minhaCallBack);

console.log('Valores do Array : ' + result );
console.log('Tamanho do Array : ' + result.length );
