var baseURL = "https://api.openweathermap.org/data/2.5/forecast?lat=41.736933&lon=-111.833826&appid=1c9903c287a36ef7e14ef5008002dd64"
var apiKey = "1c9903c287a36ef7e14ef5008002dd64"

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

var city;
var userInput;

fetch(baseURL)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
});


