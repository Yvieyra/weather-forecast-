var searchBtn = document.getElementById("searchBtn")
var searchBar = document.getElementById("searchBar")
var result = document.getElementById("result")

var baseURL = "https://api.openweathermap.org/data/2.5/forecast?lat=41.736933&lon=-111.833826&appid=1c9903c287a36ef7e14ef5008002dd64"
var baseURL2 = "http://api.openweathermap.org/geo/1.0/direct?q=Kansas City&limit=5&appid=1c9903c287a36ef7e14ef5008002dd64"

var apiKey = "1c9903c287a36ef7e14ef5008002dd64"

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

var city;

$(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('(MMM D, YYYY)'));
});

fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // for (var i = 0; i < data.length; i++) {
    //   console.log(data[i].name);
    //   console.log(data[i].main);
    // }
  });

function userInput() {
  city = searchBar.value;
  console.log(city);
 result.textContent = city
  localStorage.setItem("city", city)
}

searchBtn.addEventListener("click", userInput)

// function history () {

//   localStorage.getItem("")
// }

