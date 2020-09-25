// O intersection é como se fosse uma soma de tipagens

//definindo o primeiro tipo
type Info = {
  name: string;
  age: number;
  employed?: boolean;
}

//testando o tipo criado
const person: Info = {
  name: 'Fabiano',
  age: 32,
  employed: false,
}

//definindo o segundo tipo
type Background = {
  degree: string;
  concluded: boolean;
}

// ao criar o terceiro tipo ele será a soma do tipos criados, isto é, a variável que for tipada com esse terceiro tipo deverá conter as propriedades e tipos que forem setados nos tipos que derem origem a esse terceiro tipo
type Information = Info & Background;

// esse objeto dará erro pois está faltndo algumas propriedades
const someOne2: Information = {
  name: 'Fabiano',
  employed: false,
  degree: 'Chemistry',
}

// Apesar desse não ter a propriedade employed não dá erro, pois essa é uma propriedade opcional
const someOne: Information = {
  name: 'Fabiano',
  age: 32,
  degree: 'Chemistry',
  concluded: true,
}

