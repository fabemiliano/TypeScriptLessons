// Promises

// a tipagem da promisse é feita no retorno da função com Promise<tipo>
const promise = ():Promise<string> => new Promise((resolve, reject) => {
  const isOpened: boolean = true;
  (isOpened) ? resolve('Opened') : reject('Not Opened')
})

promise().then((resolve) => console.log(resolve)).catch((reject) => console.log(reject))