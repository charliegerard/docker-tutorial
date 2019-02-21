const axios = require('axios');

export const getData = () => {
  axios({
    method:'get',
    url:'http://localhost:5000/getData',
    responseType:'stream'
  })
    .then(function (response) {
      console.log(response)
    });
}
