const key = '32ed05888dd11ce89460365fde5e625e';
const search = document.querySelector('#input');
const display = document.querySelector('#display');
const button = document.querySelector('button');
const cityName = document.querySelector('#cityName');
function getWeather(lat, lon) {
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,minutely&units=imperial&lang=en&appid='+key)
  .then(response => {
    return response.json();
    })
  .then(data => {
    console.log(data);
    console.log(data.current);
    document.querySelector('#currentTemp').textContent = "Temp: " + data.current.temp;
    document.querySelector('#currentWind').textContent = "Wind: " + data.current.temp;
    document.querySelector('#currentHumidity').textContent = "Humidity: " + data.current.temp;
    document.querySelector('#uv').textContent = data.current.uvi;
  })
  .catch(err => {
	  console.error(err);
  })
};
function getLatLon(value) {
  fetch('https://weatherapi-com.p.rapidapi.com/search.json?q='+value, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      "x-rapidapi-key": "12b796900dmsh12b8fa6011f391ep1d4f63jsnff6a49444565"
    }
  })
  .then(response => {
    return response.json();
    })
    .then(data => {
      console.log(data[0]);
      console.log(data[0].name);
      document.querySelector('#cityName').textContent = data[0].name;
      getWeather(data[0].lat, data[0].lon);
    })
    .catch(err => {
      console.error(err);
    })
};
button.addEventListener('click', function() {
  getLatLon(search.value);
})