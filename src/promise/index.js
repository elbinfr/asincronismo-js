const someThingWillHappen = () => {
  return new Promise( (resolve, reject) => {
    if (true) {
      resolve('se cumplió la promesa 1');
    } else {
      reject('no se cumplió la promesa 1');
    }
  });
}

/*
someThingWillHappen()
  .then( response => console.log(response))
  .catch( error => console.log(error));
*/
const someThingWillHappen2 = () => {
  return new Promise( (resolve, reject) => {
    if (true) {
      resolve('se cumplió la promesa 2');
    } else {
      reject('no se cumplió la promesa 2');
    }
  });
}

const someThingWillHappen3 = () => {
  return new Promise( (resolve, reject) => {
    if (false) {
      resolve('se cumplió la promesa 3');
    } else {
      reject('no se cumplió la promesa 3');
    }
  });
}

/*
Promise.all([
  someThingWillHappen(),
  someThingWillHappen2(),
  someThingWillHappen3()
])
  .then( response => console.log(response) )
  .catch( error => console.log(error));
*/

const somethingWillHappen4 = () => {
  return new Promise ( (resolve, reject) => {
    let num = Math.floor(Math.random() * (10 - 1) + 1);
    console.log(num);
    if (num % 2 !== 0) {
      let error = new Error('Ocurrió un error');
      reject(error);
    } else {
      resolve(num);
    }
  });
};

somethingWillHappen4()
  .then( response => console.log(response))
  .catch( error => console.error(error));

