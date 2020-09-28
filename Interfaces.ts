// Interfaces


// é similiar ao type porém usa-se ; e não ,
// posso usar modifiers também com interfaces
interface User {
  name: string;
  age: number;
  readonly logged: boolean;
  // um método passado como propriedade deve ser tipado monstrando também o tipo do retorno
  getLastName: (name: string) => void
}

const user: User = {
  name: 'Fabiano',
  age: 32,
  logged: false,
  getLastName: (lastname) => console.log(name + lastname)
}

user.name = 'Antonio';
// não consigo alterar o logged, pois é readOnly
user.logged = false;


//As interfaces são estendíveis

interface Skills extends User {
  MSWord: 'good' | 'fair';
  MSExcel: 'good' | 'fair';
}

// O objeto dá erro pois como foi extendida a interface é preciso passar as propriedades da interfac estendida
const newUser: Skills = {
  MSWord: 'good',
  MSExcel: 'good',
}

// com todas as propriedades funciona normalmente
const anotherUser: Skills = {
  name: 'Fabiano',
  age: 32,
  logged: false,
  getLastName:(lastname) => console.log(name + lastname),
  MSWord: 'good',
  MSExcel: 'good',
}


// posso implementsr uma classe com a interace e assim a classe precisará ter todas as propriedades da interface:

interface Skill {
  MSWord: 'good' | 'fair';
  MSExcel: 'good' | 'fair';
}

class UserInfo implements Skill {
  MSWord: 'good' | 'fair';
  MSExcel: 'good' | 'fair';
  constructor(MSWord: 'good' | 'fair', MSExcel: 'good' | 'fair'){
    this.MSWord = MSWord;
    this.MSExcel = MSExcel;
  }
}