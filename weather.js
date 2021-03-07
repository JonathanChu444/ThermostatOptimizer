var weather;
var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&appid=fdbaab2ff8ced2affab2e409b396310c";
var units = "&units=imperial";
var city = "";

const api_url = '';
async function getTemp(city){
    const api_url = api + city + apiKey + units;
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    console.log(data.base)
    const tempVal = data.main.temp;
    return tempVal;
}

async function myFunction() {
    var x = document.getElementById("city").value;
    var city = x;
    const tempVal = await getTemp(city);
    document.getElementById("demo").innerHTML = tempVal;
}
