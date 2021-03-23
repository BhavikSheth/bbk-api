// const button = document.querySelector("button")

function loadWeatherApp() {
  const weatherForm = document.querySelector("#get-weather form");

  weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();

    clearWeatherInfo();

    const API_KEY = "d44cad98190cfa5e0827ddc336f22609";
    const PROXY_URL = "https://cors-anywhere.herokuapp.com";

    const weatherInputValue = weatherForm.elements.weatherInput.value;

    // const mockedResponse = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({
    //       coord: { lon: 21.0938, lat: 7.1881 },
    //       weather: [
    //         { id: 500, main: "Rain", description: "light rain", icon: "10d" },
    //       ],
    //       base: "stations",
    //       main: {
    //         temp: 31.66,
    //         feels_like: 34.32,
    //         temp_min: 31.66,
    //         temp_max: 31.66,
    //         pressure: 1005,
    //         humidity: 48,
    //         sea_level: 1005,
    //         grnd_level: 942,
    //       },
    //       visibility: 10000,
    //       wind: { speed: 1.01, deg: 157, gust: 2.54 },
    //       rain: { "1h": 0.52 },
    //       clouds: { all: 63 },
    //       dt: 1616242815,
    //       sys: { sunrise: 1616215187, sunset: 1616258782 },
    //       timezone: 3600,
    //       id: 6255146,
    //       name: "Some other Country",
    //       cod: 200,
    //     });
    //   }, 2000);
    // });

    // mockedResponse.then((data) => {
    //   displayWeatherInfo(data);
    // });

    fetch(
      `${PROXY_URL}/https://api.openweathermap.org/data/2.5/weather?q=${weatherInputValue}&appid=${API_KEY}&units=metric`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        displayWeatherInfo(data);
      });

    // fetch(
    //   "https://api.openweathermap.org/data/2.5/weather?q=" +
    //     weatherInputValue +
    //     "&appid=" +
    //     API_KEY
    // );
  });
}

function clearWeatherInfo() {
  const weatherInfoSection = document.querySelector("#weather-info");
  weatherInfoSection.innerHTML = "";
}

function displayWeatherInfo(data) {
  const weatherInfoSection = document.querySelector("#weather-info");

  const locationHeader = document.createElement("h2");
  locationHeader.textContent = data.name;

  const temp = document.createElement("p");
  temp.innerHTML = `Temperature: ${Math.round(data.main.temp)}&#8451;`;

  const icon = document.createElement("img");
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  weatherInfoSection.appendChild(locationHeader);
  weatherInfoSection.appendChild(temp);
  weatherInfoSection.appendChild(icon);
}

loadWeatherApp();
