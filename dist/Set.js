"use strict";
// O set é como se fosse um objeto que contem apenas valores. Possui alguns métodos como forEach para iteração
let nameSet = new Set();
let nameSet2 = new Set(['Fabiano', 'Cooper']);
nameSet.add('Fabiano');
nameSet.add('Cooper').add('Keila');
console.log(nameSet);
console.log(nameSet.size);
console.log(nameSet2);
nameSet.clear();
for (let aux of nameSet) {
    console.log(aux);
}
