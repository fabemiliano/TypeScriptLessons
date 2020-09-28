"use strict";
// O intersection é como se fosse uma soma de tipagens
//testando o tipo criado
const person = {
    name: 'Fabiano',
    age: 32,
    employed: false,
};
// esse objeto dará erro pois está faltndo algumas propriedades
const someOne2 = {
    name: 'Fabiano',
    employed: false,
    degree: 'Chemistry',
};
// Apesar desse não ter a propriedade employed não dá erro, pois essa é uma propriedade opcional
const someOne = {
    name: 'Fabiano',
    age: 32,
    degree: 'Chemistry',
    concluded: true,
};
