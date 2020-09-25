// Tipando Variáveis


/* Para definir o tipo das variáveis é passado após a declaração ':type' */

let a: string = 'Fabiano'
let b: number = 32;

/* uma vez definido o tipo se eu tentar atribuir um tipo diferente será assinalado o erro */

a = 32;
b = 'Fabiano';

/* O type script define propriedades implícitas, como no exemplo abaixo se eu definir a variável um número 
a variável terá a tipagem definida automaticamente */

let c = 32;
c = 'Fabiano';
