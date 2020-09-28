"use strict";
// Interfaces
const user = {
    name: 'Fabiano',
    age: 32,
    logged: false,
    getLastName: (lastname) => console.log(name + lastname)
};
user.name = 'Antonio';
// não consigo alterar o logged, pois é readOnly
user.logged = false;
// O objeto dá erro pois como foi extendida a interface é preciso passar as propriedades da interfac estendida
const newUser = {
    MSWord: 'good',
    MSExcel: 'good',
};
// com todas as propriedades funciona normalmente
const anotherUser = {
    name: 'Fabiano',
    age: 32,
    logged: false,
    getLastName: (lastname) => console.log(name + lastname),
    MSWord: 'good',
    MSExcel: 'good',
};
class UserInfo {
    constructor(MSWord, MSExcel) {
        this.MSWord = MSWord;
        this.MSExcel = MSExcel;
    }
}
