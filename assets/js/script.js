const now = moment().format('L');
const key = '32ed05888dd11ce89460365fde5e625e';
const search = document.querySelector('#input');
const display = document.querySelector('#display');
const icon = document.querySelector('#icon');
function getWeather(lat, lon) {
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,minutely&units=imperial&lang=en&appid='+key)
  .then(response => {
    return response.json();
    })
  .then(data => {
    console.log(data);
    console.log(data.current);
    var iconCode = data.current.weather[0].icon;
    icon.setAttribute('src', 'http://openweathermap.org/img/wn/' + iconCode + '@2x.png');
    document.querySelector('#currentTemp').textContent = data.current.temp + " F";
    document.querySelector('#currentWind').textContent = data.current.wind_speed + " MPH";
    document.querySelector('#currentHumidity').textContent = data.current.humidity + " %";
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
      document.querySelector('#cityName').textContent = " " + data[0].name +", " + data[0].region;
      document.querySelector('#currentDate').textContent = now;
      console.log(now);
      getWeather(data[0].lat, data[0].lon);
    })
    .catch(err => {
      console.error(err);
    })
};
document.querySelector('button').addEventListener('click', function() {
  getLatLon(search.value);
});