"use strict";
// Type Utilities 
//para aplicar o readonly em todo o objeto e impedir que ele seja alterado basta fazer como abaixo:
const todo = {
    title: 'Dormir',
    description: 'acordar cedo',
    complete: true
};
// dessa forma não será possivel alterar a propriedade
todo.complete = false;
// Ao invés de tentar alterar o objeto será criado um segundo objeto que trará as propriedades que eu quero modificar
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), { fieldsToUpdate });
}
//aqui ocorre um problema, pois eu quero atualizar apenas um campo, porém como a propriedades fieldsToUpdate é Todo ele requer que eu passe as outras propriedades
const todo2 = updateTodo(todo, { complete: false });
// para corrigir posso fazer assim, o campo fieldsToUpdate eu passo um Partial que me dará permissão para alterar os campos que eu quiser
function updateTodo2(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), { fieldsToUpdate });
}
//o objeto abaixo dá erro pois foi passado que o TodoPreview só teria title ou description
const todo4 = {
    title: 'Viajar',
    complete: true
};
// nesse caso agora o title vai dar erro, pois ele precisa ser omitido
const todo5 = {
    title: 'Viajar',
    complete: true
};
