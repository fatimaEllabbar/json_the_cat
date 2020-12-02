const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      callback(error,null);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        callback(null,data[0].description);
      } else {
        callback("the breed is not found",null);
      }
    }
  });
};
module.exports = { fetchBreedDescription };

