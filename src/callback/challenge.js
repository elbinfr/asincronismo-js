let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API_URL = 'https://rickandmortyapi.com/api/character/';

function fetchData (apiUrl, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', apiUrl, true);
  xhttp.onreadystatechange = function (event) {
    if (this.readyState === 4) {
      if (this.status === 200) {        
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error ' + apiUrl);
        callback(error, null);
      }
    }
  }
  xhttp.send();
}

fetchData(API_URL, function (error, data) {
  if (error) return console.error(error);
  console.log(`Total de personajes: ${data.info.count}`);
  fetchData(data.results[0].origin.url, function (error2, data2) {
    if (error2) return console.error(error2);
    console.log(`El personaje ${data.results[0].name} pertenece a la dimension: ${data2.dimension}`);
  });
});