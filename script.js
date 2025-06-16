// const apiKey ="7b2fd3b5f10b1c2e3072977c1bc95ebd";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=germany&appid=7b2fd3b5f10b1c2e3072977c1bc95ebd";


//    const searchBox = document.querySelector(".search input");
//    const searchBtn = document.querySelector(".search button");
//    const weatherIcon = document.querySelector(".weather-icon");



// async function checkWeather(city){
//     const response =  await fetch(apiUrl + city + `&appid = ${apiKey}`);
//     var data = await response.json();

//     if(response.status == 404){
//         document.querySelector(".error").style.display = "block";
//         document.querySelector(".weather").style.display = "none";
//     }else{


//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".Wind").innerHTML = data.wind.speed + "km/hr";


//     if(data.weather[0].main == "cloud"){
//         weather.src = "images/cloud.png";
//     }
//     else if(data.weather[0].main == "clear"){
//         weather.src = "images/clear.jpeg";
//     }
//     else if(data.weather[0].main == "rain"){
//         weather.src = "images/rain.jpeg";
//     }
//     else if(data.weather[0].main == "dizzle"){
//         weather.src = "images/dizzle.jpeg";
//     }
//     else if(data.weather[0].main == "mist"){
//         weather.src = "images/mist.png";
//     }


//     document.querySelector(".weather").Style.display = "block";
//     document.querySelector(".error").style.display = "none";
//     }
    

// }

// searchBtn.addEventListener("click", ()=>{
//     checkWeather(searchBox.value);

// })

// checkWeather();
































const apiKey = "7b2fd3b5f10b1c2e3072977c1bc95ebd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    if (!city) {
        city = "germany";
    }

    const response = await fetch(apiUrl + city + `&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + "km/hr";

        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/cloud.png";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.jpeg";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.jpeg";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

checkWeather("germany");



