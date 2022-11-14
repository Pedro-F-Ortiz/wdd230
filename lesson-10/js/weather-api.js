
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=2dc2ba8eb660cba5ddf99eee26ed3c36";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
  };
getWeather();