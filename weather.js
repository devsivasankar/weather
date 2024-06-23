function date(){
    var dateformat = new Date();
    var fullyear = dateformat.toDateString();
    var date = document.getElementById('date').innerHTML = fullyear;
}
date();

// API FETCH FROM OPENWEATHERMAP
const apikey = '1f2e74c2e91ffb615b9deba05ae2a88c';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function getweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();
    console.log(data)

    document.getElementById('city').innerHTML = data.name;
    document.getElementById('description').innerHTML = data.weather[0].main;
    document.getElementById('temperature').innerHTML = Math.round(data.main.temp) + " °C";
    document.getElementById('country').innerHTML = data.sys.country;
    document.getElementById('wind').innerHTML = data.wind.speed + " km/h";
    document.getElementById('humidity').innerHTML = data.main.humidity + " %";
    document.getElementById('feellike').innerHTML = Math.round(data.main.feels_like) + " °C";
    document.getElementById('maxtemp').innerHTML = Math.round(data.main.temp_max) + " °C";
    document.getElementById('mintemp').innerHTML = Math.round(data.main.temp_min) + " °C";
    document.getElementById('pressure').innerHTML = data.main.pressure + " mb";


  
    
}

var inputbox = document.getElementById('inputbox');
var button = document.getElementById('searchbtn');

button.addEventListener("click",()=>{
    getweather(inputbox.value);
        
});


