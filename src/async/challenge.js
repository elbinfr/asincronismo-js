const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (url) => {
  try {
    let characters = await fetchData(url);
    let location = await fetchData(`${characters.results[0].origin.url}`);
    console.log(`Total de personajes ${characters.info.count}`);
    console.log(`Personaje: ${characters.results[0].name}`);
    console.log(`Dimensión ${location.dimension}`);
  } catch (error) {
    console.error(error);
  }
}

getData(API);