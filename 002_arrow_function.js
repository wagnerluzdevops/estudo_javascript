// arrow function
const felizNatal = () => console.log('Feliz Natal');
// felizNatal();


// const saudacao = (nome) => "Fala " + nome + "!!!";
// const saudacao = nome => `Fala  ${nome} !!!`;    
// `  ->  backticks , podemos interpolar 

// console.log(saudacao('Wagner'));

// OU

const saudacao = nome => {
    const cump = 'Amigo';
    return `Fala ${cump} ${nome} !!`;
};

console.log(saudacao('Wagner'));