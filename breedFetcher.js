const request = require('request');
const arg = process.argv.slice(2);
request('https://api.thecatapi.com/v1/breeds/search?q=' + arg[0], (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    if (data.length > 0) {
      console.log(data[0].description);
    } else {
      console.log("the breed is not found");
    }
  }
});
