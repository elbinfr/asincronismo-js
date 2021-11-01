let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url) => {
  return new Promise ( (resolve, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = (() => {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          resolve(JSON.parse(xhttp.responseText));
        } else {
          reject(new Error('Error en api'));
        }
      }
    });
    xhttp.send();
  });
}

module.exports = fetchData;
