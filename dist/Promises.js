"use strict";
// Promises
// a tipagem da promisse é feita no retorno da função com Promise<tipo>
const promise = () => new Promise((resolve, reject) => {
    const isOpened = true;
    (isOpened) ? resolve('Opened') : reject('Not Opened');
});
promise().then((resolve) => console.log(resolve)).catch((reject) => console.log(reject));
