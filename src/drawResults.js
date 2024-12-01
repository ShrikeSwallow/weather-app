const drawResults = (city, data) => {
  const results = document.querySelector(".results-container");
  results.innerHTML = "";

  const header = document.createElement("h2");
  header.textContent = `Current weather in ${city}`;
  results.appendChild(header);

  const weatherList = document.createElement("ul");
  weatherList.classList.add("weather-list");

  const temp = document.createElement("li");
  temp.classList.add("temp");
  temp.textContent = `Temperature: ${data.temp}°C`;
  weatherList.appendChild(temp);

  const tempFeelsLike = document.createElement("li");
  tempFeelsLike.classList.add("temp-feels-like");
  tempFeelsLike.textContent = `Feels like: ${data.feelslike}°C`;
  weatherList.appendChild(tempFeelsLike);

  const conditions = document.createElement("li");
  conditions.classList.add("conditions");
  conditions.textContent = `Conditions: ${data.conditions}`;
  weatherList.appendChild(conditions);

  const humidity = document.createElement("li");
  humidity.classList.add("humidity");
  humidity.textContent = `Humidity: ${data.humidity}%`;
  weatherList.appendChild(humidity);

  const windspeed = document.createElement("li");
  windspeed.classList.add("windspeed");
  windspeed.textContent = `Wind speed: ${data.windspeed}km/h`;
  weatherList.appendChild(windspeed);

  results.appendChild(weatherList);
};

export { drawResults };
