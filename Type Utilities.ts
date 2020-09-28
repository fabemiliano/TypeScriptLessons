// Type Utilities 

type Todo = {
  title: string;
  description: string;
  complete: boolean;
}
//para aplicar o readonly em todo o objeto e impedir que ele seja alterado basta fazer como abaixo:
const todo: Readonly<Todo> = {
  title: 'Dormir',
  description: 'acordar cedo',
  complete: true
}

// dessa forma não será possivel alterar a propriedade
todo.complete = false


// Ao invés de tentar alterar o objeto será criado um segundo objeto que trará as propriedades que eu quero modificar
function updateTodo(todo: Todo, fieldsToUpdate: Todo) {
  return { ...todo, fieldsToUpdate }
}

//aqui ocorre um problema, pois eu quero atualizar apenas um campo, porém como a propriedades fieldsToUpdate é Todo ele requer que eu passe as outras propriedades
const todo2: Todo = updateTodo(todo, { complete: false })

// para corrigir posso fazer assim, o campo fieldsToUpdate eu passo um Partial que me dará permissão para alterar os campos que eu quiser
function updateTodo2(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, fieldsToUpdate }
}

// PICK
// Com o pick eu posso selecionar propriedades de um type que eu queira aribuir a outro type
// abaixo o Pick está pegando as propriedades que foram escolhidas do tipo Todo e atribuido ao TodoPreview

type TodoPreview = Pick<Todo, 'title' | 'description'>

//o objeto abaixo dá erro pois foi passado que o TodoPreview só teria title ou description
const todo4: TodoPreview = {
  title: 'Viajar',
  complete: true
}

// OMIT

// O omit faz o oposto do PICK, isto é, o que for passado como parâmetro não deverá aparecer

type TodoPreviewWithOmit = Omit<Todo, 'title' | 'description'>


// nesse caso agora o title vai dar erro, pois ele precisa ser omitido
const todo5: TodoPreviewWithOmit = {
  title: 'Viajar',
  complete: true
}