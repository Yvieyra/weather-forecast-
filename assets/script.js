var searchBtn = document.getElementById("searchBtn");
var searchBar = document.getElementById("searchBar");
var result = document.getElementById("result");


var searchHistory = document.getElementById("searchHistory");

var currentTemp = document.getElementById("currentTemp");
var currentWind = document.getElementById("currentWind");
var currentHumidity = document.getElementById("currentHumidity");

var apiKey = "1c9903c287a36ef7e14ef5008002dd64";


$(function () {
  var today = dayjs(); //gets current date
  $('#currentDay').text(today.format('(MMM D, YYYY)')); //inserts current date into correct HTML tag
  today.add(1, "days"); //adds one day to current date 
  $('#nextDay').text(today.add(1, "days").format('MMM D, YYYY')); //inserts date data into correct HTML tag 
  today.add(2, "days");
  $('#dayTwo').text(today.add(2, "days").format('MMM D, YYYY'));
  today.add(3, "days");
  $('#dayThree').text(today.add(3, "days").format('MMM D, YYYY'));
  today.add(4, "days");
  $('#dayFour').text(today.add(4, "days").format('MMM D, YYYY'));
  today.add(5, "days");
  $('#dayFive').text(today.add(5, "days").format('MMM D, YYYY'));
});



function getWeather(city) { //function has been passed city value for the query URL to complete.
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) { // the responde from the queryURL has provided current day weather details 
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
  // localStorage.setItem("city", city);
  localStorage.setItem("city", JSON.stringify(city));
  var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial";
  fetch(forecastURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) { // the responde from the queryURL has provided the next five days's weather details.
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
};


searchBtn.addEventListener("click", userInput); //event listener for search button 

function getHistory() { //gets city name to display on first button in search history section. Was attempting to get all search history to show up for all buttons. 
  // var historyOne = localStorage.getItem("city");
  // searchHistory.textContent = historyOne;
  // console.log(historyOne);
  var historyOne = JSON.parse(localStorage.getItem("city"));
  searchHistory.textContent = historyOne;
};
getHistory();
