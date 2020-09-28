"use strict";
// Map é uma forma diferente de se criar objetos. Há algumas diferenças na aplicação e no uso
// A tipagem é feita definindo o tipo da chave e do valor
let nameAge = new Map();
nameAge.set('Gon', 14);
nameAge.set('Kilbba', 14);
nameAge.set('Gon', 15);
console.log(nameAge);
console.log(nameAge.get('Gon'));
for (let key of nameAge.keys()) {
    console.log(key);
}
for (let value of nameAge.values()) {
    console.log(value);
}
nameAge.has('Gon');
nameAge.delete('Gon');
