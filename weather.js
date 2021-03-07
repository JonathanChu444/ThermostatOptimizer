function energy_and_cost(diff) {
    var heat_energy;
    heat_energy = 1000*Math.abs(diff)/55;
    heat_energy =Math.round(heat_energy*100)/100;
    var heat_cost = heat_energy * .00001612 * 12;
    heat_cost = Math.round(heat_cost * 100)/100;
    if (diff > 0) 
    {
        var ans = heat_cost;
        return ans;
    } 
    else if (diff < 0) {
        var num1 = Math.round(heat_energy/3*100)/100;
        var num2 = Math.round(heat_cost/3*100)/100;
        var ans = num2;
        return ans;
    } 
    else 
    {
        var ans = 0;
        return ans;
    }
        
}
function inside_temp(outside_temp) {
    if (outside_temp < 68){
        return 68;
    }
    else if (outside_temp > 78) {
        return 78;
    }
    else {
        return (outside_temp);
    }
}


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
    var outside_temp = inside_temp(tempVal);
    var diff = outside_temp - tempVal;
    var ans = energy_and_cost(diff);
    outside_temp = outside_temp.toString();
    ans = ans.toString();
    
    document.getElementById("demo").innerHTML = "We recommend that you set your thermostat to " + outside_temp + " degrees Fahrenheit and we estimate the heat cost will be around " + ans + " U.S. dollars.";
}
