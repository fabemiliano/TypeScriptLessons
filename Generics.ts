//Generics

// O generics é como se fosse um type: porém eu só defino o tipo quando a função for invocada, fazendo com
//que a tipagem seja dinâmica e não travada

// na função abaixo a função useState ao ser chamada receberá qual o type que será aplicado nas variáveis internas

//o extends é uma forma de impor que apenas os tipos declarados poderão ser invocados

// o sinal de igual indica qual que é o tipo padrão, isto é se eu não definir o S ao invocar ele será string por padrão
function useState<S extends number | string = string >() {
  let state: S;  // o tipo de state será determinado pelo tipo do generic que for passado ao invocar a fução
  function getState() {
    return state;
  }
  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState }
}

//Abaixo invoco a functioncão passando para S o tipo string, portanto números darão erro:
 const newState = useState<string>();
 newState.setState('45');
 newState.setState(45);

 //Abaixo como eu não passo nenhum tipo ele entende que será o padrão definido acima, o string
 const stateWithoutType = useState();
 newState.setState('45');
 newState.setState(45);


 //mesma coisa ao passar number
 const anotherState = useState<number>()
 anotherState.setState('45');
 anotherState.setState(45);


 //no caso abaixo ao invocar a função com booleano ocorre erro pois foi definido que S só pode ser number ou string
 const anotherState = useState<boolean>()
 anotherState.setState('45');
 anotherState.setState(45);


