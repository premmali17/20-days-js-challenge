const apiKey = "YOUR_API_KEY";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {

    const city = cityInput.value;

    if(city === ""){
        alert("Enter city name");
        return;
    }

    getWeather(city);
});

async function getWeather(city){

    try{

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        document.getElementById("city").innerText =
        data.name;

        document.getElementById("temp").innerText =
        Math.round(data.main.temp) + "°C";

        document.getElementById("description").innerText =
        data.weather[0].description;

        document.getElementById("humidity").innerText =
        data.main.humidity + "%";

        document.getElementById("wind").innerText =
        data.wind.speed + " km/h";

        document.getElementById("icon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    }

    catch(error){
        alert("City not found");
    }
}