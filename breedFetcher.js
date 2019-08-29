const request = require('request');

const breedName = process.argv[2]; // slice the array
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, function(error, response, body) {
  if (error) {
    return console.log("this is an error", error);
  }
    //json.parse to convert the json string into an actual object
  // console.log(typeof body);
  const data = JSON.parse(body);
  const breed = data[0];
  // console.log(data);
  // console.log(typeof data);
  // console.log(breed);
  
  if (breed) {
    console.log(breed.description); //data[0].description
  } else {
    console.log(`error no breed found, ${breedName} was not found`);
  }
  
})



