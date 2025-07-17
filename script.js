
async function fetchWeatherAPI() {
    const fetchResult = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Hong%20Kong?key=A37S86MVM24L3XAGA4C524R8B", 
        { mode: "cors" });
    const result = await fetchResult.json();
    const obj = {
        currentWeather: result.currentConditions.conditions,
        temperature: fahrenheitToCelcius(result.currentConditions.temp),
        feelsLike: fahrenheitToCelcius(result.currentConditions.feelslike),
        uvIndex: result.currentConditions.uvindex,
        visibility: result.currentConditions.visibility,
    }
    return obj;
}

fetchWeatherAPI().then(displayWeather);

function displayWeather (obj) {

    const container = document.querySelector(".container");

    const weather = document.createElement("div");
    weather.textContent = `Weather now: ${obj.currentWeather}`;
    container.appendChild(weather);

    const temp = document.createElement("div");
    temp.textContent = `Current temperature: ${obj.temperature}°C`;
    container.appendChild(temp);

    const feelsLike = document.createElement("div");
    feelsLike.textContent = `It's feeling like ${obj.feelsLike}°C!`;
    container.appendChild(feelsLike);

}

function fahrenheitToCelcius(f) {
    return ((f - 32)*5/9).toFixed(1);
}