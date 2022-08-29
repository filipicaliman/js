let varA = 'A';
let varB = 'B';
let varC = 'C';

const varATemp = varA   //salva o valor antes

varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC)

/**
 * ou
 * let varA = 'A';
 * let varB = 'B';
 * let varC = 'C';
 *
 * [varA, varB, varC] = [varB, varC, varA];
 * 
 * console.log(varA, varB, VarC)
 */