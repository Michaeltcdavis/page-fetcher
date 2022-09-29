const input = process.argv.splice(2);
const net = require('net');
const fs = require('fs');
const request = require('request');

const fetcher = function (input) {
  const URL = input[0];
  const dataToLocation = input[1]
  //console.log(URL, dataLocation);
  request(URL, (error, response, body) => {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', body);
    chars = body.length
    saveToFile(body, chars, dataToLocation);
  });
}

const saveToFile = function (data, bytes, saveLocation) {
  fs.writeFile(saveLocation, data, err => {
    if (err) {
      console.error(err)
    }
    console.log(`downloaded and saved ${bytes} bytes to ${saveLocation}`);
  })
}

fetcher(input);