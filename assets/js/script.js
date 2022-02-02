const now = moment().format('L');
const input = document.querySelector('#input');
const searchHistory = document.querySelector('#searchHistory');
const display = document.querySelector('#display');
const icon = document.querySelector('#icon');
const uv = document.querySelector('#uv');
const fiveDays = document.querySelector('#fiveDays');
function historyButton(localHistory) {
  var history = [];
  for (var y = 0; y < localHistory.length; y++) {
    history[y] = document.createElement('button');
    searchHistory.appendChild(history[y]);
    history[y].className = 'button';
    history[y].textContent = localHistory[y];
    history[y].value = localHistory[y];
    history[y].setAttribute('type', 'submit');
  }
};
function searchHistoryDisplay() {
  var localHistory = [];
  searchHistory.innerHTML = "";
  for (var x = 0; x < localStorage.length; x++) {
    localHistory[x] = localStorage.key(x);
  }
  historyButton(localHistory);
};
function getWeather(lat, lon, name) {
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,minutely&units=imperial&lang=en&appid=32ed05888dd11ce89460365fde5e625e')
  .then(response => {
    return response.json();
  })
  .then(data => {
    localStorage.setItem(name, data.current.temp);
    var iconCode = data.current.weather[0].icon;
    icon.setAttribute('src', 'http://openweathermap.org/img/wn/' + iconCode + '@2x.png');
    document.querySelector('#currentTemp').textContent = data.current.temp + "°F";
    document.querySelector('#currentWind').textContent = data.current.wind_speed + " mph";
    document.querySelector('#currentHumidity').textContent = data.current.humidity + " %";
    uv.textContent = data.current.uvi;
    if (data.current.uvi < 3) {
      uv.className = 'uv-low';
    } else if (3 <= data.current.uvi < 6) {
      uv.className = 'uv-moderate';
    } else if (6 <= data.current.uvi < 8) {
      uv.className = 'uv-high';
    } else if (8 <= data.current.uvi < 11) {
      uv.className = 'uv-varyhigh';
    } else if (11 <= data.current.uvi) {
      uv.className = 'uv-extreme';
    }
    for (var i = 1; i < 6; i++) {
      var dayDateCalc = (data.daily[i].dt - data.daily[0].dt) / 24 / 60 / 60;
      var days = document.createElement('div');
      fiveDays.appendChild(days);
      days.className = 'days';
      var dayDate = document.createElement('h4');
      days.appendChild(dayDate);
      dayDate.textContent = moment().add(dayDateCalc, 'days').format('L');
      var dayIcon = document.createElement('img');
      days.appendChild(dayIcon);
      iconCode = data.daily[i].weather[0].icon;
      dayIcon.setAttribute('src', 'http://openweathermap.org/img/wn/' + iconCode + '.png');
      var dayMinTemp = document.createElement('h5');
      days.appendChild(dayMinTemp);
      dayMinTemp.textContent = "Temp ↓: " + data.daily[i].temp.min + "°F";
      var dayMaxTemp = document.createElement('h5');
      days.appendChild(dayMaxTemp);
      dayMaxTemp.textContent = "Temp ↑: " + data.daily[i].temp.max + "°F";
      var dayWindSpeed = document.createElement('h5');
      days.appendChild(dayWindSpeed);
      dayWindSpeed.textContent = "Wind: " + data.daily[i].wind_speed + " mph";
      var dayHumidity = document.createElement('h5');
      days.appendChild(dayHumidity);
      dayHumidity.textContent = "Humidity: " + data.daily[i].humidity + " %";
      searchHistoryDisplay();
    }
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
      getWeather(data[0].lat, data[0].lon, data[0].name);
    })
    .catch(err => {
      console.error(err);
    })
};
function getLatLonHistory(selectedHistory) {
  fetch('https://weatherapi-com.p.rapidapi.com/search.json?q='+selectedHistory, {
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
      getWeather(data[0].lat, data[0].lon, data[0].name);
    })
    .catch(err => {
      console.error(err);
    })
};

document.querySelector('#searchButton').addEventListener('click', function() {
  fiveDays.innerHTML = "";
  if (input.value == "" || input.value == null) {
    window.location.reload();
  } else {
  getLatLon(input.value);
  }
});
document.querySelector('#clearHistory').addEventListener('click', function() {
  localStorage.clear();
  window.location.reload();
});
$(document).on('click', '.button', function() {
  var selectedHistory = ($(this)[0].innerHTML);
  fiveDays.innerHTML = "";
  getLatLonHistory(selectedHistory);
});
searchHistoryDisplay();