var weather;
var api = "api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&appid=fdbaab2ff8ced2affab2e409b396310c";
var units = "&units=imperial";
var city = "London";

function myFunction() {
    var x = document.getElementById("city").value;
    var city = x;
    var url = api + city + apiKey + units;
    $.getJSON('api.openweathermap.org/data/2.5/weather?q=London&appid=fdbaab2ff8ced2affab2e409b396310c&units=imperial', function(data) {
        var temp = ${main.temp};
    }
    document.getElementById("demo").innerHTML = url;
}