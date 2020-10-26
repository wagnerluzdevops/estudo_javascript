function forEach(items, callback) {
    let meuretorno = new Array();
  for (let index = 0; index < items.length; index++) {
    meuretorno[index] = callback(items[index]);
  }
return meuretorno
}

module.exports = forEach;

minhaCallBack = x => 42 + x;

console.log('Teste de CallBack : ' + forEach([0, 1], minhaCallBack));
