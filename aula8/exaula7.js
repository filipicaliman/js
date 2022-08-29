const nome = 'Filipi';
const sobrenome = 'Caliman';
const idade = 24;
const peso = 83;
const alturaEmM = 1.86;
let imc; //peso / (altura * altura) 
let anoNascimento;
imc = peso /(alturaEmM * alturaEmM)
anoNascimento = 2022 - idade

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg')
console.log('tem', alturaEmM, 'altura e seu IMC é de', imc)
console.log(nome, sobrenome, 'nasceu em', anoNascimento + '.')
