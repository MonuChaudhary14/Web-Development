const your_location_button = document.querySelector(".your-weather-button");
const search_weather_button = document.querySelector(".search-weather-button");
const grant_access_button = document.querySelector(".grant-access-button");
const grant_access_container = document.querySelector(".grant-location-container");
const your_weather_container = document.querySelector(".your-weather-container");
const loading_container = document.querySelector(".loading-container");
const search_weather_container = document.querySelector(".search-container");
const city_name = document.querySelector(".city-name");
const clouds = document.querySelector(".clouds");
const temp = document.querySelector(".temp");
const windspeed = document.querySelector(".windspeed-value");
const humidity = document.querySelector(".humidity-value");
const clouds_value = document.querySelector(".clouds-value");
const search_button = document.querySelector('.search-button');
const input_value = document.querySelector(".input");
const option_container = document.querySelector(".option-container");
const flag = document.querySelector(".country-image");
let address;
let lat;
let long;

const API_key = "f6f3b0a1014558c112e25df31fe27a24";

initial();


function initial() {

  option_container.style.display = "none";
  grant_access_container.style.display = "flex";


  grant_access_button.addEventListener("click", getLocation);

}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function success(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;

  call_api(lat, long);
}

function error() {
  alert("Sorry, no position available.");
}


async function call_api(lat, long) {
  loading_container.style.display = "flex";
  grant_access_container.style.display = "none";

  let fetch_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_key}&units=metric`;

  let result = await fetch(fetch_url);
  let weather_data = await result.json();

  if (!result.ok) {
    alert("Weather data not found");
    return;
  }

  loading_container.style.display = "none";
  option_container.style.display = "flex";
  your_location_button.style.backgroundColor = "gray";
  search_weather_button.style.backgroundColor = "transparent";
  display_information(weather_data);
}

async function display_information(result) {
  your_weather_container.style.display = "flex";
  your_location_button.classList.add("button-color");
  const countryCode = result.sys.country;
  if (countryCode) {
    flag.src = `https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`;
  } else {
    flag.alt = "Flag not available";
  }


  city_name.innerText = result.name;
  clouds.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}.png`;
  temp.innerText = result.main.temp + "°C";
  windspeed.innerText = (result.wind.speed) + " m/s";
  humidity.innerText = result.main.humidity + "%";
  clouds_value.innerText = result.clouds.all + "%";
}



search_weather_button.addEventListener('click', searchWeather);

async function searchWeather() {

  search_weather_button.focus();

  grant_access_container.style.display = "none";
  your_weather_container.style.display = "none";
  your_location_button.style.backgroundColor = "transparent";
  search_weather_button.style.backgroundColor = "gray";
  search_weather_container.style.display = "flex";

}


async function search_function() {
  loading_container.style.display = "flex";

  let address = input_value.value;
  let fetch_url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${API_key}&units=metric`;

  let result = await fetch(fetch_url);
  let weather_data = await result.json();

  if (!result.ok) {
    alert("Weather data not found");
    loading_container.style.display = "none";
    return;
  }

  loading_container.style.display = "none";
  display_information(weather_data);
}


search_button.addEventListener('click', search_function);


async function your_weather_function() {
  search_weather_container.style.display = "none";
  loading_container.style.display = "flex";
  your_location_button.style.backgroundColor = "gray";
  search_weather_button.style.backgroundColor = "transparent";

  let fetch_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_key}&units=metric`;

  let result = await fetch(fetch_url);
  let weather_data = await result.json();

  loading_container.style.display = "none";
  display_information(weather_data);
}

your_location_button.addEventListener('click', your_weather_function);
