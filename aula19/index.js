/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

referências (mutável) - array, object, function
*/

// let nome = 'Filipi';
// console.log(nome)

// let a = [1, 2, 3];
// let b = [...a]; //torna b independente de a
// let c = b;

// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Filipi');
// console.log(a, c)

const a = {
    nome: 'filipi',
    sobrenome: 'caliman'
};

const b = {...a};

a.nome = 'joao';
console.log(a);
console.log(b);
