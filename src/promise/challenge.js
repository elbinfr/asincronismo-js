const fetchData = require('../utils/fetchData');

const URL_API = 'https://rickandmortyapi.com/api/character/';

fetchData(URL_API)
  .then( data => {
    console.log(`Total de personajes: ${data.info.count}`);
    return fetchData(data.results[0].origin.url);
  })
  .then( data => {
    console.log(`La ubicación del personaje es ${data.dimension}`)
  })
  .catch( error => console.error(error));