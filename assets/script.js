var searchBtn = document.getElementById("searchBtn")
var searchBar = document.getElementById("searchBar")
var result = document.getElementById("result")

var history = document.getElementById("history")

var currentTemp = document.getElementById("currentTemp")
var currentWind = document.getElementById("currentWind")
var currentHumidity = document.getElementById("currentHumidity")

var oneTemp = document.getElementById("oneTemp")
var oneWind = document.getElementById("oneWind")
var oneHumidity = document.getElementById("oneHumidity")

var baseURL = "https://api.openweathermap.org/data/2.5/forecast?lat=41.736933&lon=-111.833826&appid=1c9903c287a36ef7e14ef5008002dd64"

var apiKey = "1c9903c287a36ef7e14ef5008002dd64"


$(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('(MMM D, YYYY)'));
});

function getWeather(city) { //function has been passed city value for the query URL to complete.
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var temp = (data.main.temp);
      var wind = (data.wind.speed);
      var humidity = (data.main.humidity);
      currentTemp.textContent = temp;
      currentWind.textContent = wind;
      currentHumidity.textContent = humidity;

    });
}



function userInput() { //function selects the city searched and enters the city name onto results div.
  var city = searchBar.value;
  // console.log(city);
  getWeather(city)
  result.textContent = city;
  localStorage.setItem("city", city);

  var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial";
  fetch(forecastURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i += 8) {
        console.log(data.list[i].main.temp);
        console.log(data.list[i].wind.speed);
        console.log(data.list[i].main.humidity);
        // oneTemp.textContent = forecastTemp;
        // oneWind.textContent = forecastWind;
        // oneHumidity.textContent = forecastHumidity;
      };
    });
};

searchBtn.addEventListener("click", userInput)



// function history () {

// };

//might need a for loop for history



// var forecastTemp = (data.list[0].main.temp);
// var forecastWind = (data.list[0].wind.speed);
// var forecastHumidity = (data.list[0].main.humidity);