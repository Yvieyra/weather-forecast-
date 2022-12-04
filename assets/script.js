var searchBtn = document.getElementById("searchBtn")
var searchBar = document.getElementById("searchBar")
var result = document.getElementById("result")


var searchHistory = document.getElementById("searchHistory")

var currentTemp = document.getElementById("currentTemp")
var currentWind = document.getElementById("currentWind")
var currentHumidity = document.getElementById("currentHumidity")

// var oneTemp = document.getElementById("oneTemp")
// var oneWind = document.getElementById("oneWind")
// var oneHumidity = document.getElementById("oneHumidity")

var baseURL = "https://api.openweathermap.org/data/2.5/forecast?lat=41.736933&lon=-111.833826&appid=1c9903c287a36ef7e14ef5008002dd64";

var apiKey = "1c9903c287a36ef7e14ef5008002dd64";


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
      var forecastTemp = (data.list[5].main.temp);
      var forecastWind = (data.list[5].wind.speed);
      var forecastHumidity = (data.list[5].main.humidity);
      oneTemp.textContent = forecastTemp;
      oneWind.textContent = forecastWind;
      oneHumidity.textContent = forecastHumidity;
      var forecastTemp1 = (data.list[13].main.temp);
      var forecastWind1 = (data.list[13].wind.speed);
      var forecastHumidity1 = (data.list[13].main.humidity);
      twoTemp.textContent = forecastTemp1;
      twoWind.textContent = forecastWind1;
      twoHumidity.textContent = forecastHumidity1;
      var forecastTemp2 = (data.list[21].main.temp);
      var forecastWind2 = (data.list[21].wind.speed);
      var forecastHumidity2 = (data.list[21].main.humidity);
      threeTemp.textContent = forecastTemp2;
      threeWind.textContent = forecastWind2;
      threeHumidity.textContent = forecastHumidity2;
      var forecastTemp3 = (data.list[29].main.temp);
      var forecastWind3 = (data.list[29].wind.speed);
      var forecastHumidity3 = (data.list[29].main.humidity);
      fourTemp.textContent = forecastTemp3;
      fourWind.textContent = forecastWind3;
      fourHumidity.textContent = forecastHumidity3;
      var forecastTemp4 = (data.list[37].main.temp);
      var forecastWind4 = (data.list[37].wind.speed);
      var forecastHumidity4 = (data.list[37].main.humidity);
      fiveTemp.textContent = forecastTemp4;
      fiveWind.textContent = forecastWind4;
      fiveHumidity.textContent = forecastHumidity4;
    });
    getHistory();
};


searchBtn.addEventListener("click", userInput);



function getHistory() {
var historyOne=localStorage.getItem("city");
searchHistory.textContent = historyOne;
console.log(historyOne);
  
}




//for loop in fetch function was not responding. 




