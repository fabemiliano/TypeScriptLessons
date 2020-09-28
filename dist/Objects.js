"use strict";
// Tipando Objetos
// A tipagem  mais básica é definir que a variável é do tipo objeto
let Obj;
Obj = { a: 1 };
Obj = true;
/* Na tipagem de um objeto são definidas quais são as propriedades que esse objeto terá e quais serão os tipos
dos valores de cada uma das propriedades. A notação "?" indica que a propriedade é opcional */
let obj = {
    name: 'Fabiano',
    age: 32,
    active: true,
};
console.log(a);
// //O objeto abaixo dará erro, pois a propriedade age não foi definida
const obj2 = {
    name: 'Fabiano',
    active: true,
};
/* Uma outra forma de definir um objeto é passando o formato abaixo, que indica o tipo das propriedades
e tipo dos valores, no caso abaixo como o valor é any posso passar qualquer tipo */
const obj3 = {
    name: 'Fabiano',
    age: 32,
};
