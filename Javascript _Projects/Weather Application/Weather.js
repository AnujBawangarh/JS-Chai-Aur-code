const apikey = "4e20165fffde66c3e2aca2ede55a46e4";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchBox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weathericon = document.querySelector(".weather-icon")

async function checkweather(city){
    const response = await fetch(apiurl + `&q=${city}` + `&appid=${apikey}`);
    var data = await response.json();
    // console.log("this is response",response.json()); 

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weathericon.src = "images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weathericon.src = "images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weathericon.src = "images/mist.png";
    } else if(data.weather[0].main == "Fog"){
        weathericon.src = "images/fog.png";
    } 

    document.querySelector(".weather").style.display = "block";
}

searchbtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});