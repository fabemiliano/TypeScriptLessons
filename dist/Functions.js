"use strict";
// Para tipar uma função é preciso tipar os argumentos e o retorno
const returnSomething = (x) => {
    return x * 2;
};
// A função abaixo está correta
console.log(returnSomething(2));
// A função abaixo está incorreta pois estou passando uma string como argumento sendo que a função requer um number
console.log(returnSomething('Fabiano'));
// Caso a função não tenha retorno é passado o tipo 'void'
const doNotReturn = (x) => {
    console.log(x);
};
// Caso a função não tenha retorno é for passado um tipo de retorno será acusado erro
const doNotReturnANumber = (x) => {
    console.log(x);
};
//A função abaixo retornará um erro, pois como a função pode não receber o terceiro parâmetro o TS avisa que pode dar erro
const sum = (a, b, c) => {
    return a + b + c;
};
//Para corrigir se faz um IF
const sum2 = (a, b, c) => {
    if (c !== undefined)
        return a + b + c;
    return a + b;
};
// Se passar um objeto como argumento de uma função, pode ser feita a tipagem das propriedades desse objeto
function Name(person) {
    console.log(person.name);
}
//Apesar da tipagem ser apenas name na declaração da função, é possível passar outras propriedades 
let obb = { name: 'Fabiano', age: 32 };
// Porém a propridade que foi definida, deve ser respeitada
let obb2 = { name: 2 };
Name(obb);
Name(obb2);
// (isso só funciona se o objeto for atribuido a uma variável e essa variável for passada como argumento)
Name({ name: 'Fabiano', age: 32 });
const teste = new Promise((r) => {
});
