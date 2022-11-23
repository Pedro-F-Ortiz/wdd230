
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4682991&appid=2dc2ba8eb660cba5ddf99eee26ed3c36";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    // °F = (K - 273.15)* 1.8000 + 32.00
    
    document.querySelector('#current-temp').textContent = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(2);
  };
getWeather();


const temp = document.querySelector("#temp").textContent;
const windspeed = document.querySelector("#wind-speed").textContent;

if (temp < 50 && windspeed > 3 ) {
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow (windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

    const windchill = document.querySelector("#wind-chill")

    windchill.innerHTML = chill + "&#8457;";
}


