const axios = require('axios');
const url = 'http://app.linkedin-reach.io/words?difficulty=6&count=1';

const http = axios.create({
  baseURL: url
});


const getAll = (callback) => {
  console.log('In GETALL, utils/')
  http.get(url)
  .then((response) => {

    callback(null, response.data);
  })
  .catch((error) => {
    console.log(error)
    callback(error, null);
  })
}

module.exports = {
  getAll,
  http
};

