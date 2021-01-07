// add jquery
//funciton ajax call 
// "htps:" + variable + "gadjkgabkj"  vs `https://${variable}khgfhjfg`

// function forecastWeater(searchCity) {
//  ajax
// .addClass(“”).text(“the text”)

// var apiKey = "c40b28aa33c2bef2881ab9e4f13c3ef7";

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=c40b28aa33c2bef2881ab9e4f13c3ef7


$(document).ready(function(){
    $("#searchBtn").on("click", function() {
        var searchValue = $("#searchValue").val();
        console.log(searchValue)
        oneDayForecast(searchValue)
    })


    function oneDayForecast(searchValue) {
        var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=c40b28aa33c2bef2881ab9e4f13c3ef7`
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        
        // Store data inside object called response 
        .then(function(response) {
        console.log(response)
        var cityName = $("#cityName").text(response.name);
        // var cityDate = $("#cityDate").attr(moment().format("MMM Do YY"), response.date);
        var cityTempK = $("#cityTempK").text("Temp (K): " + response.main.temp);
        var cityHumid = $("#cityHumid").text("Humidity: " + response.main.humidity);
        var cityWind = $("#cityWind").text("Wind Speed: " + response.wind.speed);

        // covert kelvin to fahrenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        // display fahrenheit 
        $("#cityTempF").text("Temp (F): " + tempF.toFixed(2));

        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (K): " + response.main.temp);
        console.log("Temperature (F): " + tempF)
        })
        }



})
