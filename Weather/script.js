async function fetchWeatherData() {
    console.log("Sending request...");
    // const location = document.getElementById('searchInput').value;
    const location = '89141';
    const requestURL = "https://api.weatherapi.com/v1/current.json?key=657a30cb69d44cdba9a01524231401&q=" + location;
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);

    // Error handling
    if (data.error) {
        console.error(`Unable to complete request. ${data.error.message}`);
    } else {
        console.log("Request successful.");
        populateWeather(data);
    }
}

function populateWeather(obj) {
    const city = document.getElementsByName('city');
    const temperature = document.getElementsByName('temperature');
    const forecast = document.getElementsByName('forecast');
    const icon = document.getElementsByName('icon');
    const humidity = document.getElementsByName('humidity');
    const localTime = document.getElementsByName('localtime');

    localTime.textContext = `Local Time: ${obj.location.localtime.slice(-5)}`;
    city.textContext = obj.location.name;
    temperature.textContext = `${Math.floor(obj.current.feelslife_f)} ºF`;
    forecast.textContext = obj.current.condition.text;
    icon.src = obj.current.condition.icon;
    humidity.textContext = `Humidity: ${obj.current.humidity}%`;
}

fetchWeatherData();