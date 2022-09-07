// const pessoa1 = {
//     nome: 'Filipi',
//     sobrenome: 'Caliman',
//     idade: 24
// };

// console.log(pessoa1.nome, pessoa1.sobrenome)
// console.log(pessoa1.sobrenome)
// console.log(pessoa1.idade)

// function criaPessoa (nome, sobrenome, idade) {
//     return {nome, sobrenome, idade}
// }

// const pessoa1 = criaPessoa('Filipi', 'Caliman', 24);
// const pessoa2 = criaPessoa('Bruno', 'Otávio', 35)

// console.log(pessoa1.nome, pessoa1.sobrenome);
// console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);

const pessoa1 = {
    nome: 'Filipi',
    sobrenome: 'Caliman',
    idade: 24,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();