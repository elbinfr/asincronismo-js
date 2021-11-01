const doSomethingAsync = () => {
  return new Promise( (resolve, reject) => {
    if (false) {
      setTimeout( () => {
        resolve('Se realizó alguna acción');
      }, 2000);
    } else {
      reject(new Error('Ocurrió un error'));
    }
  });
}

const execute = async () => {
  try {
    let something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.error(error);
  }  
}

console.log('Antes');
execute();
console.log('Después');