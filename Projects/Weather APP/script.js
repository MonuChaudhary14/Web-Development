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

const API_key = "679c3ad87fd140a7b45163730252807";

initial();


function initial(){

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

async function display_information(result) {
  your_weather_container.style.display = "flex";

  const countryName = result.location.country;

  const code = countries[countryName];

  if (code) {
    flag.src = `https://flagcdn.com/48x36/${code.toLowerCase()}.png`;
  } else {
    flag.alt = "Flag not available";
  }

  city_name.innerText = result.location.name;
  clouds.src = '//cdn.weatherapi.com/weather/64x64/night/116.png';
  temp.innerText = result.current.temp_c + "°C";
  windspeed.innerText = result.current.wind_kph + " kph";
  humidity.innerText = result.current.humidity + "%";
  clouds_value.innerText = result.current.cloud + "%";
}



async function call_api(lat, long){

    let url = `https://geocode.maps.co/reverse?lat=${lat}&lon=${long}&api_key=689643989e80f720611876ndkbbda7b`;

    let response = await fetch(url);
    let data = await response.json();


    address = data.display_name;

    let fetch_url = `https://api.weatherapi.com/v1/current.json?key=679c3ad87fd140a7b45163730252807&q=${address}&aqi=yes`;

    let result = await fetch(fetch_url);
    let weather_data = await result.json();


    grant_access_container.style.display = "none";
    option_container.style.display = "flex";
    your_location_button.focus();
    display_information(weather_data);
}


function success(position){

    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    call_api(lat, long);

}

function error() {
  alert("Sorry, no position available.");
}

search_weather_button.addEventListener('click', searchWeather);

async function searchWeather(){

    search_weather_button.focus();

    grant_access_container.style.display = "none";
    your_weather_container.style.display = "none";

    search_weather_container.style.display = "flex";

}

async function search_function() {

    loading_container.style.display = "flex";
    
    let address = input_value.value;

    let fetch_url = `https://api.weatherapi.com/v1/current.json?key=679c3ad87fd140a7b45163730252807&q=${address}&aqi=yes`;

    let data = await fetch(fetch_url);

    let result = await data.json();

    loading_container.style.display = "none";
    display_information(result);

}

search_button.addEventListener('click' , search_function);


async function your_weather_function() {
    search_weather_container.style.display = "none";
    loading_container.style.display = "flex";

    let fetch_url = `https://api.weatherapi.com/v1/current.json?key=679c3ad87fd140a7b45163730252807&q=${address}&aqi=yes`;

    let data = await fetch(fetch_url);

    let result = await data.json();

    loading_container.style.display = "none";
    display_information(result);

}

your_location_button.addEventListener('click', your_weather_function);


const countries = {
  "Afghanistan": "AF",
  "Albania": "AL",
  "Algeria": "DZ",
  "Andorra": "AD",
  "Angola": "AO",
  "Argentina": "AR",
  "Armenia": "AM",
  "Australia": "AU",
  "Austria": "AT",
  "Azerbaijan": "AZ",
  "Bangladesh": "BD",
  "Belgium": "BE",
  "Bhutan": "BT",
  "Brazil": "BR",
  "Bulgaria": "BG",
  "Canada": "CA",
  "Chile": "CL",
  "China": "CN",
  "Colombia": "CO",
  "Croatia": "HR",
  "Czech Republic": "CZ",
  "Denmark": "DK",
  "Egypt": "EG",
  "Finland": "FI",
  "France": "FR",
  "Germany": "DE",
  "Greece": "GR",
  "Hong Kong": "HK",
  "Hungary": "HU",
  "Iceland": "IS",
  "India": "IN",
  "Indonesia": "ID",
  "Iran": "IR",
  "Iraq": "IQ",
  "Ireland": "IE",
  "Israel": "IL",
  "Italy": "IT",
  "Japan": "JP",
  "Kazakhstan": "KZ",
  "Kenya": "KE",
  "Kuwait": "KW",
  "Malaysia": "MY",
  "Mexico": "MX",
  "Nepal": "NP",
  "Netherlands": "NL",
  "New Zealand": "NZ",
  "Nigeria": "NG",
  "Norway": "NO",
  "Pakistan": "PK",
  "Philippines": "PH",
  "Poland": "PL",
  "Portugal": "PT",
  "Qatar": "QA",
  "Romania": "RO",
  "Russia": "RU",
  "Saudi Arabia": "SA",
  "Singapore": "SG",
  "South Africa": "ZA",
  "South Korea": "KR",
  "Spain": "ES",
  "Sri Lanka": "LK",
  "Sweden": "SE",
  "Switzerland": "CH",
  "Thailand": "TH",
  "Turkey": "TR",
  "Ukraine": "UA",
  "United Arab Emirates": "AE",
  "United Kingdom": "GB",
  "United States": "US",
  "Vietnam": "VN"
};
