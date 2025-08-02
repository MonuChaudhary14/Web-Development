const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");
const grantAccessButton = document.querySelector("[data-grantAccess]");

// variables required
const API_KEY = "679c3ad87fd140a7b45163730252807";
let oldTab = userTab;
oldTab.classList.add('current-tab');
getfromSessionStorage();

function switchTab(clickedTab){

    if(clickedTab != oldTab){

        oldTab.classList.remove("current-tab");

        oldTab = clickedTab;

        oldTab.classList.add("current-tab");


        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getSessionStorage();
        }

    }

}

userTab.addEventListener('click' , () =>{
    switchTab(userTab);
});

searchTab.addEventListener('click' , () =>{
    switchTab(searchTab);
});


function getfromSessionStorage(){

    const localCoordinates = sessionStorage.getItem("user-coordinates");

    if(!localCoordinates){

        grantAccessContainer.classList.add("active");

    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }

}

async function fetchUserWeatherInfo(coordinates){

    // const {lat, lon} = coordinates;
    const location = coordinates;

    grantAccessContainer.classList.remove("remove");
    loadingScreen.classList.add('active');


    // API Call

    try{
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=679c3ad87fd140a7b45163730252807&q=Pahasu&aqi=yes`);

        const data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err){
        loadingScreen.classList.remove("active")
        throw new Error("Data does not found");
    }
}


function renderWeatherInfo(weatherInfo){

     const cityName = document.querySelector("[data-cityName]");
     const countryIcon = document.querySelector("[data-countryIcon]");
     const desc = document.querySelector("[data-weatherDesc]");
     const weatherIcon = document.querySelector("[data-weatherIcon]");
     const temp = document.querySelector("[data-temp]");
     const windspeed = document.querySelector('data-windspeed');
     const humidity = document.querySelector('data-humidity');
     const cloudiness = document.querySelector('data-cloudiness');

    cityName.innerText = weatherInfo?.location?.name;
    countryIcon.src = `https://flagcdn.com/144*108/${weatherInfo?.location?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.current?.condition?.text;
    // weatherIcon.src = `http:`
    temp.innerText = weatherIcon?.current?.temp_c;
    windspeed.innerText = weatherIcon?.current?.wind_kph;
    humidity.innerText = weatherIcon?.current?.humidity;
    cloudiness.innerText = weatherIcon?.current?.cloud;

}

function showPosition(position){

    const userCoordinates = {
        lat : position.coords.latitude,
        lon: position.coords.longitude
    }

    sessionStorage.seItem("user-coordinates" , JSON.stringify(userCoordinates));

    fetchUserWeatherInfo(userCoordinates);

}

function getlocation(){

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert("No geo-location support");
    }
}

grantAccessButton.addEventListener('click' , getlocation);


const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener('submit' ,  () =>{

    e.preventDefault();

    let cityName = searchInput.Value;

    if(cityName === ""){
        return 
    }
    else{
        fetchUserWeatherInfo(cityName);
    }

})

async function fetchUserWeatherInfo(city){

    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove('active');

    try{
        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=679c3ad87fd140a7b45163730252807&q=Pahasu&aqi=yes`
        )
    const data = await response.json;
    loadingScreen.classList.remove("active");
    userInfoContainer.classList.addd("active");
    renderWeatherInfo(data);
    }
    catch(err){
        throw new Error("Data Not found");
    }

}



