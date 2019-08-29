// const request = require('request');

// // const breedName = process.argv[2]; // slice the array
// const fetchBreedDescription = function(breedName, callback) {

//   const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
//   request(url, function(error, response, body) {
//     const data = JSON.parse(body);
//     const breed = data[0];
//     const desc = breed.description;
//     callback(error, desc);
//   });
// };

const request = require('request');

// const breedName = process.argv[2]; // slice the array

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, function(error, response, body) {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
      const breed = data[0];
      const desc = breed.description;
      callback(null, desc);
    }
   
    
    
  });
};
module.exports = { fetchBreedDescription };