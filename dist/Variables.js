"use strict";
// Tipando Variáveis
/* Para definir o tipo das variáveis é passado após a declaração ':type' */
let a = 'Fabiano';
let b = 32;
/* uma vez definido o tipo se eu tentar atribuir um tipo diferente será assinalado o erro */
a = 32;
b = 'Fabiano';
/* O type script define propriedades implícitas, como no exemplo abaixo se eu definir a variável um número
a variável terá a tipagem definida automaticamente */
let c = 32;
c = 'Fabiano';
// Ao definir o tipo any é possível em algum momento modificar o tipo como para string por exemplo
let var1 = 'Fabiano';
// daí ao mudar para string é possível acessar os métodos relacionados a string do JS
let stringLength = var1.length;
let stringLength2 = var1.length;
