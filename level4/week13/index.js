function createWeather(temperature, description, humidity) {
  return {
    temperature: temperature,
    description: description,
    humidity: humidity,
  };
}

const weather = {
  Cairo: [
    createWeather(10, "Sunny", 20),
    createWeather(12, "Partly Sunny", 50),
    createWeather(13, "Cloudy", 30),
  ],
};

async function fetchCurrentWeather(city) {
  return new Promise((resolve, reject) => {
    if (weather[city]) {
      setTimeout(() => resolve(weather[city][0]), 2000);
    } else {
      reject("Invalid City");
    }
  });
}
async function fetchForecast(city) {
  return new Promise((resolve, reject) => {
    if (weather[city]) {
      setTimeout(() => resolve(weather[city]), 3000);
    } else {
      reject("Invalid City");
    }
  });
}

async function fetchWeatherData(city) {
  return Promise.all([fetchCurrentWeather(city), fetchForecast(city)])
    .then((data) => ({
      currentWeather: data[0],
      forecast: data[1]
    }))
    .catch((error) => {
      console.log(error);
      return {};
    });
}

fetchWeatherData("Cairo").then(result => console.log(result))
