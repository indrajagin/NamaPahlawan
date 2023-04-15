import pahlawans from './pahlawans.js';

class DataSource {
  static searchPahlawan(keyword) {
    return fetch(`https://indonesia-public-static-api.vercel.app/api/heroes/?name=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.id) {
            return Promise.resolve(responseJson);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}

export default DataSource;
